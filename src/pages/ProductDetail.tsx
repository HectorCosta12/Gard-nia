import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';
import { ShoppingBag, ChevronRight, Sun, Droplets, Wind, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-gardenia-green/50 mb-12">
           <Link to="/" className="hover:text-gardenia-gold">Home</Link>
           <ChevronRight size={10} />
           <Link to="/shop" className="hover:text-gardenia-gold">Shop</Link>
           <ChevronRight size={10} />
           <span className="text-gardenia-green">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-start">
           {/* Image Gallery */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="sticky top-32"
           >
             <div className="aspect-[4/5] bg-gardenia-ivory overflow-hidden rounded-sm relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {product.isRare && (
                  <div className="absolute top-6 left-6 bg-gardenia-gold text-white px-4 py-2 text-[10px] uppercase tracking-[0.3em] font-semibold shadow-lg">
                    Rare Find
                  </div>
                )}
             </div>
           </motion.div>

           {/* Info */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="space-y-12"
           >
             <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gardenia-gold font-bold">{product.category}</p>
                <h1 className="text-4xl lg:text-6xl font-serif italic text-gardenia-green leading-tight">{product.name}</h1>
                <p className="text-2xl font-light text-gardenia-green/70 font-sans">${product.price}.00</p>
             </div>

             <div className="space-y-6">
                <p className="text-xl font-cormorant italic text-gardenia-green leading-relaxed italic">
                  "{product.description}"
                </p>
             </div>

             <div className="pt-6 pb-10 border-y border-gardenia-gold/10 space-y-10">
                <h3 className="text-xs uppercase tracking-[0.3em] text-gardenia-green font-bold">Care Ritual</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                   <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-gardenia-gold">
                         <Sun size={18} />
                         <span className="text-[10px] uppercase tracking-widest font-bold">Light</span>
                      </div>
                      <p className="text-xs text-gardenia-green/70 leading-relaxed font-light">{product.careInstructions.light}</p>
                   </div>
                   <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-gardenia-gold">
                         <Droplets size={18} />
                         <span className="text-[10px] uppercase tracking-widest font-bold">Water</span>
                      </div>
                      <p className="text-xs text-gardenia-green/70 leading-relaxed font-light">{product.careInstructions.water}</p>
                   </div>
                   <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-gardenia-gold">
                         <Wind size={18} />
                         <span className="text-[10px] uppercase tracking-widest font-bold">Humidity</span>
                      </div>
                      <p className="text-xs text-gardenia-green/70 leading-relaxed font-light">{product.careInstructions.humidity}</p>
                   </div>
                </div>
             </div>

             <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gardenia-green text-white py-6 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gardenia-gold transition-all shadow-xl flex items-center justify-center">
                   <ShoppingBag size={18} className="mr-3" />
                   Add to collection
                </button>
                <Link to="/contact" className="px-8 py-6 border border-gardenia-green/20 text-gardenia-green text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gardenia-green hover:text-white transition-all flex items-center justify-center">
                   Talk to us
                </Link>
             </div>

             <div className="pt-10 space-y-4">
                <div className="flex items-center space-x-3 text-gardenia-green/60 italic text-sm">
                   <Phone size={14} />
                   <span>Ordering as a gift? We love that. Call us for custom wrapping.</span>
                </div>
             </div>
           </motion.div>
        </div>

        {/* Suggestion Section */}
        <div className="py-32 border-t border-gardenia-gold/20">
           <h2 className="text-3xl font-serif italic text-gardenia-green mb-16 text-center">Inspired Selection</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((p, i) => (
                <Link to={`/product/${p.id}`} key={p.id} className="group space-y-4">
                   <div className="aspect-[4/5] bg-gardenia-ivory overflow-hidden">
                      <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                   </div>
                   <div className="text-center">
                      <h4 className="text-sm font-serif italic text-gardenia-green group-hover:text-gardenia-gold">{p.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-gardenia-green/40 mt-1">${p.price}</p>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
