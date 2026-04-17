import type { Testimonial } from '../types';

interface ReviewCardProps {
  testimonial: Testimonial;
  key?: string | number;
}

export default function ReviewCard({ testimonial }: ReviewCardProps) {
  return (
    <div className="bg-white p-10 lg:p-12 relative overflow-hidden group border border-gardenia-green/5 hover:border-gardenia-gold/30 transition-all duration-700 shadow-sm">
      <div className="relative z-10 space-y-6">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-gardenia-gold text-[10px]">★</span>
          ))}
        </div>

        <p className="text-xl lg:text-2xl font-serif italic text-gardenia-green leading-relaxed relative pl-4 quote-mark">
          {testimonial.text}
        </p>

        <div className="pt-4 flex items-center space-x-3">
          <div className="h-px w-8 bg-gardenia-gold/40"></div>
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gardenia-green/60">
            {testimonial.author}
          </p>
        </div>
      </div>
    </div>
  );
}
