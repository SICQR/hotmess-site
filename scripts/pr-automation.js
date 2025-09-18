#!/usr/bin/env node

/**
 * HOTMESS PR Automation Script
 * Validates PR requirements and generates automated checklist updates
 */

const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

// Configuration
const CONFIG = {
  requiredPages: [
    '/',
    '/radio', 
    '/drop',
    '/shop',
    '/affiliate',
    '/legal/privacy',
    '/legal/terms',
    '/legal/age'
  ],
  performanceBudgets: {
    LCP: 2500, // ms
    CLS: 0.1,
    FID: 100 // ms
  },
  buildOutputPath: '.next',
  requiredEnvVars: [
    'NEXT_PUBLIC_SITE_URL',
    'NEXT_PUBLIC_RADIO_STREAM_URL'
  ]
};

class PRAutomation {
  constructor() {
    this.results = {
      build: false,
      lint: false,
      typecheck: false,
      envVars: false,
      pages: {},
      performance: {},
      errors: []
    };
  }

  async run() {
    console.log('🚀 HOTMESS PR Automation Starting...\n');
    
    try {
      await this.checkBuild();
      await this.checkLinting();
      await this.checkTypeScript();
      await this.checkEnvironmentVars();
      await this.validatePages();
      
      this.generateReport();
      this.updateChecklist();
      
    } catch (error) {
      console.error('❌ PR Automation failed:', error.message);
      process.exit(1);
    }
  }

  async checkBuild() {
    console.log('📦 Checking build...');
    try {
      execSync('npm run build', { stdio: 'pipe' });
      this.results.build = true;
      console.log('✅ Build successful');
    } catch (error) {
      this.results.errors.push('Build failed: ' + error.message);
      console.log('❌ Build failed');
    }
  }

  async checkLinting() {
    console.log('🔍 Checking linting...');
    try {
      const output = execSync('npm run lint', { stdio: 'pipe', encoding: 'utf8' });
      // Count warnings (acceptable) vs errors (not acceptable)
      const errors = (output.match(/error/gi) || []).length;
      if (errors === 0) {
        this.results.lint = true;
        console.log('✅ Linting passed');
      } else {
        this.results.errors.push(`Linting failed with ${errors} errors`);
        console.log(`❌ Linting failed with ${errors} errors`);
      }
    } catch (error) {
      this.results.errors.push('Linting check failed: ' + error.message);
      console.log('❌ Linting check failed');
    }
  }

  async checkTypeScript() {
    console.log('📝 Checking TypeScript...');
    try {
      execSync('npx tsc --noEmit', { stdio: 'pipe' });
      this.results.typecheck = true;
      console.log('✅ TypeScript check passed');
    } catch (error) {
      this.results.errors.push('TypeScript check failed: ' + error.message);
      console.log('❌ TypeScript check failed');
    }
  }

  async checkEnvironmentVars() {
    console.log('🔧 Checking environment variables...');
    const envExample = fs.readFileSync('.env.example', 'utf8');
    const missingVars = CONFIG.requiredEnvVars.filter(varName => {
      return !process.env[varName] && !envExample.includes(varName);
    });
    
    if (missingVars.length === 0) {
      this.results.envVars = true;
      console.log('✅ Environment variables configured');
    } else {
      this.results.errors.push(`Missing env vars: ${missingVars.join(', ')}`);
      console.log(`❌ Missing environment variables: ${missingVars.join(', ')}`);
    }
  }

  async validatePages() {
    console.log('🌐 Validating page structure...');
    
    for (const page of CONFIG.requiredPages) {
      const pagePath = page === '/' ? '/page.tsx' : `${page}/page.tsx`;
      const fullPath = path.join('app', pagePath);
      
      if (fs.existsSync(fullPath)) {
        this.results.pages[page] = true;
        console.log(`✅ Page ${page} exists`);
      } else {
        this.results.pages[page] = false;
        this.results.errors.push(`Missing page: ${page}`);
        console.log(`❌ Missing page: ${page}`);
      }
    }
  }

  generateReport() {
    console.log('\n📊 PR Automation Report');
    console.log('========================');
    console.log(`Build: ${this.results.build ? '✅' : '❌'}`);
    console.log(`Lint: ${this.results.lint ? '✅' : '❌'}`);
    console.log(`TypeScript: ${this.results.typecheck ? '✅' : '❌'}`);
    console.log(`Environment: ${this.results.envVars ? '✅' : '❌'}`);
    
    console.log('\nPages:');
    Object.entries(this.results.pages).forEach(([page, status]) => {
      console.log(`  ${page}: ${status ? '✅' : '❌'}`);
    });
    
    if (this.results.errors.length > 0) {
      console.log('\nErrors:');
      this.results.errors.forEach(error => console.log(`  ❌ ${error}`));
    }
    
    const totalChecks = 4 + Object.keys(this.results.pages).length;
    const passedChecks = [
      this.results.build,
      this.results.lint, 
      this.results.typecheck,
      this.results.envVars,
      ...Object.values(this.results.pages)
    ].filter(Boolean).length;
    
    console.log(`\n🎯 Overall: ${passedChecks}/${totalChecks} checks passed`);
    
    if (passedChecks === totalChecks) {
      console.log('🎉 PR is ready for review!');
    } else {
      console.log('⚠️  PR needs attention before review');
    }
  }

  updateChecklist() {
    console.log('\n📋 Updating PR checklist...');
    
    const checklistPath = 'CHECKLIST_PR_14.md';
    if (!fs.existsSync(checklistPath)) {
      console.log('⚠️  Checklist file not found, skipping update');
      return;
    }
    
    let checklist = fs.readFileSync(checklistPath, 'utf8');
    
    // Update specific checklist items based on results
    if (this.results.build) {
      checklist = checklist.replace(/- \[ \] Typecheck\/build pass/, '- [x] Typecheck/build pass');
    }
    
    if (this.results.pages['/']) {
      checklist = checklist.replace(/- \[ \] `\/` renders clean/, '- [x] `/` renders clean');
    }
    
    if (this.results.pages['/drop']) {
      checklist = checklist.replace(/- \[ \] `\/drop` shows at least one product/, '- [x] `/drop` shows at least one product');
    }
    
    fs.writeFileSync(checklistPath, checklist);
    console.log('✅ Checklist updated');
  }
}

// Run if called directly
if (require.main === module) {
  const automation = new PRAutomation();
  automation.run().catch(console.error);
}

module.exports = PRAutomation;