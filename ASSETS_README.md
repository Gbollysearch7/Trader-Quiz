# Assets Setup Guide

This document outlines the placeholder assets that have been created and need to be replaced with actual Tradersyard brand assets.

## 📁 Directory Structure

```
/public
  /logos
    - tradersyard-logo-white.svg (PLACEHOLDER)
    - tradersyard-logo-blue.svg (PLACEHOLDER)
  - favicon.ico (PLACEHOLDER)
  - apple-touch-icon.png (TO BE ADDED)
  - og-image.png (TO BE ADDED)
```

## 🎨 Required Assets

### 1. **Tradersyard Logos** (High Priority)

#### White Logo (for dark backgrounds)
- **Location**: `/public/logos/tradersyard-logo-white.svg`
- **Current**: Placeholder text-based SVG
- **Requirements**:
  - Format: SVG (preferred) or PNG with transparent background
  - Color: White (#FFFFFF)
  - Recommended dimensions: 200x50px or similar aspect ratio
  - Usage: Hero page header on pitch black background

#### Blue Logo (for light backgrounds)
- **Location**: `/public/logos/tradersyard-logo-blue.svg`
- **Current**: Placeholder text-based SVG
- **Requirements**:
  - Format: SVG (preferred) or PNG with transparent background
  - Color: Deep Blue (#4250EB)
  - Recommended dimensions: 200x50px or similar aspect ratio
  - Usage: White cards or light backgrounds (if needed)

### 2. **Favicons** (High Priority)

#### Standard Favicon
- **Location**: `/public/favicon.ico`
- **Current**: Empty placeholder file
- **Requirements**:
  - Format: .ico
  - Sizes: 16x16, 32x32, 48x48 (multi-size .ico file)
  - Should work on both light and dark browser themes

#### Apple Touch Icon
- **Location**: `/public/apple-touch-icon.png`
- **Current**: Not created yet
- **Requirements**:
  - Format: PNG
  - Size: 180x180px
  - Used for iOS home screen bookmarks

### 3. **Social Media Images** (Medium Priority)

#### Open Graph Image
- **Location**: `/public/og-image.png`
- **Current**: Not created yet
- **Requirements**:
  - Format: PNG or JPG
  - Size: 1200x630px (Facebook/LinkedIn standard)
  - Content suggestions:
    - Tradersyard logo
    - Text: "Discover Your Trader Personality"
    - Background: Pitch black (#000000)
    - Accent color: Deep Blue (#4250EB)
  - Used when sharing quiz on social media platforms

## 🔄 How to Replace Assets

### For SVG Logos:
1. Export your Tradersyard logo as SVG from your design tool
2. Ensure the SVG is optimized (remove unnecessary code)
3. Replace the placeholder files at `/public/logos/`
4. Keep the same filenames for automatic integration

### For Favicons:
1. Use a favicon generator tool (e.g., favicon.io, realfavicongenerator.net)
2. Upload your Tradersyard logo/icon
3. Generate the favicon package
4. Replace `/public/favicon.ico`
5. Add `/public/apple-touch-icon.png`

### For OG Image:
1. Design the OG image (1200x630px) using your preferred tool
2. Include:
   - Tradersyard branding
   - Quiz title/tagline
   - Match the pitch black (#000000) and blue (#4250EB) color scheme
3. Export as PNG or JPG
4. Save to `/public/og-image.png`

## 📝 Current Implementation

### Where Logos Are Used:
- **Hero Page**: White logo appears at the top center of the landing page
- Responsive sizing: `h-10 sm:h-12` (40px-48px height)

### Metadata Configuration:
All favicon and OG image paths are already configured in:
- `/app/layout.tsx` - Main metadata configuration
- Includes Open Graph tags for social sharing
- Includes Twitter card metadata

## ✅ What's Already Set Up

- ✅ Logo component integrated in Hero page
- ✅ Responsive logo sizing for mobile/desktop
- ✅ Favicon metadata configuration
- ✅ Open Graph metadata configuration
- ✅ Twitter card metadata
- ✅ Proper Next.js Image optimization
- ✅ Animation and transitions for logo

## 🎯 Next Steps

1. **Replace logo placeholders** with actual Tradersyard logos
2. **Generate and add favicons** using Tradersyard branding
3. **Create OG image** for social sharing
4. **Test on different devices** to ensure proper display
5. **Verify social sharing** preview on Facebook/LinkedIn/Twitter

## 🎨 Brand Colors (For Reference)

- **Pitch Black**: `#000000` (Main background)
- **Deep Blue**: `#4250EB` (Primary buttons, accents)
- **Darker Blue**: `#3642CC` (Hover states)
- **White**: `#FFFFFF` (Text on dark backgrounds)

## 💡 Tips

- **SVG vs PNG**: SVG is preferred for logos as they scale perfectly on all devices
- **File size**: Keep assets optimized for web (compress images)
- **Transparency**: Ensure logos have transparent backgrounds where appropriate
- **Testing**: Test favicons on both light and dark browser themes
- **Cache**: Clear browser cache after replacing assets to see changes

## 📧 Questions?

If you need help with asset specifications or have questions about dimensions/formats, please review this guide or check with your design team.
