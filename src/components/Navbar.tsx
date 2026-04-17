import { motion } from 'motion/react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 border-r border-gardenia-green/10 flex-col items-center justify-between py-10 bg-gardenia-ivory z-[60]">
        <div className="side-rail-text">Established 2024</div>
        <div className="flex flex-col space-y-2 translate-y-20">
          <div className="w-1 h-1 bg-gardenia-green rounded-full"></div>
          <div className="w-1 h-1 bg-gardenia-green/20 rounded-full"></div>
          <div className="w-1 h-1 bg-gardenia-green/20 rounded-full"></div>
        </div>
        <div className="side-rail-text whitespace-nowrap">Boutique House</div>
      </aside>

      <nav className={cn(
        'fixed top-0 left-0 lg:left-20 right-0 z-50 transition-all duration-500 py-8 px-6 lg:px-12',
        scrolled ? 'bg-gardenia-ivory/95 backdrop-blur-md border-b border-gardenia-green/10 py-5 shadow-sm' : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl lg:text-3xl font-serif tracking-[0.15em] uppercase text-gardenia-green order-2 lg:order-1">
            Gardénia
          </Link>

          <button className="lg:hidden text-gardenia-green p-2 order-1" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>

          <div className="hidden lg:flex items-center space-x-12 order-2">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-[11px] uppercase tracking-[0.1em] font-semibold text-gardenia-green hover:text-gardenia-gold transition-colors">
                {link.name}
              </Link>
            ))}
            <button className="relative p-2 text-gardenia-green hover:text-gardenia-gold transition-colors">
              <ShoppingCart size={18} />
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-gardenia-gold text-white text-[8px] flex items-center justify-center rounded-full leading-none">0</span>
            </button>
          </div>

          <div className="lg:hidden order-3 p-2">
            <ShoppingCart size={20} className="text-gardenia-green" />
          </div>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{ open: { x: 0 }, closed: { x: '-100%' } }}
          className="fixed inset-0 bg-gardenia-green z-[60] lg:hidden flex flex-col p-8"
        >
          <div className="flex justify-end p-4">
            <button className="text-gardenia-ivory" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-3xl font-serif text-gardenia-ivory italic" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="text-lg font-medium text-gardenia-gold uppercase tracking-[0.2em]" onClick={() => setIsOpen(false)}>
              Speak With Us
            </Link>
          </div>
          <div className="text-gardenia-ivory/50 text-[10px] uppercase tracking-widest text-center py-8">
            © {new Date().getFullYear()} GARDÉNIA LUXURY BOTANIQUE
          </div>
        </motion.div>
      </nav>
    </>
  );
}
