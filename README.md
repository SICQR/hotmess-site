# HOTMESS LDN — Next.js Production Site

**Always Too Much, Never Enough**

A complete e-commerce and community platform built with Next.js App Router, featuring dual theming, affiliate tracking, and comprehensive QR code generation system.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Local Development

```bash
# Clone the repository
git clone https://github.com/SICQR/hotmess-site.git
cd hotmess-site

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in your actual values in .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build the application
npm run build

# Start production server locally
npm start
```

## 🎨 Design System

### Dual Theming System
- **Black Neon**: `/radio`, `/hand-in-hand`, `/drop`, `/label`, `/rooms`, `/affiliate`
- **White Editorial**: `/shop`, `/lookbook`

### Daypart Tinting (Black Neon theme)
- **AM (5AM-12PM)**: Warm orange gradients
- **PM (12PM-8PM)**: Soft blue gradients  
- **Night (8PM-5AM)**: Neon accent glows

### Typography
- **Display**: Oswald (headings, navigation)
- **Body**: Inter (paragraphs, UI text)
- **Editorial**: Serif fallback for white theme

### Motion Grammar
- `animate-slide`: translateX entrance
- `animate-roll`: rotate + scale entrance
- `animate-fade`: opacity fade-in
- `animate-ripple`: continuous pulsing effect

## 📱 Site Structure

### Core Pages
- `/` - Daypart-aware homepage with cross-CTAs
- `/radio` - Live radio player with schedule
- `/shop` - Collections with White Editorial theme
- `/lookbook` - Editorial photography layouts
- `/hand-in-hand` - Care resources and HNH products
- `/affiliate` - QR generator and performance dashboard
- `/drop` - Limited capsule collections
- `/rooms` - Community guidelines and Telegram access
- `/label` - RAW CONVICT RECORDS artist roster

### Legal Pages
- `/legal/privacy` - GDPR-compliant privacy policy
- `/legal/terms` - Terms of service
- `/legal/cookies` - Cookie usage policy
- `/legal/age` - Age verification (client-side)

## 🔗 Affiliate Data Machine (ADM)

### QR Code Generation
- Personal QR codes with UTM tracking
- Crown overlay branding
- Multiple target destinations
- Short URL system (`/t/:code`)

### Attribution Models
- **First Touch**: Credit first affiliate contact
- **Last Touch**: Credit final affiliate before conversion
- **Time Decay (7d)**: Weighted attribution favoring recent touches

### API Endpoints
- `POST /api/utm/append` - Generate short URLs with UTM tracking
- `POST /api/track/qr` - Log QR code scans
- `GET /api/track/qr?affiliateId=X` - Retrieve analytics
- `GET /t/:short` - Resolve short URLs with tracking

### Webhook Integration
- Make.com webhook: `/api/webhooks/make`
- Stripe webhook: `/api/stripe/webhook`
- Google Sheets reporting via Make.com

## 🎵 Audio Identity

### Script Categories
- **Master IDs**: 6s, 10s, 20s station identifiers
- **Show Intros/Outros**: Nik Denton, Stewart Who content
- **Sweepers**: 2-5s transitions
- **Talk Beds**: Background music for spoken content

### Voice Processing
- AM: Warm analog processing
- PM: Clean, professional tone  
- Night: Reverb and neon energy

## 🛍️ E-commerce Integration

### Collections
- **RAW**: Leather-lux grit
- **HUNG**: Body-con gym-to-rave
- **HIGH**: Varsity-coded euphoria
- **SUPERHUNG**: Maximum impact pieces
- **SUPERHIGH**: Designer collaborations
- **HNH MESS**: Care and aftercare products

### Product Features
- Cross-selling recommendations
- Size guides and fit philosophy
- QR code integration for affiliate tracking
- Limited drop mechanics

## 🤖 Community Features

### Telegram Integration
- Verified user onboarding
- Multiple themed rooms
- Age-gated adult content
- Marketplace for trading pieces

### Moderation
- Community-driven moderation
- Clear escalation paths
- Anonymous reporting
- Zero tolerance for bigotry

## 🔧 Technical Stack

### Frontend
- **Next.js 14.2.32** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** via custom globals.css
- **React** with Server/Client Components

### Backend & APIs
- **Next.js API Routes** for backend functionality
- **Vercel** for hosting and deployment
- **Make.com** for workflow automation
- **Stripe** for payment processing

### Third-Party Integrations
- **Google Analytics** (with consent)
- **Meta Pixel** (with consent) 
- **TikTok Pixel** (with consent)
- **Shopify Storefront API** for products

## 📊 Analytics & Tracking

### Attribution Tracking
```javascript
import { captureAttribution, trackConversion } from '@/lib/attribution'

// Capture on page load
useEffect(() => {
  captureAttribution()
}, [])

// Track conversions
trackConversion(orderValue, 'GBP')
```

