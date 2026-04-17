import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const categories = [
    "All Collections",
    "Indoor Signature Plants",
    "Statement Pieces",
    "Rare Finds",
    "Gifts & Arrangements"
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center lg:text-left">
           <h1 className="text-5xl lg:text-7xl font-serif italic text-gardenia-green mb-6">The Botanical Collection</h1>
           <p className="text-gardenia-green/60 font-light max-w-xl leading-relaxed">
             Artfully curated greenery for sophisticated spaces. Each specimen is selected for its vitality, form, and story.
           </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-8 mb-20 pb-4 border-b border-gardenia-gold/10">
           {categories.map((cat, i) => (
             <button
               key={cat}
               className={`text-[10px] uppercase tracking-[0.3em] font-semibold py-2 transition-all duration-300 ${
                 i === 0 ? 'text-gardenia-green border-b border-gardenia-green' : 'text-gardenia-green/40 hover:text-gardenia-gold'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-8 lg:gap-y-20">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-40 bg-gardenia-ivory p-12 lg:p-24 text-center space-y-8 rounded-sm">
           <div className="max-w-xl mx-auto space-y-6">
             <h3 className="text-3xl font-serif italic text-gardenia-green italic">Unsure what fits your space?</h3>
             <p className="text-gardenia-green/60 leading-relaxed font-light italic">
                "Our botanists are available for personal recommendations. Every space is unique—your plants should be too."
             </p>
             <div className="pt-4">
                <button className="px-10 py-4 bg-gardenia-green text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gardenia-gold transition-all shadow-md">
                   Talk To A Specialist
                </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
