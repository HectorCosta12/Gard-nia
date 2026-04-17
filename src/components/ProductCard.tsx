import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
  key?: string | number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gardenia-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>

        {product.isRare && (
          <div className="absolute top-4 left-4 bg-gardenia-gold/90 backdrop-blur-sm text-white px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold">
            Rare Find
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
          <button className="w-full bg-white/90 backdrop-blur-md text-gardenia-green py-4 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-gardenia-green hover:text-white transition-colors duration-300">
            View Details
          </button>
        </div>
      </Link>

      <div className="pt-6 space-y-2 text-center lg:text-left">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gardenia-brown font-semibold">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-serif italic text-gardenia-green hover:text-gardenia-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-light text-gardenia-green/70">
          ${product.price}.00
        </p>
      </div>
    </motion.div>
  );
}
