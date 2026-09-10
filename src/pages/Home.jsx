import ProductGrid from '../components/ProductGrid';
import ContactForm from '../components/ContactForm';
import products from '../data/products.json';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Islamic Gift Sets
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Thoughtfully curated collections celebrating culture, spirituality, and elegance.
            Perfect for every occasion and loved one.
          </p>
          <button
            onClick={() => document.getElementById('collections').scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-200"
          >
            Explore Collections
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Premium Quality</h3>
              <p className="text-slate-600">Handpicked items with exceptional craftsmanship and attention to detail.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Perfect Gifting</h3>
              <p className="text-slate-600">Beautiful packaging and presentation for memorable gift-giving moments.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">With Care</h3>
              <p className="text-slate-600">Each set is thoughtfully assembled to celebrate culture and spirituality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <div id="collections">
        <ProductGrid products={products} />
      </div>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
}
