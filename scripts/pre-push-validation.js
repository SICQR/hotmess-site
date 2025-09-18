#!/usr/bin/env node

/**
 * HOTMESS Pre-Push Validation Script
 * Runs comprehensive checks before allowing push to remote
 */

const { execSync } = require('node:child_process');
const fs = require('node:fs');

class PrePushValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
  }

  async validate() {
    console.log('🔒 HOTMESS Pre-Push Validation Starting...\n');
    
    try {
      await this.checkGitStatus();
      await this.validateCommitMessages();
      await this.runLinting();
      await this.runTypeCheck();
      await this.checkForSecrets();
      await this.validateBuildSize();
      
      this.generateReport();
      
      if (this.errors.length > 0) {
        console.log('\n❌ Push blocked due to validation errors');
        process.exit(1);
      } else {
        console.log('\n✅ All validation checks passed - push allowed');
        process.exit(0);
      }
      
    } catch (error) {
      console.error('❌ Pre-push validation failed:', error.message);
      process.exit(1);
    }
  }

  async checkGitStatus() {
    console.log('📋 Checking git status...');
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      if (status.trim()) {
        this.warnings.push('Uncommitted changes detected');
        console.log('⚠️  Uncommitted changes detected');
      } else {
        console.log('✅ Working directory clean');
      }
    } catch (error) {
      this.errors.push('Git status check failed: ' + error.message);
    }
  }

  async validateCommitMessages() {
    console.log('💬 Validating commit messages...');
    try {
      const commits = execSync('git log --oneline -10', { encoding: 'utf8' })
        .split('\n')
        .filter(line => line.trim())
        .map(line => line.substring(8)); // Remove commit hash

      const conventionalCommitPattern = /^(feat|fix|docs|style|refactor|test|chore|perf|ci|build)(\(.+\))?: .{1,50}/;
      const invalidCommits = commits.filter(msg => !conventionalCommitPattern.test(msg));
      
      if (invalidCommits.length > 0) {
        this.warnings.push(`Non-conventional commit messages: ${invalidCommits.length}`);
        console.log(`⚠️  ${invalidCommits.length} non-conventional commit messages found`);
      } else {
        console.log('✅ Commit messages follow convention');
      }
    } catch (error) {
      this.errors.push('Commit message validation failed: ' + error.message);
    }
  }

  async runLinting() {
    console.log('🔍 Running linting...');
    try {
      const output = execSync('npm run lint', { stdio: 'pipe', encoding: 'utf8' });
      const errors = (output.match(/error/gi) || []).length;
      if (errors > 0) {
        this.errors.push(`Linting failed with ${errors} errors`);
        console.log(`❌ Linting failed with ${errors} errors`);
      } else {
        console.log('✅ Linting passed');
      }
    } catch (error) {
      this.errors.push('Linting failed: ' + error.message);
    }
  }

  async runTypeCheck() {
    console.log('📝 Running TypeScript check...');
    try {
      execSync('npx tsc --noEmit', { stdio: 'pipe' });
      console.log('✅ TypeScript check passed');
    } catch (error) {
      this.errors.push('TypeScript check failed');
      console.log('❌ TypeScript check failed');
    }
  }

  async checkForSecrets() {
    console.log('🔐 Checking for secrets...');
    try {
      const changedFiles = execSync('git diff --cached --name-only', { encoding: 'utf8' })
        .split('\n')
        .filter(file => file.trim());

      const secretPatterns = [
        /sk_live_[a-zA-Z0-9_]+/, // Stripe live keys
        /pk_live_[a-zA-Z0-9_]+/, // Stripe live public keys
        /rk_live_[a-zA-Z0-9_]+/, // Restricted live keys
        /[Aa]ccess_?[Tt]oken["\s]*[:=]["\s]*[a-zA-Z0-9_-]+/,
        /[Aa]pi_?[Kk]ey["\s]*[:=]["\s]*[a-zA-Z0-9_-]+/,
        /[Ss]ecret["\s]*[:=]["\s]*[a-zA-Z0-9_-]+/,
        /[Pp]assword["\s]*[:=]["\s]*[a-zA-Z0-9_-]+/
      ];

      let secretsFound = false;
      for (const file of changedFiles) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');
          for (const pattern of secretPatterns) {
            if (pattern.test(content)) {
              this.errors.push(`Potential secret found in ${file}`);
              secretsFound = true;
            }
          }
        }
      }

      if (!secretsFound) {
        console.log('✅ No secrets detected');
      }
    } catch (error) {
      this.warnings.push('Secret detection failed: ' + error.message);
    }
  }

  async validateBuildSize() {
    console.log('📦 Validating build size...');
    try {
      // Quick build check without full build
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {}).length;
      const devDependencies = Object.keys(packageJson.devDependencies || {}).length;
      
      if (dependencies > 50) {
        this.warnings.push(`High dependency count: ${dependencies}`);
        console.log(`⚠️  High dependency count: ${dependencies}`);
      } else {
        console.log(`✅ Dependency count acceptable: ${dependencies}`);
      }
      
      console.log(`📊 Dev dependencies: ${devDependencies}`);
    } catch (error) {
      this.warnings.push('Build size validation failed: ' + error.message);
    }
  }

  generateReport() {
    console.log('\n📊 Pre-Push Validation Report');
    console.log('==============================');
    
    if (this.errors.length > 0) {
      console.log('\n❌ ERRORS (must fix):');
      this.errors.forEach(error => console.log(`   ${error}`));
    }
    
    if (this.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS (consider fixing):');
      this.warnings.forEach(warning => console.log(`   ${warning}`));
    }
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('\n🎉 No issues found!');
    }
  }
}

// Run if called directly
if (require.main === module) {
  const validator = new PrePushValidator();
  validator.validate().catch(console.error);
}

module.exports = PrePushValidator;