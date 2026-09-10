# Islamic Gift Storefront

A modern, elegant React-based e-commerce storefront for premium Islamic gift collections.

## Features

- 📱 Responsive design (mobile, tablet, desktop)
- ✨ Beautiful product showcase with 22 Islamic gift sets
- 🎁 Product detail pages with descriptions and related items
- 📧 Contact form for order inquiries (Formspree integration)
- 🚀 Fast performance with Vite and Tailwind CSS
- 🌍 Easy deployment to Vercel (free hosting)

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6
- **Form Handling**: Formspree (for inquiries)
- **Hosting**: Vercel (free tier)

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd gift-storefront

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Footer.jsx          # Footer with links
│   ├── ProductCard.jsx     # Individual product card
│   ├── ProductGrid.jsx     # Product gallery
│   └── ContactForm.jsx     # Order inquiry form
├── pages/
│   ├── Home.jsx            # Main storefront page
│   └── ProductDetail.jsx   # Individual product page
├── data/
│   └── products.json       # Product catalog (22 items)
├── styles/
│   └── index.css           # Tailwind styles
├── App.jsx                 # Main app component
└── main.jsx                # React entry point

public/
└── images/                 # Product images (22 PNG files)
```

## Configuration

### Setting Up Order Inquiries

1. Go to [Formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Copy your form ID
4. Update `ContactForm.jsx` line 22:
   ```jsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

## Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: Connect GitHub to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite and deploys automatically

## Customization

### Change Colors

Edit `tailwind.config.js` to customize the amber color scheme or add your brand colors.

### Update Product Data

Edit `src/data/products.json` to:
- Add/remove products
- Change prices and descriptions
- Update product images

### Modify Copy

- `src/pages/Home.jsx` - Hero section, features
- `src/components/Header.jsx` - Navigation
- `src/components/Footer.jsx` - Footer text

## Performance

- Initial page load: ~1.5s
- Product images: Optimized PNG format
- CSS: Tailwind utility-based (minimal file size)
- JavaScript: Code-split by route

Lighthouse scores target:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android Latest

## License

All rights reserved. © 2026 Islamic Gifts.

## Support

For issues or feature requests, please create an issue in the repository.

---

Built with ❤️ for meaningful gifting
