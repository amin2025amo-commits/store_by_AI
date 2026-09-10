# Testing Your Storefront - Complete Guide

## 1. Access Your Store

**Your dev server is running at:** http://localhost:5173/

Open this URL in your web browser (Chrome, Firefox, Safari, Edge - any will work).

## 2. Test the Homepage

When you load the site, you should see:
- ✅ Dark header with "✨ Islamic Gifts" logo
- ✅ Large hero section with title and "Explore Collections" button
- ✅ Three feature boxes (Premium Quality, Perfect Gifting, With Care)
- ✅ Product grid showing all 22 gift products
- ✅ Each product card shows:
  - Product image
  - Category (Premium Sets, Women's Sets, etc.)
  - Product name
  - Description snippet
  - Price ($29.99 - $64.99)
  - "View" button
- ✅ Contact form at the bottom
- ✅ Footer with links and info

**What to check:**
- [ ] All 22 product images load (should see all your PNG files)
- [ ] Product names are readable
- [ ] Prices display correctly
- [ ] Colors look elegant (gold, black, white theme)
- [ ] Layout looks good on your screen size

## 3. Test Product Detail Pages

**Click on any product card:**
1. Click the "View" button on a product
2. You should see:
   - ✅ Large product image
   - ✅ Full product name and description
   - ✅ Category badge
   - ✅ Price (larger)
   - ✅ "What's Included" box with details
   - ✅ "Perfect for" tags (occasions like Eid, Weddings)
   - ✅ "Order This Product" button
   - ✅ Related products (other items in same category)
   - ✅ "Back to shop" link

**What to check:**
- [ ] Image displays correctly
- [ ] All text is readable
- [ ] Clicking related products takes you to their detail page
- [ ] Back button works

## 4. Test Navigation

**Test these navigation paths:**

1. **Click logo** → Should return to homepage
2. **Click "Shop"** in header → Goes to homepage
3. **Click "Contact"** in header → Scrolls to contact form
4. **Browse multiple products** → Each loads correctly
5. **Click back link** → Returns to homepage

**What to check:**
- [ ] Navigation links work
- [ ] Page transitions are smooth
- [ ] URL changes (look at address bar)

## 5. Test Contact Form

**Fill out the contact form:**

1. Scroll to bottom of any page (or click "Contact" in header)
2. Fill in these fields:
   - **Name:** (Your name, e.g., "John Smith")
   - **Email:** (Your email, e.g., "test@example.com")
   - **Phone:** (Any number, e.g., "+1 234-567-8900")
   - **Quantity:** (Leave as 1 or change to 2+)
   - **Product of Interest:** (Type a product name, e.g., "Deluxe Heart Islamic Gift Box")
   - **Message:** (Optional - write something like "I'm interested in this product")

3. Click **"Send Order Inquiry"** button

**What to check:**
- [ ] Form fields accept input
- [ ] Clicking button doesn't immediately show success (will show error until Formspree is set up)
- [ ] Form validates (try leaving Name blank and clicking Send - should show error)

**Important:** Form won't fully work yet because you haven't set up Formspree. See "Enable Order Inquiries" section below.

## 6. Test Responsiveness (Mobile View)

**Test on different screen sizes:**

### Using Browser DevTools:
1. Press **F12** (or right-click → Inspect)
2. Click the **mobile icon** (top-left of DevTools) to toggle device toolbar
3. Test these phone sizes:
   - iPhone 12 (390×844)
   - iPhone SE (375×667)
   - Pixel 5 (393×851)
   - Galaxy S21 (360×800)

**What to check on mobile:**
- [ ] Header is readable
- [ ] Product grid shows 1 column
- [ ] Images scale properly (not stretched)
- [ ] Buttons are big enough to tap
- [ ] Text is readable (no tiny fonts)
- [ ] Contact form fields stack vertically
- [ ] No horizontal scrolling
- [ ] Footer is readable

### Test on Tablet:
1. Switch to iPad or tablet size (768×1024)
2. Check:
   - [ ] Product grid shows 2 columns
   - [ ] Layout looks balanced
   - [ ] Images are appropriately sized

### Test on Desktop:
1. Maximize browser window
2. Check:
   - [ ] Product grid shows 3 columns
   - [ ] Everything looks elegant and spaced
   - [ ] No content is cut off

## 7. Test Performance

**Check how fast the site loads:**

1. Open DevTools (F12)
2. Go to **Network** tab
3. Reload the page (Ctrl+R or Cmd+R)
4. Watch as files load:
   - HTML
   - CSS (should be small, ~20KB)
   - JavaScript (should be ~280KB)
   - Images (your 22 products)

**What to check:**
- [ ] Page loads in under 3 seconds
- [ ] No red errors in console
- [ ] All images load without errors
- [ ] No 404 errors (missing files)

## 8. Test Links & Interactions

**Hover effects:**
- [ ] Product cards slightly enlarge when you hover (smooth animation)
- [ ] Buttons change color on hover
- [ ] Links underline or change color

**Scrolling:**
- [ ] Click "Explore Collections" button → smoothly scrolls to products
- [ ] Click "Contact" link → smoothly scrolls to form

**Form interactions:**
- [ ] Click input fields → they highlight
- [ ] Type in fields → text appears
- [ ] Click submit → form responds

## 9. Check the Console

**Look for errors:**

1. Open DevTools (F12)
2. Go to **Console** tab
3. Look for any red errors or yellow warnings

**What you want to see:**
- [ ] No red errors
- [ ] Maybe some warnings (yellow) - that's okay for now

**If you see errors:**
- Note what they say
- Usually means a component didn't load properly
- Common: "image failed to load" or "form endpoint not found" (normal until Formspree is set up)

## 10. Enable Order Inquiries (So Form Actually Works)

**This is the last step to make the contact form functional:**

1. Go to https://formspree.io
2. Sign up (free account)
3. Click "Create New Form" or "+ New Form"
4. Enter your email address
5. Click "Create Form"
6. You'll see a confirmation page with:
   - A form ID like: `f/abc123xyz`
   - Copy this ID

7. Open your project in a code editor (VS Code recommended):
   - File → Open Folder → select `C:\Users\AminAmo\gift-storefront`

8. Navigate to: `src/components/ContactForm.jsx`

9. Find line 22 that says:
   ```jsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

10. Replace `YOUR_FORM_ID` with your actual ID (e.g., `f/abc123xyz`)

11. Save the file (Ctrl+S)

12. The dev server auto-reloads - try the form again!

13. Fill out the contact form and submit

14. Check your email - you should receive the inquiry

## Testing Checklist

Print this or use it to verify everything works:

```
HOMEPAGE
- [ ] All 22 products visible
- [ ] All images load
- [ ] Prices display correctly
- [ ] Hero section looks good

PRODUCT DETAIL PAGE
- [ ] Click product → detail page loads
- [ ] Image shows
- [ ] All info displays
- [ ] Related products show
- [ ] Back button works

NAVIGATION
- [ ] Logo click → homepage
- [ ] Nav links work
- [ ] Contact link scrolls down
- [ ] URLs change correctly

CONTACT FORM
- [ ] Fields are fillable
- [ ] Submit button exists
- [ ] (After Formspree setup) Form submits
- [ ] (After Formspree setup) Email received

MOBILE/RESPONSIVE
- [ ] Mobile view: 1 column
- [ ] Tablet view: 2 columns
- [ ] Desktop view: 3 columns
- [ ] No horizontal scrolling
- [ ] Readable on all sizes

PERFORMANCE
- [ ] Loads in < 3 seconds
- [ ] No console errors
- [ ] Images load properly
```

## Troubleshooting During Testing

**Images not showing?**
- Check DevTools Network tab
- Look for 404 errors
- Make sure public/images/ has all 22 PNG files

**Form not working?**
- Check browser console for errors
- Make sure Formspree ID is correctly added
- Try refreshing the page after editing

**Layout looks weird?**
- Try clearing browser cache (Ctrl+Shift+Delete)
- Refresh the page
- Try in an incognito/private window

**Dev server stopped?**
- Run `npm run dev` again in terminal
- Should restart at localhost:5173

## Next: Deploy to Vercel

Once testing looks good locally:
1. Push to GitHub
2. Connect to Vercel
3. Your live store URL: `yourname.vercel.app`

---

**Happy testing!** Let me know if anything doesn't work as expected.
