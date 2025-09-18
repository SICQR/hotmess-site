# HOTMESS Automation Documentation

## Overview
This repository includes comprehensive automation for push and pull request workflows.

## Available Scripts

### `npm run pr:validate`
Validates pull request requirements including:
- Build success
- Linting compliance
- TypeScript validation
- Environment variable configuration
- Page structure validation
- Automated checklist updates

### `npm run push:validate`
Pre-push validation including:
- Git status checks
- Commit message conventions
- Code quality validation
- Secret detection
- Build size analysis

### `npm run deploy:health`
Post-deployment health checks including:
- Site connectivity
- Critical page validation
- Basic SEO checks
- API endpoint validation

### `npm run validate:all`
Runs all validation scripts in sequence.

## Git Hooks

### Pre-Push Hook
Automatically runs validation before allowing pushes to remote repositories.
Located at: `.git/hooks/pre-push`

## CI/CD Integration
The automation scripts are integrated into the GitHub Actions workflow:
- PR validation runs on pull requests
- Health checks run after deployments
- All checks must pass for successful deployment

## Configuration
Automation behavior can be customized by modifying the configuration objects in each script.

## Troubleshooting

### Hook Not Working
Run `npm run hooks:install` to ensure hooks are executable.

### Validation Failing
Check the detailed output from each validation script to identify specific issues.

### Performance Issues
Consider adjusting timeout values in the deployment health check script.
