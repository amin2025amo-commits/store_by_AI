export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-amber-400 font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We offer premium Islamic gift sets, carefully curated for every occasion.
              Quality, elegance, and cultural appreciation in every product.
            </p>
          </div>
          <div>
            <h3 className="text-amber-400 font-bold mb-4">Collections</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-amber-400 transition">Premium Sets</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Prayer Items</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Home Decor</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Special Occasions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-amber-400 font-bold mb-4">Contact</h3>
            <p className="text-sm mb-2">Email: <a href="mailto:info@islamicgifts.com" className="hover:text-amber-400 transition">info@islamicgifts.com</a></p>
            <p className="text-sm">Phone: <a href="tel:+1234567890" className="hover:text-amber-400 transition">+1 (234) 567-890</a></p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; 2026 Islamic Gifts. All rights reserved. | Handcrafted with care</p>
        </div>
      </div>
    </footer>
  );
}
