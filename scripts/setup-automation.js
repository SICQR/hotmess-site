#!/usr/bin/env node

/**
 * HOTMESS Automation Setup Script
 * Initializes all automation tools and git hooks
 */

const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

class AutomationSetup {
  async setup() {
    console.log('🔧 HOTMESS Automation Setup Starting...\n');
    
    try {
      await this.setupGitHooks();
      await this.validateScripts();
      await this.createDocs();
      
      console.log('\n✅ Automation setup complete!');
      console.log('\nAvailable commands:');
      console.log('  npm run pr:validate     - Validate PR requirements');
      console.log('  npm run push:validate   - Pre-push validation'); 
      console.log('  npm run deploy:health   - Post-deployment health check');
      console.log('  npm run validate:all    - Run all validations');
      
    } catch (error) {
      console.error('❌ Setup failed:', error.message);
      process.exit(1);
    }
  }

  async setupGitHooks() {
    console.log('🪝 Setting up Git hooks...');
    
    const hookPath = '.git/hooks/pre-push';
    if (fs.existsSync(hookPath)) {
      try {
        execSync(`chmod +x ${hookPath}`);
        console.log('✅ Pre-push hook installed and executable');
      } catch (error) {
        console.log('⚠️  Could not make pre-push hook executable');
      }
    } else {
      console.log('⚠️  Pre-push hook not found - may need manual setup');
    }
  }

  async validateScripts() {
    console.log('📝 Validating automation scripts...');
    
    const scripts = [
      'scripts/pr-automation.js',
      'scripts/pre-push-validation.js', 
      'scripts/deployment-health-check.js'
    ];
    
    for (const script of scripts) {
      if (fs.existsSync(script)) {
        console.log(`✅ ${script} found`);
      } else {
        throw new Error(`Missing automation script: ${script}`);
      }
    }
  }

  async createDocs() {
    console.log('📚 Creating automation documentation...');
    
    const docs = `# HOTMESS Automation Documentation

## Overview
This repository includes comprehensive automation for push and pull request workflows.

## Available Scripts

### \`npm run pr:validate\`
Validates pull request requirements including:
- Build success
- Linting compliance
- TypeScript validation
- Environment variable configuration
- Page structure validation
- Automated checklist updates

### \`npm run push:validate\`
Pre-push validation including:
- Git status checks
- Commit message conventions
- Code quality validation
- Secret detection
- Build size analysis

### \`npm run deploy:health\`
Post-deployment health checks including:
- Site connectivity
- Critical page validation
- Basic SEO checks
- API endpoint validation

### \`npm run validate:all\`
Runs all validation scripts in sequence.

## Git Hooks

### Pre-Push Hook
Automatically runs validation before allowing pushes to remote repositories.
Located at: \`.git/hooks/pre-push\`

## CI/CD Integration
The automation scripts are integrated into the GitHub Actions workflow:
- PR validation runs on pull requests
- Health checks run after deployments
- All checks must pass for successful deployment

## Configuration
Automation behavior can be customized by modifying the configuration objects in each script.

## Troubleshooting

### Hook Not Working
Run \`npm run hooks:install\` to ensure hooks are executable.

### Validation Failing
Check the detailed output from each validation script to identify specific issues.

### Performance Issues
Consider adjusting timeout values in the deployment health check script.
`;

    fs.writeFileSync('docs/AUTOMATION.md', docs);
    console.log('✅ Automation documentation created');
  }
}

// Run if called directly
if (require.main === module) {
  const setup = new AutomationSetup();
  setup.setup().catch(console.error);
}

module.exports = AutomationSetup;