### QR Code Tracking
```javascript
// Generate QR with tracking
const response = await fetch('/api/utm/append', {
  method: 'POST',
  body: JSON.stringify({
    target: 'https://hotmess-ldn.com/shop?utm_source=affiliate',
    affiliateId: 'user123'
  })
})
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to `main`

### Environment Variables
See `.env.example` for complete list. Key variables:

```bash
NEXT_PUBLIC_SITE_URL=https://hotmess-ldn.vercel.app
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_API_TOKEN=shpat_xxxxx
STRIPE_PUBLIC_KEY=pk_xxxxx
MAKE_WEBHOOK_URL=https://hook.integromat.com/xxxxx
```

### CI/CD Pipeline
- **Lint & TypeCheck**: ESLint + TypeScript validation
- **Build**: Next.js production build
- **Tests**: Unit (planned) + E2E (planned)
- **Deploy**: Automatic Vercel deployment
- **Performance**: Lighthouse CI audits

### 🤖 Push & Pull Request Automation

#### Automated Validation Scripts
- **`npm run pr:validate`** - Comprehensive PR validation
- **`npm run push:validate`** - Pre-push quality checks
- **`npm run deploy:health`** - Post-deployment health monitoring
- **`npm run validate:all`** - Run all validations

#### Pre-Push Validation
Automatic validation before every push including:
- Code quality (linting, TypeScript)
- Commit message conventions
- Secret detection
- Build size analysis

#### PR Automation Features
- Automated checklist validation
- Build and deployment checks
- Performance budget monitoring
- SEO and accessibility validation
- Automated status comments

#### Git Hooks
- **Pre-push hook**: Runs validation before allowing pushes
- Install hooks: `npm run setup:automation`

#### GitHub Actions Integration
- Automated PR validation comments
- Deployment health checks
- Performance monitoring
- Branch protection enforcement

## 🧪 Testing Strategy

### Unit Tests (Planned)
- Vitest for component testing
- Attribution logic validation
- QR generation functionality

### E2E Tests (Planned) 
- Playwright for user journeys
- Affiliate flow testing
- Cross-theme navigation
- Mobile responsiveness

### Performance Budgets
- LCP < 2.5s
- CLS < 0.1
- FID < 100ms

## 📁 Project Structure

```
app/                          # Next.js App Router pages
├── layout.tsx               # Root layout with theming
├── page.tsx                 # Homepage with daypart awareness
├── radio/page.tsx           # Radio station page
├── shop/page.tsx            # E-commerce collections
├── affiliate/page.tsx       # QR generator + dashboard
├── api/                     # API routes
│   ├── utm/append/route.ts  # Short URL generation
│   ├── track/qr/route.ts    # QR scan tracking
│   └── webhooks/make/route.ts # Make.com integration
└── t/[short]/page.tsx       # Short URL resolver

components/                   # Reusable UI components
├── ThemeSkin.tsx            # Dual theme provider
├── Header.tsx               # Navigation with theme awareness
├── Footer.tsx               # Site footer
├── QRCodeGenerator.tsx      # Affiliate QR generator
└── RadioPlayer.tsx          # Live radio streaming

lib/                         # Utilities and configuration
├── attribution.ts           # UTM tracking and attribution
├── cookies.ts               # Cookie management utilities
└── types.ts                 # TypeScript type definitions

data/                        # Static data and content
├── djs.json                 # DJ profiles and information
├── shows.json               # Radio show schedules
├── products.json            # Product catalog
└── audio-scripts/          # Radio ID and stinger scripts

styles/
└── globals.css              # Design system and theming
```

## 🎯 Brand Guidelines

### Voice & Tone
- **Cheeky**: Never taking ourselves too seriously
- **Sexy**: Confident and unapologetic
- **Human**: Real conversations, genuine connections
- **Safe**: Never unsafe, always consensual

### Copy Attitude Seeds
- "SCAN, GAG, REPEAT"
- "HUNG? SCAN HERE"
- "RAW? TAP IT"
- "HAND-N-HAND"
- "LAND HERE"

### Content Strategy
- Audio-first approach (radio is spine)
- No full lyric dumps, follow cadence
- Cross-CTAs on every major section
- Real aftercare, not performative care

## 🔒 Privacy & Compliance

### GDPR Compliance
- Cookie consent management
- Right to access/delete data
- Clear privacy policy
- Opt-in analytics tracking

### Age Verification
- 18+ verification for adult content
- Community room access controls
- Secure ID verification process

### Data Security
- No sensitive data in client-side code
- Secure webhook validation
- Attribution data anonymization options

## 📞 Support & Contact

### Technical Issues
- Create GitHub issue in repository
- Include error logs and reproduction steps

### Content & Design
- Email: hello@hotmess-ldn.com
- Telegram: @hotmess_bot

### Affiliate Program
- Email: affiliate@hotmess-ldn.com
- Dashboard: `/affiliate` page

---

**Built with 💜 in London**  
*Always Too Much, Never Enough*
# Final
# Final
