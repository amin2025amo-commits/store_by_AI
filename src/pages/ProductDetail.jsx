import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import products from '../data/products.json';
import ContactForm from '../components/ContactForm';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Product not found</h1>
          <Link to="/" className="text-amber-500 hover:text-amber-600 font-semibold">
            ← Back to shop
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="text-amber-500 hover:text-amber-600 font-medium">
            ← Back to shop
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="bg-slate-50 rounded-lg p-8 flex items-center justify-center h-96">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Details */}
          <div>
            <p className="text-amber-600 font-semibold uppercase tracking-wide mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              {product.name}
            </h1>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-8">
              <p className="text-4xl font-bold text-amber-600">
                ${product.price}
              </p>
            </div>

            {/* Details */}
            <div className="mb-8 p-6 bg-slate-50 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-3">What's Included:</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {product.details}
              </p>
            </div>

            {/* Occasions */}
            {product.occasions && (
              <div className="mb-8">
                <h3 className="font-semibold text-slate-800 mb-3">Perfect for:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.occasions.map((occasion, idx) => (
                    <span
                      key={idx}
                      className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {occasion}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Order Button */}
            <button
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-lg transition duration-200 text-lg"
            >
              Order This Product
            </button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
                    <div className="bg-slate-50 h-48 flex items-center justify-center p-4">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2">
                        {p.name}
                      </h3>
                      <p className="text-amber-600 font-bold">
                        ${p.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact Form */}
      <div id="contact-form">
        <ContactForm selectedProduct={product} />
      </div>
    </div>
  );
}
