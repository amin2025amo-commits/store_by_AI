import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="group">
            <h1 className="text-3xl font-bold text-amber-400 group-hover:text-amber-300 transition">
              ✨ Islamic Gifts
            </h1>
            <p className="text-sm text-slate-300">Premium Gift Collections</p>
          </Link>
          <nav className="flex gap-6">
            <Link to="/" className="hover:text-amber-400 transition font-medium">
              Shop
            </Link>
            <a href="#contact" className="hover:text-amber-400 transition font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
