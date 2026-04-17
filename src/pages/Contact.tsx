import { motion } from 'motion/react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-gardenia-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
           <div className="space-y-12">
              <header className="space-y-6">
                <h2 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-gardenia-gold">Personal Attention</h2>
                <h1 className="text-5xl lg:text-7xl font-serif italic text-gardenia-green leading-tight italic drop-shadow-sm">We’re here <br />for you</h1>
                <p className="text-xl font-light text-gardenia-green/70 leading-relaxed font-cormorant italic max-w-md">
                   "Prefer to talk? We love that. Give us a call or send a message. At Gardénia, every conversation matters."
                </p>
              </header>

              <div className="space-y-10 pt-10">
                 <div className="flex items-start space-x-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-gardenia-gold/20 flex items-center justify-center text-gardenia-gold group-hover:bg-gardenia-gold group-hover:text-white transition-all duration-500">
                       <Phone size={20} />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] uppercase tracking-widest text-gardenia-green/40">Give us a call</p>
                       <p className="text-xl font-serif text-gardenia-green italic">+1 (555) GARDÉNIA</p>
                    </div>
                 </div>

                 <div className="flex items-start space-x-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-gardenia-gold/20 flex items-center justify-center text-gardenia-gold group-hover:bg-gardenia-gold group-hover:text-white transition-all duration-500">
                       <MessageCircle size={20} />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] uppercase tracking-widest text-gardenia-green/40">Text us on WhatsApp</p>
                       <p className="text-xl font-serif text-gardenia-green italic">Message our botanists</p>
                    </div>
                 </div>

                 <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 rounded-full border border-gardenia-gold/20 flex items-center justify-center text-gardenia-gold group-hover:bg-gardenia-gold group-hover:text-white transition-all duration-500">
                       <Mail size={20} />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] uppercase tracking-widest text-gardenia-green/40">Email our team</p>
                       <p className="text-xl font-serif text-gardenia-green italic">concierge@gardenia.luxury</p>
                    </div>
                 </div>

                 <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 rounded-full border border-gardenia-gold/20 flex items-center justify-center text-gardenia-gold group-hover:bg-gardenia-gold group-hover:text-white transition-all duration-500">
                       <MapPin size={20} />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] uppercase tracking-widest text-gardenia-green/40">Our Boutique House</p>
                       <p className="text-xl font-serif text-gardenia-green italic">Botanical Row, Upper District</p>
                    </div>
                 </div>
              </div>
           </div>

           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="bg-white p-10 lg:p-16 shadow-2xl relative border border-gardenia-gold/10"
           >
              <div className="absolute top-0 left-0 w-2 h-full bg-gardenia-gold"></div>
              <h3 className="text-3xl font-serif italic text-gardenia-green mb-10">Send a Note</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                 <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gardenia-green/50 font-bold px-1">Your Name</label>
                    <input type="text" className="w-full bg-gardenia-ivory border-b border-gardenia-gold/20 py-4 px-2 focus:border-gardenia-green outline-none transition-colors font-light text-gardenia-green" placeholder="e.g. Julian Thorne" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gardenia-green/50 font-bold px-1">Email Address</label>
                    <input type="email" className="w-full bg-gardenia-ivory border-b border-gardenia-gold/20 py-4 px-2 focus:border-gardenia-green outline-none transition-colors font-light text-gardenia-green" placeholder="e.g. hello@example.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gardenia-green/50 font-bold px-1">How can we help?</label>
                    <textarea rows={4} className="w-full bg-gardenia-ivory border-b border-gardenia-gold/20 py-4 px-2 focus:border-gardenia-green outline-none transition-colors font-light text-gardenia-green resize-none" placeholder="Tell us about your space or request..." />
                 </div>
                 <button className="w-full bg-gardenia-green text-white py-6 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gardenia-gold transition-all duration-500 shadow-xl mt-4">
                    Send message
                 </button>
              </form>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
