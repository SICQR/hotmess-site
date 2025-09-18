#!/usr/bin/env node

/**
 * HOTMESS Deployment Health Check
 * Validates deployment and runs post-deployment checks
 */

const https = require('https');
const { execSync } = require('node:child_process');

class DeploymentHealthCheck {
  constructor(baseUrl = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_SITE_URL) {
    this.baseUrl = baseUrl?.startsWith('http') ? baseUrl : `https://${baseUrl}`;
    this.results = {
      connectivity: false,
      pages: {},
      performance: {},
      seo: {},
      errors: []
    };
  }

  async runChecks() {
    console.log(`🏥 HOTMESS Deployment Health Check Starting...\n`);
    console.log(`🌐 Base URL: ${this.baseUrl}\n`);
    
    try {
      await this.checkConnectivity();
      await this.validateCriticalPages();
      await this.checkBasicSEO();
      await this.validateAPI();
      
      this.generateReport();
      
      const criticalIssues = this.results.errors.filter(error => 
        error.includes('connectivity') || error.includes('404') || error.includes('500')
      );
      
      if (criticalIssues.length > 0) {
        console.log('\n❌ Deployment has critical issues');
        process.exit(1);
      } else {
        console.log('\n✅ Deployment health check passed');
        process.exit(0);
      }
      
    } catch (error) {
      console.error('❌ Health check failed:', error.message);
      process.exit(1);
    }
  }

  async checkConnectivity() {
    console.log('🔌 Checking connectivity...');
    try {
      await this.fetchPage('/');
      this.results.connectivity = true;
      console.log('✅ Site is reachable');
    } catch (error) {
      this.results.connectivity = false;
      this.results.errors.push('Site connectivity failed: ' + error.message);
      console.log('❌ Site connectivity failed');
    }
  }

  async validateCriticalPages() {
    console.log('📄 Validating critical pages...');
    
    const criticalPages = [
      '/',
      '/radio',
      '/shop', 
      '/drop',
      '/affiliate',
      '/legal/privacy',
      '/legal/terms'
    ];

    for (const page of criticalPages) {
      try {
        const response = await this.fetchPage(page);
        const isValid = response.includes('HOTMESS') || response.includes('hotmess');
        
        this.results.pages[page] = {
          status: 'ok',
          hasContent: isValid
        };
        
        console.log(`✅ ${page} - OK`);
      } catch (error) {
        this.results.pages[page] = {
          status: 'error',
          error: error.message
        };
        this.results.errors.push(`Page ${page} failed: ${error.message}`);
        console.log(`❌ ${page} - Failed`);
      }
    }
  }

  async checkBasicSEO() {
    console.log('🔍 Checking basic SEO...');
    
    try {
      const homePage = await this.fetchPage('/');
      
      const checks = {
        hasTitle: /<title[^>]*>([^<]+)<\/title>/i.test(homePage),
        hasMetaDescription: /<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i.test(homePage),
        hasOpenGraph: /<meta[^>]*property="og:/i.test(homePage),
        hasViewport: /<meta[^>]*name="viewport"/i.test(homePage)
      };
      
      this.results.seo = checks;
      
      Object.entries(checks).forEach(([check, passed]) => {
        console.log(`${passed ? '✅' : '⚠️ '} SEO ${check}: ${passed ? 'present' : 'missing'}`);
      });
      
    } catch (error) {
      this.results.errors.push('SEO check failed: ' + error.message);
      console.log('❌ SEO check failed');
    }
  }

  async validateAPI() {
    console.log('🔌 Validating API endpoints...');
    
    const apiEndpoints = [
      '/api/nowplaying',
      '/robots.txt',
      '/sitemap.xml'
    ];

    for (const endpoint of apiEndpoints) {
      try {
        await this.fetchPage(endpoint);
        console.log(`✅ ${endpoint} - OK`);
      } catch (error) {
        // Some endpoints might return 404 and that's okay
        if (error.message.includes('404')) {
          console.log(`⚠️  ${endpoint} - Not found (may be expected)`);
        } else {
          this.results.errors.push(`API ${endpoint} failed: ${error.message}`);
          console.log(`❌ ${endpoint} - Failed`);
        }
      }
    }
  }

  fetchPage(path) {
    return new Promise((resolve, reject) => {
      const url = `${this.baseUrl}${path}`;
      
      const request = https.get(url, (response) => {
        if (response.statusCode >= 400) {
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }
        
        let data = '';
        response.on('data', chunk => data += chunk);
        response.on('end', () => resolve(data));
      });
      
      request.on('error', reject);
      request.setTimeout(10000, () => {
        request.destroy();
        reject(new Error('Request timeout'));
      });
    });
  }

  generateReport() {
    console.log('\n📊 Deployment Health Report');
    console.log('============================');
    console.log(`Connectivity: ${this.results.connectivity ? '✅' : '❌'}`);
    
    console.log('\nPages:');
    Object.entries(this.results.pages).forEach(([page, result]) => {
      const status = result.status === 'ok' ? '✅' : '❌';
      console.log(`  ${page}: ${status}`);
    });
    
    console.log('\nSEO:');
    Object.entries(this.results.seo).forEach(([check, passed]) => {
      console.log(`  ${check}: ${passed ? '✅' : '⚠️ '}`);
    });
    
    if (this.results.errors.length > 0) {
      console.log('\nIssues:');
      this.results.errors.forEach(error => console.log(`  ❌ ${error}`));
    }
    
    const totalChecks = 1 + Object.keys(this.results.pages).length + Object.keys(this.results.seo).length;
    const passedChecks = [
      this.results.connectivity,
      ...Object.values(this.results.pages).map(p => p.status === 'ok'),
      ...Object.values(this.results.seo)
    ].filter(Boolean).length;
    
    console.log(`\n🎯 Overall: ${passedChecks}/${totalChecks} checks passed`);
  }
}

// Run if called directly
if (require.main === module) {
  const healthCheck = new DeploymentHealthCheck();
  healthCheck.runChecks().catch(console.error);
}

module.exports = DeploymentHealthCheck;