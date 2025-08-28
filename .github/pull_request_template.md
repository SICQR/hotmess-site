# HOTMESS PR Checklist

## Description
Brief description of changes and why they're needed.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] I have performed a self-review of my code
- [ ] I have tested these changes locally
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Accessibility (A11y) ✅
- [ ] All interactive elements are keyboard accessible
- [ ] Color contrast meets WCAG 2.1 AA standards (≥4.5:1)
- [ ] All images have appropriate alt text
- [ ] Focus indicators are visible and clear
- [ ] Screen reader testing completed
- [ ] Respects `prefers-reduced-motion` settings
- [ ] Form labels and error messages are clear

## Performance ✅
- [ ] Lighthouse mobile score ≥90
- [ ] Core Web Vitals meet targets (LCP <2.5s, CLS <0.1, FID <100ms)
- [ ] Images optimized and use Next.js `<Image>` component
- [ ] Only LCP image has `priority` prop
- [ ] No unnecessary JavaScript in initial bundle
- [ ] SSR/CSR hydration is clean (no warnings)

## SEO ✅
- [ ] Page titles are descriptive and unique
- [ ] Meta descriptions are present and compelling
- [ ] Open Graph tags configured
- [ ] Canonical URLs set correctly
- [ ] JSON-LD structured data added (for products/events)
- [ ] Internal links use appropriate anchor text
- [ ] No broken internal links

## Analytics Events ✅
- [ ] Required events from event map implemented
- [ ] Events properly named following convention
- [ ] Event parameters match specification
- [ ] No PII in event data
- [ ] Events are throttled/deduped appropriately
- [ ] UTM parameters preserved in conversions

## Brand & UX ✅
- [ ] Copy matches HOTMESS tone (masc, cheeky, unapologetic)
- [ ] Colors use brand palette (accent #FF5300)
- [ ] Typography uses Oswald for headings, 17px base body
- [ ] Mobile-first design implemented
- [ ] Responsive grid system followed (1/2/3/4 col)
- [ ] Loading states and skeletons implemented
- [ ] Error states handled gracefully

## Dependencies
- [ ] No new dependencies added OR new deps justified in PR description
- [ ] package.json changes reviewed
- [ ] Security implications considered

## Screenshots/Demo
Include screenshots or GIFs showing the changes, especially for UI updates.

## Breaking Changes
List any breaking changes and migration steps required.