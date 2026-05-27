import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Add shadow on scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full px-4 md:px-6 lg:px-8 py-3"
      style={{
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E2E8F0',
        boxShadow: scrolled ? '0 4px 24px rgba(10, 37, 64, 0.10)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* ── Main bar ─────────────────────────────────── */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* ── Logo / Brand ─────────────────────────── */}
        <Link
          to="/"
          className="flex items-center gap-2.5 select-none"
          aria-label="Ganesh Plasto Pack — home"
        >
          {/* Brand logo image */}
          <img
            src="https://res.cloudinary.com/dlh5prjhb/image/upload/v1779891101/8a0b8620-7e17-498d-9c44-1f996c262384.png"
            alt="Ganesh Plasto Pack Logo - Jerry Can Manufacturer"
            className="h-9 w-auto shrink-0"
            style={{ objectFit: 'contain', backgroundColor: 'transparent', borderRadius: '6px' }}
          />

          <span
            className="font-bold text-[15px] leading-tight tracking-tight"
            style={{ color: '#0F172A', fontFamily: "'Poppins', sans-serif" }}
          >
            Ganesh Plasto Pack
          </span>
        </Link>

        {/* ── Desktop nav ──────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                [
                  'relative px-3.5 py-2 rounded-lg text-[13px] font-semibold',
                  'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
                  isActive
                    ? 'text-[#0B5ED7] bg-[#EFF6FF]'
                    : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ── CTA + Hamburger ──────────────────────── */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919561618161"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5
                       rounded-[10px] text-[13px] font-semibold text-white
                       transition-all duration-300 hover:-translate-y-[2px]"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            }}
          >
            {/* WhatsApp icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center
                       transition-all duration-200 active:scale-95 bg-[#F8FAFC] border border-[#E2E8F0]"
          >
            {mobileOpen
              ? <X size={17} color="#0B5ED7" />
              : <Menu size={17} color="#0F172A" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ────────────────────────────── */}
      {mobileOpen && (
        <div
          className="mt-3 rounded-xl px-3 py-3 flex flex-col gap-1 max-w-7xl mx-auto"
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            boxShadow: '0 12px 32px rgba(10, 37, 64, 0.1)',
          }}
        >
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                [
                  'block rounded-lg px-4 py-2.5 text-[13px] font-semibold',
                  'transition-all duration-200',
                  isActive
                    ? 'text-[#0B5ED7] bg-[#EFF6FF]'
                    : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href="https://wa.me/919561618161"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex justify-center items-center gap-1.5 rounded-[10px] px-4 py-2.5
                       text-[13px] font-semibold text-white
                       transition-all duration-200 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            }}
          >
            {/* WhatsApp icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
