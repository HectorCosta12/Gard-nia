import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24 lg:pt-48">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-24 max-w-3xl mx-auto space-y-6">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-gardenia-gold">Our Story</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic text-gardenia-green leading-tight">Rooted in Passion, <br />Crafted with Care</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-center">
           <div className="lg:col-span-7 aspect-[16/9] overflow-hidden rounded-sm">
             <img
                src="https://picsum.photos/seed/nursery/1200/800"
                alt="Gardénia Nursery"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
             />
           </div>
           <div className="lg:col-span-5 space-y-8">
             <p className="text-xl font-cormorant italic text-gardenia-green leading-relaxed">
               "Gardénia was built on a simple belief — that plants should be more than decoration. They should bring calm, beauty, and presence into your life."
             </p>
             <p className="text-gardenia-green/70 leading-relaxed font-light">
               From day one, our focus has been people: listening, advising, and delivering with genuine care. We take the time to understand your space, your lifestyle, and your vision for a greener home.
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-40">
           <div className="space-y-6 text-center lg:text-left">
              <h3 className="text-gardenia-gold text-4xl font-serif italic">01</h3>
              <h4 className="text-xl font-serif text-gardenia-green italic">Curated Selection</h4>
              <p className="text-gardenia-green/70 text-sm leading-relaxed">We source only the healthiest, most sculptural specimens. Every plant in our boutique is hand-picked for its vitality and aesthetic presence.</p>
           </div>
           <div className="space-y-6 text-center lg:text-left">
              <h3 className="text-gardenia-gold text-4xl font-serif italic">02</h3>
              <h4 className="text-xl font-serif text-gardenia-green italic">Personal Guidance</h4>
              <p className="text-gardenia-green/70 text-sm leading-relaxed">Our experts don't just sell; we consult. Whether via phone or in person, we're here to ensure you choose the perfect plant for your environment.</p>
           </div>
           <div className="space-y-6 text-center lg:text-left">
              <h3 className="text-gardenia-gold text-4xl font-serif italic">03</h3>
              <h4 className="text-xl font-serif text-gardenia-green italic">Artisanal Delivery</h4>
              <p className="text-gardenia-green/70 text-sm leading-relaxed">The experience doesn't end at the checkout. We prepare every order with meticulous care, ensuring your new life arrives in perfect, boutique condition.</p>
           </div>
        </div>

        {/* Team Section Placeholder */}
        <section className="bg-gardenia-green text-gardenia-ivory py-24 rounded-sm relative overflow-hidden">
           <div className="absolute inset-0 opacity-10">
              <img src="https://picsum.photos/seed/texture/2000/1000" className="w-full h-full object-cover mix-blend-overlay" referrerPolicy="no-referrer" />
           </div>
           <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12">
              <h2 className="text-4xl lg:text-5xl font-serif italic italic drop-shadow-sm">Meet our lead botanists</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 {[
                   { name: "Julian Thorne", role: "Head of Curation", img: "https://picsum.photos/seed/julian/400/500" },
                   { name: "Elena Vane", role: "Care Specialist", img: "https://picsum.photos/seed/elena/400/500" }
                 ].map((t) => (
                   <div key={t.name} className="space-y-4">
                      <div className="aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                         <img src={t.img} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <h4 className="text-xl font-serif italic text-gardenia-gold">{t.name}</h4>
                      <p className="text-xs uppercase tracking-widest text-gardenia-ivory/60">{t.role}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
