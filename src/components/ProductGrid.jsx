import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Collections</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover our curated selection of premium Islamic gift sets, perfect for every occasion.
            Each product is carefully crafted to bring joy and meaning to your loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
