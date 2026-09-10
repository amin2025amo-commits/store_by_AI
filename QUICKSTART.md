# Quick Start Guide - Islamic Gift Storefront

## 🚀 Your Storefront is Live!

Your development server is running at: **http://localhost:5173/**

## What You Have

✅ **Complete React Storefront** with:
- 22 premium Islamic gift products (all your images included)
- Beautiful, responsive design (works on mobile, tablet, desktop)
- Product gallery with filtering by category
- Individual product detail pages
- Contact form for order inquiries
- Elegant header, footer, and navigation

✅ **Project Structure**:
```
gift-storefront/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Full page views
│   ├── data/products.json # Your 22 products
│   └── styles/           # Tailwind CSS
├── public/images/        # All 22 product images (copied from your E: drive)
├── package.json          # Dependencies
└── README.md             # Full documentation
```

## Next Steps

### 1. Test Your Storefront Locally
- Open http://localhost:5173/ in your browser
- Browse products, click into details, test the contact form
- Check mobile responsiveness (press F12, toggle device toolbar)

### 2. Set Up Order Inquiries (IMPORTANT)

Your contact form needs a backend. Use **Formspree** (free):

1. Go to https://formspree.io and sign up
2. Create a new form (choose "Standard form")
3. You'll get a form ID like: `f/abc123xyz`
4. Open `src/components/ContactForm.jsx`
5. Find line 22 and replace `YOUR_FORM_ID`:
   ```jsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
6. Save the file (dev server auto-reloads)
7. Test the contact form - emails will go to your registered email

### 3. Deploy to Vercel (Free Hosting)

**Option A: Using GitHub (Recommended)**
1. Create a GitHub account (if you don't have one)
2. Create a new repository called `gift-storefront`
3. In your project folder:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/gift-storefront.git
   git branch -M main
   git push -u origin main
   ```
4. Go to https://vercel.com and sign up
5. Click "Import Project" → connect your GitHub repo
6. Vercel auto-detects Vite and deploys (automatic on each push)
7. Your site gets a free URL like: `gift-storefront.vercel.app`

**Option B: Using Vercel CLI (Faster)**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts, link to your project
4. Your site deploys instantly

### 4. Customize Your Storefront

**Change Product Data:**
- Edit `src/data/products.json`
- Update prices, descriptions, categories, occasions
- Add/remove products
- Changes appear instantly in dev mode

**Change Colors/Branding:**
- Edit `tailwind.config.js` to change the amber color scheme
- Edit `src/components/Header.jsx` for logo/title
- Edit `src/components/Footer.jsx` for contact info

**Update Content:**
- `src/pages/Home.jsx` - Hero section, features
- `src/components/Header.jsx` - Navigation text
- `src/components/Footer.jsx` - Footer links/info

## Commands You'll Use

```bash
# Development (live server with auto-reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Stop dev server
# Press Ctrl+C in terminal
```

## Important Files

| File | Purpose |
|------|---------|
| `src/data/products.json` | Your 22 products (edit to change prices, descriptions) |
| `src/components/ContactForm.jsx` | Order inquiry form (update with Formspree ID) |
| `tailwind.config.js` | Colors and branding |
| `README.md` | Full documentation |
| `vercel.json` | Deployment configuration |

## Troubleshooting

**"Contact form not working?"**
- Make sure you added your Formspree ID to `ContactForm.jsx`
- Test by filling out form and submitting
- Check your email for the inquiry

**"Images not showing?"**
- Images are in `public/images/` (all 22 copied from your E: drive)
- If you add new images, put them in `public/images/` folder

**"Dev server stopped?"**
- Run `npm run dev` again to restart

**"Build failed?"**
- Run `npm install` to ensure all dependencies are installed
- Check that Node.js version is 16+

## Your Next Revenue Steps

1. **Deploy to Vercel** (get a live URL)
2. **Set up Formspree** (collect orders)
3. **Market your store** (Instagram, TikTok, your network)
4. **Process orders** (fulfill, ship, communicate with customers)
5. **Later: Add payments** (integrate Stripe when order volume increases)

## File Locations

- **Project folder:** `C:\Users\AminAmo\gift-storefront`
- **Product images:** `C:\Users\AminAmo\gift-storefront\public\images\`
- **Product data:** `C:\Users\AminAmo\gift-storefront\src\data\products.json`
- **Dev server:** http://localhost:5173/

## Support Resources

- React docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite docs: https://vitejs.dev
- Vercel deployment: https://vercel.com/docs
- Formspree: https://formspree.io

---

**You're ready to go!** 🎉

Your storefront is production-ready. Next step: deploy to Vercel and start taking orders.

Questions? Check the README.md in your project folder or refer to the links above.
