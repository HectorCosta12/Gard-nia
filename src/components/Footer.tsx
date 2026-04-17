import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gardenia-green text-gardenia-ivory pt-24 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif italic">Gardénia</h2>
            <p className="text-gardenia-ivory/70 text-sm leading-relaxed max-w-xs">
              A premium plant boutique, curating the finest greenery for discerning spaces. Based on passion, care, and an eye for elegance.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gardenia-gold">Explore</h3>
            <ul className="space-y-4 text-sm text-gardenia-ivory/70">
              <li><Link to="/shop" className="hover:text-white transition-colors">Botanical Collection</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Customer Care</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gardenia-gold">Support</h3>
            <ul className="space-y-4 text-sm text-gardenia-ivory/70">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gardenia-gold">Connect</h3>
            <ul className="space-y-4 text-sm text-gardenia-ivory/70">
              <li><a href="#" className="hover:text-white transition-colors italic">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors italic">Pinterest</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors italic">WhatsApp</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.3em] text-gardenia-ivory/40">
          <div>© {currentYear} Gardénia Luxury Botanique. All Rights Reserved.</div>
          <div className="mt-4 md:mt-0">Curated Plants. Crafted Experiences.</div>
        </div>
      </div>
    </footer>
  );
}
