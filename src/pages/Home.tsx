import { motion } from 'motion/react';
import { ArrowRight, Leaf, Star, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import ReviewCard from '../components/ReviewCard';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen lg:h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10 relative z-10"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-gardenia-gold">Curated Greenery</span>
              <h1 className="text-6xl md:text-8xl font-serif text-gardenia-green leading-[0.9] luxury-text-shadow">
                Bring Life <br />
                Into Your Space
              </h1>
            </div>

            <p className="text-lg md:text-xl font-light text-gardenia-green opacity-80 max-w-md leading-relaxed">
              Premium plants, curated with passion and delivered with care. Experience luxury that feels personal.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <Link to="/shop" className="luxury-button-primary">
                Shop Collections
              </Link>
              <Link to="/contact" className="luxury-button-secondary">
                Speak With Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-end pr-10"
          >
            <div className="arched-panel w-[380px] h-[520px]">
              <div className="absolute inset-0 bg-gardenia-green opacity-5"></div>
              <div className="w-[80%] h-[90%] bg-gradient-to-br from-gardenia-green to-[#1a4a34] [mask-image:radial-gradient(circle_at_center,black_0%,transparent_80%)] opacity-90 rounded-t-full"></div>
              
              <div className="absolute bottom-10 -right-4 bg-gardenia-ivory px-10 py-5 border border-gardenia-green/10 shadow-lg">
                <div className="text-[10px] uppercase font-bold text-gardenia-gold mb-1">New Arrival</div>
                <div className="text-xl font-serif text-gardenia-green italic">Monstera Signature</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Meta Footer - As specified in theme */}
      <section className="border-t border-gardenia-green/10 bg-white/50 py-10 px-6 lg:px-20 hidden lg:block">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center gap-12">
          <div className="testimonial text-sm italic font-serif opacity-90 relative pl-6 quote-mark">
            Extremely friendly, attentive and professional. You can feel they truly love what they do.
          </div>
          <div className="flex items-center space-x-4">
             <div className="flex -space-x-2">
                {[0.6, 0.4, 0.2].map((op, i) => (
                  <div key={i} className="w-14 h-14 bg-gardenia-green rounded-sm" style={{ opacity: op }}></div>
                ))}
             </div>
             <div className="text-[11px] uppercase tracking-[0.1em] font-bold text-gardenia-green/80">Explore Gallery</div>
          </div>
          <div className="text-right">
             <div className="flex items-center justify-end space-x-3 group cursor-pointer">
                <div className="w-10 h-px bg-gardenia-gold group-hover:w-16 transition-all duration-500"></div>
                <span className="text-[11px] uppercase tracking-[0.1em] font-bold">Follow us on Instagram</span>
             </div>
          </div>
        </div>
      </section>

      {/* About Highlights */}
      <section className="py-24 lg:py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="relative aspect-[4/5] overflow-hidden rounded-sm"
           >
              <img
                src="https://picsum.photos/seed/about-man/800/1000"
                alt="Gardénia Botanist"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gardenia-gold/10 rounded-full blur-3xl"></div>
           </motion.div>

           <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.4em] font-semibold text-gardenia-gold">Rooted in Passion</h3>
                <h2 className="text-4xl lg:text-6xl font-serif italic text-gardenia-green leading-tight">More Than a <br />Plant Store</h2>
              </div>

              <div className="space-y-6 text-lg font-light text-gardenia-green/70 leading-relaxed max-w-xl">
                 <p>At Gardénia, every plant tells a story. We believe that greenery brings more than just beauty—it brings calm, presence, and life into your home.</p>
                 <p>We are a boutique plant house built on passion, care, and attention to detail. From the first conversation to the final delivery, we create an experience that feels personal, warm, and refined.</p>
                 <p className="font-medium text-gardenia-green italic drop-shadow-sm">Our team doesn't just sell plants — we guide, advise, and help you create spaces that feel alive.</p>
              </div>

              <div className="pt-6">
                <Link to="/about" className="text-gardenia-gold font-serif italic text-xl border-b border-gardenia-gold/30 pb-1 hover:border-gardenia-gold transition-all">
                  Read Our Full Story
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 lg:py-40 bg-gardenia-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 space-y-8 lg:space-y-0">
             <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.4em] font-semibold text-gardenia-gold">Curated Collection</h3>
                <h2 className="text-4xl lg:text-6xl font-serif italic text-gardenia-green">Botanical Excellence</h2>
             </div>
             <Link to="/shop" className="text-xs uppercase tracking-[0.2em] font-bold text-gardenia-green flex items-center group">
               Explore Full Shop <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {PRODUCTS.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 lg:py-40 bg-gardenia-green text-gardenia-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gardenia-gold opacity-5 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
           <div className="space-y-4 mb-20 text-center">
              <h3 className="text-xs uppercase tracking-[0.4em] font-semibold text-gardenia-gold">Our Philosophy</h3>
              <h2 className="text-4xl lg:text-6xl font-serif italic mb-6">Service That Feels Different</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: Star, title: "Personal Recommendations", desc: "Tailored greenery for your specific light and space." },
                { icon: MessageCircle, title: "Phone & Direct Support", desc: "Real humans, passionate about your plant journey." },
                { icon: Sparkles, title: "Carefully Prepared", desc: "Every order is handled with artisan craftsmanship." },
                { icon: Leaf, title: "Detailed Care Guides", desc: "Lifelong support for your botanical companions." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="space-y-6 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full border border-gardenia-gold/30 flex items-center justify-center text-gardenia-gold mb-2">
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-lg font-serif italic">{item.title}</h4>
                  <p className="text-gardenia-ivory/60 text-sm leading-relaxed max-w-[200px]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 lg:py-48 text-center bg-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,0 C20,20 80,20 100,0 L100,100 C80,80 20,80 0,100 Z" fill="#0F2A1D"></path>
            </svg>
         </div>

         <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-10">
            <h2 className="text-4xl md:text-6xl font-serif italic text-gardenia-green">Let us help you transform <br /> your space</h2>
            <Link
              to="/contact"
              className="inline-block px-12 py-6 bg-gardenia-green text-gardenia-ivory text-xs uppercase tracking-[0.3em] font-bold hover:bg-gardenia-gold transition-colors duration-500 shadow-xl"
            >
              Talk to Gardénia
            </Link>
         </div>
      </section>
    </div>
  );
}
