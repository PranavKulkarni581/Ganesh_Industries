import { Phone } from 'lucide-react';
import { useState } from 'react';

export default function FloatingCallButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Call menu tooltip */}
      {open && (
        <div
          className="bg-white rounded-xl px-4 py-3 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200"
          style={{
            background: 'rgba(11, 94, 215, 0.95)',
            color: '#FFFFFF',
          }}
        >
          <p className="text-sm font-semibold whitespace-nowrap">Call Now</p>
          <a
            href="tel:+919561618161"
            className="text-lg font-bold mt-1 block hover:opacity-80 transition"
          >
            +91-9561618161
          </a>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        aria-label="Call Ganesh Plasto Pack"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl"
        style={{
          background: 'linear-gradient(135deg, #0B5ED7 0%, #14B8A6 100%)',
          boxShadow: '0 10px 32px rgba(11, 94, 215, 0.4)',
        }}
      >
        <Phone size={24} color="#FFFFFF" fill="#FFFFFF" />
      </button>

      {/* WhatsApp alternative - optional comment for future */}
      {/* 
      <a
        href="https://wa.me/919561618161"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        style={{
          background: '#25D366',
        }}
      >
        <MessageCircle size={24} color="#FFFFFF" fill="#FFFFFF" />
      </a>
      */}
    </div>
  );
}
