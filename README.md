# Tradersyard Trader Personality Quiz

A modern, interactive quiz application that helps traders discover their unique trading personality and matches them with the perfect Tradersyard evaluation challenge.

![Tradersyard Quiz](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?style=for-the-badge&logo=tailwind-css)

## Features

### Landing Page
- Stunning hero section with gradient backgrounds and animated elements
- Trust signals and social proof (20K+ active traders)
- Clear value proposition and compelling CTAs
- Promotional badge highlighting current offers (40% OFF + 110% REFUND)

### Quiz Experience
- **15 Comprehensive Questions** covering:
  - Trading experience and style
  - Risk management approach
  - Time commitment and availability
  - Market analysis methods
  - Psychology and mindset
  - Account preferences

- **Beautiful UI/UX**:
  - Smooth animations and transitions using Framer Motion
  - Progress bar with real-time completion tracking
  - Card-based question design with hover effects
  - Mobile-responsive layout
  - Back/forward navigation

### Results Page
- **Dramatic Reveal**: Animated trader type reveal with confetti effects
- **7 Trader Personality Types**:
  1. The Precision Scalper
  2. The Strategic Swing Trader
  3. The Disciplined Risk Manager
  4. The Aggressive Growth Trader
  5. The Technical Purist
  6. The News & Fundamental Trader
  7. The Balanced Opportunist

- **Comprehensive Profile**:
  - Detailed personality description
  - Key characteristics
  - Strengths and weaknesses
  - Personalized trading tips

- **Smart Recommendations**:
  - AI-powered account matching
  - Primary recommendation with detailed reasoning
  - Alternative account options
  - Full pricing and feature breakdown
  - Current promotions automatically applied

- **Social Sharing**:
  - Share results on Twitter, LinkedIn, Facebook
  - Native share API support
  - Retake quiz option

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Effects**: canvas-confetti

## Project Structure

```
trader-quiz/
├── app/
│   ├── page.tsx              # Landing page
│   ├── quiz/
│   │   └── page.tsx          # Quiz interface
│   ├── results/
│   │   └── page.tsx          # Results page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles with custom animations
├── components/
│   ├── landing/
│   │   └── Hero.tsx          # Hero section component
│   ├── quiz/
│   │   ├── QuizContainer.tsx # Main quiz logic
│   │   ├── QuestionCard.tsx  # Individual question display
│   │   └── ProgressBar.tsx   # Progress indicator
│   ├── results/
│   │   ├── TraderTypeReveal.tsx        # Animated reveal
│   │   ├── PersonalityProfile.tsx      # Profile display
│   │   ├── AccountRecommendation.tsx   # Account cards
│   │   └── ShareButtons.tsx            # Social sharing
│   ├── layout/
│   │   └── Header.tsx        # Navigation header
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── data/
│   │   ├── questions.ts      # 15 quiz questions with scoring
│   │   ├── traderTypes.ts    # 7 trader type definitions
│   │   └── accounts.ts       # Tradersyard account data
│   ├── utils/
│   │   ├── scoring.ts        # Quiz scoring algorithm
│   │   └── recommendations.ts # Recommendation logic
│   └── utils.ts              # Utility functions
└── types/
    └── index.ts              # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd trader-quiz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Brand Colors

The app uses Tradersyard's brand colors defined in `app/globals.css`:
- Primary: Indigo/Purple-blue (`oklch(0.55 0.22 270)`)
- Modify the `:root` CSS variables to match your brand

### Quiz Questions

Edit `lib/data/questions.ts` to:
- Add/remove questions
- Modify answer options
- Adjust scoring weights

### Trader Types

Customize trader personalities in `lib/data/traderTypes.ts`:
- Update descriptions and characteristics
- Change colors and icons
- Modify strengths/weaknesses

### Account Data

Update Tradersyard account information in `lib/data/accounts.ts`:
- Account sizes and pricing
- Features and profit targets
- Current promotions

### Recommendation Logic

Fine-tune the recommendation algorithm in `lib/utils/recommendations.ts`:
- Adjust account matching criteria
- Customize reasoning text
- Add new recommendation factors

## Design Principles

### Modern UI Trends Implemented
- **Glassmorphism**: Frosted glass effects on cards and overlays
- **Gradient Backgrounds**: Vibrant gradients for visual appeal
- **Micro-interactions**: Smooth hover states and button animations
- **Smooth Transitions**: Framer Motion for fluid page changes
- **Card-based Design**: Modern card layouts with shadows and hover effects
- **Generous Whitespace**: Clean, breathing room for content
- **Typography Hierarchy**: Clear visual hierarchy with varied font sizes

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Semantic HTML structure
- Proper ARIA labels
- Focus indicators on all interactive elements

### Performance
- Optimized bundle size with code splitting
- Lazy loading for animations
- Efficient state management
- Fast page transitions
- Mobile-first responsive design

## Analytics & Tracking

Consider integrating:
- Google Analytics for user behavior
- Conversion tracking for Tradersyard referrals
- A/B testing for optimization
- Heatmaps to understand user interaction

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- Cloudflare Pages
- Traditional hosting with Node.js

## Environment Variables

Create a `.env.local` file for any required environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_TRADERSYARD_AFFILIATE_CODE=YARD40
```

## Future Enhancements

### Phase 2 Features
- [ ] User accounts to save results
- [ ] Email capture with results delivery
- [ ] Progress tracking over time
- [ ] A/B testing for conversion optimization
- [ ] Multi-language support

### Advanced Features
- [ ] AI-powered personalized trading tips
- [ ] Video content for each trader type
- [ ] Integration with Tradersyard API
- [ ] Performance tracking dashboard
- [ ] Community features and leaderboards

### Gamification
- [ ] Badges and achievements
- [ ] Trader type rankings
- [ ] Community challenges
- [ ] Referral rewards

## License

This project is proprietary software owned by Tradersyard.

## Support

For questions or support:
- Email: support@tradersyard.com
- Website: https://tradersyard.com

## Credits

Built with:
- [Next.js](https://nextjs.org)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://framer.com/motion)
- [Lucide Icons](https://lucide.dev)

---

**Note**: This quiz is designed to be educational and engaging while driving qualified leads to Tradersyard's evaluation challenges. The scoring algorithm considers multiple factors to provide accurate personality matching and account recommendations.
