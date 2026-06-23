/**
 * SisterFirms — Unique "Ribbon Timeline" Design
 * Two-column layout: left accent column (large number + connecting line)
 * and right content column (firm name in a styled card).
 */

import { useRef, useEffect } from 'react';
import { Badge } from './index';
import useScrollReveal from '../../hooks/useScrollReveal';

/* ── Sister Firms Data ─────────────────────────────────────── */
const SISTER_FIRMS = [
  { name: 'Ganesh Plasto Pack' },
  { name: 'Yashraj Industries' },
  { name: 'Reliable Industries' },
  { name: 'Aditya Roadlines' },
  { name: 'Sunplast Industries' },
  { name: 'Adiraj Industries' }, 
  { name: 'R.K. Club & Resort' }, 
];

/* ── Inline styles (no extra CSS file needed) ──────────────── */
const S = {
  section: {
    position: 'relative',
  },
  /* Vertical glowing rail behind the numbers */
  rail: {
    position: 'absolute',
    left: '28px',
    top: '0',
    bottom: '0',
    width: '2px',
    background: 'linear-gradient(to bottom, transparent 0%, #0B5ED7 15%, #14B8A6 85%, transparent 100%)',
    opacity: 0.25,
    zIndex: 0,
  },
  /* Each row */
  row: (i) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    position: 'relative',
    zIndex: 1,
    opacity: 0,
    transform: 'translateX(-24px)',
    animation: `sfSlideIn 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 90}ms forwards`,
  }),
  /* Numbered orb */
  orb: {
    flexShrink: 0,
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0B5ED7 0%, #14B8A6 100%)',
    boxShadow: '0 0 0 6px rgba(11,94,215,0.08), 0 4px 18px rgba(11,94,215,0.25)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 800,
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: '-0.03em',
  },
  /* Firm name pill */
  pill: {
    flex: 1,
    padding: '18px 24px',
    borderRadius: '14px',
    background: '#fff',
    border: '1px solid #E2E8F0',
    boxShadow: '0 6px 24px rgba(11,94,215,0.07)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    cursor: 'default',
  },
  pillName: {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: 'var(--color-text-primary)',
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: '-0.01em',
  },
  pillTag: {
    fontSize: '0.65rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#0B5ED7',
    background: 'rgba(11,94,215,0.08)',
    borderRadius: '999px',
    padding: '3px 10px',
    whiteSpace: 'nowrap',
  },
};

/* Inject keyframes once */
if (typeof document !== 'undefined' && !document.getElementById('sf-kf')) {
  const style = document.createElement('style');
  style.id = 'sf-kf';
  style.textContent = `
    @keyframes sfSlideIn {
      to { opacity:1; transform:translateX(0); }
    }
    .sf-pill:hover {
      box-shadow: 0 12px 32px rgba(11,94,215,0.14) !important;
      transform: translateX(6px) !important;
    }
  `;
  document.head.appendChild(style);
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function SisterFirms() {
  const refHeader  = useScrollReveal();
  const sectionRef = useRef(null);

  /* Trigger row animations when section enters viewport */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.sf-row').forEach((row) => {
            row.style.animationPlayState = 'running';
          });
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={S.section}>

      {/* ── Section Header ─────────────────────────────────── */}
      <div ref={refHeader} className="text-center mb-12 reveal">
        <Badge variant="recessed">Our Group</Badge>
        <h2
          className="text-3xl font-extrabold mt-3 tracking-tight"
          style={{ color: 'var(--color-text-primary)', fontFamily: "'Poppins', sans-serif" }}
        >
          Sister{' '}
          <span style={{ color: '#0B5ED7' }}>Firms</span>
        </h2>
        <p
          className="text-base leading-relaxed max-w-xl mx-auto mt-2"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          A proud part of a diversified industrial group — spanning resorts,
          farming, agro, chemical, logistics and more.
        </p>
      </div>

      {/* ── Centered timeline ribbon ────────────────────── */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div ref={sectionRef} style={{ position: 'relative' }}>
          {/* Vertical rail */}
          <div style={S.rail} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {SISTER_FIRMS.map(({ name }, i) => (
              <div
                key={name}
                className="sf-row"
                style={{
                  ...S.row(i),
                  animationPlayState: 'paused',
                }}
              >
                {/* Numbered orb */}
                <div style={S.orb}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Firm pill */}
                <div className="sf-pill" style={S.pill}>
                  <span style={S.pillName}>{name}</span>
                  <span style={S.pillTag}>Sister Firm</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
