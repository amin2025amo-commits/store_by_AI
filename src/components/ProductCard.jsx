import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer">
        <div className="relative h-64 bg-gradient-to-b from-slate-100 to-slate-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-amber-600 font-semibold uppercase tracking-wide mb-2">
            {product.category}
          </p>
          <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-amber-600">
              ${product.price}
            </span>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded font-medium transition">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
