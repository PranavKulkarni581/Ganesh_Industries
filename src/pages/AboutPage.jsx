import { Link } from 'react-router-dom';
import {
  ArrowRight, Target, Eye, CheckCircle2,
  Award, Users, Zap, TrendingUp, Quote,
  Crown, Sparkles, GraduationCap, Briefcase,
} from 'lucide-react';
import { Card, Button, Badge, IconContainer } from '../components/ui';
import useScrollReveal from '../hooks/useScrollReveal';

/* ── Images ─────────────────────────────────────────────────────── */
const IMG = {
  hero:    'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782219316/ChatGPT_Image_Jun_23_2026_06_23_03_PM_ngja5n.png',
  team:    'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782219806/1a1fbead-1157-4353-b7b1-7d482fed6b88.png', 
};
  
/* ── Founders ────────────────────────────────────────────────────── */
const FIRST_GEN = [
  {
    name:   'Rajkumar Kankariya',
    role:   'Founder',
    bio:    'The visionary who founded Ganesh Plasto Pack in 1993, Rajkumar Ji laid the cornerstone of the company with a relentless focus on quality, ethics, and trust. His pioneering spirit transformed a single-unit facility into a 32-machine industrial powerhouse.',
    initials: 'RK',
  },
  {
    name:   'Gautam Kankariya',
    role:   'Founder',
    qualification: 'BCom',
    bio:    'With deep expertise in business operations and financial management, Gautam Ji has been instrumental in building robust distribution networks and forging long-term client relationships across agro-chemical, FMCG, and pharma sectors.',
    initials: 'GK',
  },
  {
    name:   'Kishor Kankariya',
    role:   'Founder',
    qualification: 'BCom',
    bio:    'A seasoned entrepreneur with deep roots in the Maharashtra industrial belt, Kishor Ji has driven operational excellence and scaled the company\'s production capabilities to serve 200+ product SKUs across 6 categories.',
    initials: 'KK',
  },
];

const NEXT_GEN = [
  {
    name:   'Yash Kankariya',
    qualification: 'BBA (Finance & Management)',
    institution: 'MIT, Pune',
    bio:    'Armed with a degree in Finance & Management from MIT Pune, Yash brings modern financial strategies, data-driven decision making, and fresh business perspectives to steer the company\'s growth into new markets.',
    initials: 'YK',
  },
  {
    name:   'Aditya Kankariya',
    qualification: 'BE Production Engineering',
    institution: 'Jain University, Bangalore',
    bio:    'With a BE in Production Engineering from Jain University Bangalore, Aditya drives manufacturing innovation, process optimization, and technology upgrades to keep Ganesh Plasto Pack at the industry\'s cutting edge.',
    initials: 'AK',
  },
];

/* ── Timeline data ───────────────────────────────────────────────── */
const TIMELINE = [
  { year: '1993', title: 'Founded', desc: 'Ganesh Plasto Pack established in Barshi, Maharashtra with a small blow-moulding unit.' },
  { year: '2000', title: 'Expansion', desc: 'Doubled machine capacity. Entered the agro-chemical and edible oil packaging segments.' },
  // { year: '2008', title: 'ISO Certification', desc: 'Achieved ISO quality management certification. Began supplying to multi-state clients.' },
  { year: '2015', title: 'Transport Network & Logistics', desc: 'Added own fleet of delivery trucks for direct pan-India distribution.' },
  { year: '2020', title: '32 Machines', desc: 'Scaled to 32 fully automated blow-moulding machines, producing 85,000+ units per day.' },
  { year: '2026', title: 'Today', desc: 'Serving 200+ product SKUs across 6 categories with a trusted workforce of 10+ year veterans.' },
];

/* ── Values ──────────────────────────────────────────────────────── */
const VALUES = [
  { icon: Target,   title: 'Our Mission',   desc: 'To deliver precision-engineered plastic packaging that meets the highest quality and safety standards — consistently, at scale.' },
  { icon: Eye,      title: 'Our Vision',    desc: 'To be Maharashtra\'s most trusted packaging manufacturer, expanding across India while upholding community and environmental values.' },
  { icon: Zap,      title: 'Quality First', desc: 'Every unit is inspected before dispatch. Virgin-grade raw materials. Zero compromise on dimensional accuracy or leak-proof performance.' },
  { icon: Users,    title: 'Our People',    desc: 'A loyal, skilled workforce — many with 25+ years of service — forms the backbone of our consistent output and customer trust.' },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  const refHero     = useScrollReveal();
  const refStats    = useScrollReveal();
  const refMission  = useScrollReveal();
  const refTimeline = useScrollReveal();
  const refFounders = useScrollReveal();
  const refTeam     = useScrollReveal();

  return (
    <div className="flex flex-col gap-20">

      {/* ── §1 Hero ─────────────────────────────────────────────── */}
      <section ref={refHero} className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center">
        <div className="flex flex-col gap-5 reveal">
          <Badge variant="recessed" dot>Since 1993</Badge>
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: 'var(--color-text-primary)', fontFamily: "'Poppins', sans-serif" }}
          >
            32+ Years of{' '}
            <span style={{ color: '#0B5ED7' }}>Jerry Can Manufacturing</span>{' '}
            Excellence in Barshi
          </h1>
          <p
            className="text-base leading-relaxed max-w-xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Founded in 1993 in Barshi, Maharashtra, Ganesh Plasto Pack has grown
            from a single-unit blow-moulding facility into one of the region's
            most trusted Jerry Can Manufacturers and HDPE Jerry Can Suppliers. Three
            decades of craftsmanship, 85,000+ pcs a day, and an unwavering
            commitment to quality define who we are. One of the best jerry can manufacturer
            and best HDPE can manufacturer in India, serving across industries.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button as={Link} to="/products" variant="primary" size="md">
              Our Products <ArrowRight size={15} />
            </Button>
            <Button as={Link} to="/contact" variant="secondary" size="md">
              Get in Touch
            </Button>
          </div>
        </div>

        <Card screws vents padding="none" hoverable={false} className="overflow-hidden">
          <img
            src={IMG.hero}
            alt="Ganesh Plasto Pack factory"
            className="img-reveal w-full h-full object-cover"
            style={{ minHeight: 340 }}
            /* TODO: replace with actual facility photograph */
          />
        </Card>
      </section>

      {/* ── §2 Stats strip ──────────────────────────────────────── */}
      <section ref={refStats} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: Award,     value: '32+',     label: 'Years in Business' },
          { icon: TrendingUp,value: '85,000+', label: 'Pcs / Day' },
          { icon: CheckCircle2,value: '200+',  label: 'Product SKUs' },
          { icon: Users,     value: '25+',     label: 'Avg. Employee Tenure (yrs)' },
        ].map(({ icon: Icon, value, label }, i) => (
          <Card key={label} screws vents={false} padding="lg" className={`text-center flex flex-col items-center gap-3 reveal reveal-delay-${i + 1}`}>
            <IconContainer size="md" variant="recessed" icon={<Icon size={20} />} color="#0B5ED7" />
            <p className="text-3xl font-extrabold" style={{ color: '#0B5ED7' }}>{value}</p>
            <p className="text-xs font-semibold" style={{ color: 'var(--color-text-secondary)' }}>{label}</p>
          </Card>
        ))}
      </section>

      {/* ── §3 Mission / Vision / Values ────────────────────────── */}
      <section ref={refMission}>
        <div className=" mb-10 reveal">
          <Badge variant="recessed">Who We Are</Badge>
          <h2 className="text-3xl font-extrabold mt-3 tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}>
            Mission, Vision & Values
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VALUES.map(({ icon: Icon, title, desc }, i) => (
            <Card key={title} screws={false} vents={false} padding="lg" className={`flex flex-col gap-4 reveal reveal-delay-${(i % 2) + 1}`}>
              <IconContainer size="md" variant="recessed" icon={<Icon size={20} />} color="#0B5ED7" />
              <h3 className="font-bold text-base" style={{ color: 'var(--color-text-primary)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ── §4 Timeline ─────────────────────────────────────────── */}
      <section ref={refTimeline}>
        <div className="text-center mb-10 reveal">
          <Badge variant="recessed">Our Journey</Badge>
          <h2 className="text-3xl font-extrabold mt-3 tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}>
            Growth Timeline
          </h2>
        </div>

        <div className="relative flex flex-col gap-0">
          {/* Vertical spine */}
          <div
            className="absolute left-[19px] top-4 bottom-4 w-[2px] hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, #0B5ED7, rgba(11,94,215,0.1))' }}
          />

          {TIMELINE.map((item, i) => (
            <div key={item.year} className={`flex gap-5 items-start pb-8 last:pb-0 reveal reveal-delay-${(i % 4) + 1}`}>
              {/* Year node */}
              <div className="flex flex-col items-center shrink-0 z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-[10px] font-bold"
                  style={{
                    background: i === TIMELINE.length - 1
                      ? 'linear-gradient(135deg, #0B5ED7, #14B8A6)'
                      : '#EFF6FF',
                    color:  i === TIMELINE.length - 1 ? '#fff' : '#0B5ED7',
                    border: i === TIMELINE.length - 1 ? 'none' : '1.5px solid rgba(11,94,215,0.2)',
                    boxShadow: '0 4px 12px rgba(11,94,215,0.15)',
                  }}
                >
                  {item.year.slice(2)}
                </div>
              </div>

              {/* Content */}
              <Card screws={false} padding="md" className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="font-mono text-[11px] font-bold"
                    style={{ color: '#0B5ED7' }}
                  >
                    {item.year}
                  </span>
                  <span
                    className="font-bold text-sm"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    — {item.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* ── §5 Founders ──────────────────────────────────────────── */}
      <section ref={refFounders}>
        <div className="text-center mb-14 reveal">
          <Badge variant="recessed">Leadership</Badge>
          <h2
            className="text-3xl font-extrabold mt-3 tracking-tight"
            style={{ color: 'var(--color-text-primary)', fontFamily: "'Poppins', sans-serif" }}
          >
            The People Behind{' '}
            <span style={{ color: '#0B5ED7' }}>Ganesh Plasto Pack</span>
          </h2>
          <p
            className="text-sm mt-3 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Built on the pillars of ethics, trust, and relentless quality — our legacy
            spans two generations of the Kankariya family, each contributing vision and
            expertise to grow the company steadily.
          </p>
        </div>

        {/* ═══ First Generation ═══ */}
        <div className="reveal" style={{ marginBottom: 48 }}>
          {/* Generation Label */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            marginBottom: 28,
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 44, height: 44, borderRadius: 12,
              background: 'linear-gradient(135deg, #0B5ED7, #0A2540)',
              boxShadow: '0 8px 24px rgba(11,94,215,0.3)',
            }}>
              <Crown size={20} color="#fff" />
            </div>
            <div>
              <h3 style={{
                fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)',
                fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}>
                Founding Generation
              </h3>
              <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                Est. 1993 · The Visionaries
              </p>
            </div>
          </div>

          {/* Three Founder Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FIRST_GEN.map((founder, i) => (
              <div
                key={founder.name}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  borderRadius: 20,
                  overflow: 'hidden',
                  background: '#ffffff',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 12px 40px rgba(11,94,215,0.08)',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(11,94,215,0.14)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(11,94,215,0.08)';
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  height: 4,
                  background: 'linear-gradient(90deg, #0B5ED7, #14B8A6)',
                }} />

                {/* Avatar initials */}
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 28 }}>
                  <div style={{
                    width: 88, height: 88,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0B5ED7, #0A2540)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(11,94,215,0.25)',
                    border: '3px solid #ffffff',
                    outline: '2px solid rgba(11,94,215,0.12)',
                  }}>
                    <span style={{
                      fontSize: 28, fontWeight: 800, color: '#ffffff',
                      fontFamily: "'Poppins', sans-serif",
                      letterSpacing: '0.02em',
                    }}>
                      {founder.initials}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '16px 24px 28px', textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: 18, fontWeight: 800,
                    color: 'var(--color-text-primary)',
                    margin: '8px 0 6px',
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: '-0.02em',
                  }}>
                    {founder.name}
                  </h3>

                  {/* Role pill */}
                  <span style={{
                    display: 'inline-block',
                    fontSize: 10, fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '4px 14px',
                    borderRadius: 999,
                    marginBottom: 6,
                    background: 'linear-gradient(135deg, rgba(11,94,215,0.1), rgba(20,184,166,0.1))',
                    color: '#0B5ED7',
                    border: '1px solid rgba(11,94,215,0.15)',
                  }}>
                    {founder.role}
                  </span>

                  {/* Qualification */}
                  {founder.qualification && (
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: 4, marginBottom: 12, marginTop: 6,
                    }}>
                      <GraduationCap size={13} color="#64748B" />
                      <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                        {founder.qualification}
                      </span>
                    </div>
                  )}

                  {!founder.qualification && <div style={{ marginBottom: 12 }} />}

                  {/* Divider */}
                  <div style={{
                    width: 36, height: 2, margin: '0 auto 14px',
                    background: 'linear-gradient(90deg, #0B5ED7, #14B8A6)',
                    borderRadius: 2,
                  }} />

                  {/* Bio */}
                  <p style={{
                    fontSize: 13, lineHeight: 1.75,
                    color: 'var(--color-text-secondary)',
                  }}>
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ Generation Connector ═══ */}
        <div className="reveal" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          margin: '0 0 48px',
          position: 'relative',
        }}>
          <div style={{
            width: 2, height: 48,
            background: 'linear-gradient(to bottom, #0B5ED7, #14B8A6)',
            borderRadius: 2,
          }} />
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg, #14B8A6, #0B5ED7)',
            boxShadow: '0 6px 20px rgba(20,184,166,0.35)',
            margin: '8px 0',
          }}>
            <Sparkles size={16} color="#fff" />
          </div>
          <div style={{
            width: 2, height: 48,
            background: 'linear-gradient(to bottom, #14B8A6, #0B5ED7)',
            borderRadius: 2,
          }} />
        </div>

        {/* ═══ Next Generation ═══ */}
        <div className="reveal">
          {/* Generation Label */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            marginBottom: 28,
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 44, height: 44, borderRadius: 12,
              background: 'linear-gradient(135deg, #14B8A6, #0B5ED7)',
              boxShadow: '0 8px 24px rgba(20,184,166,0.3)',
            }}>
              <Sparkles size={20} color="#fff" />
            </div>
            <div>
              <h3 style={{
                fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)',
                fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}>
                Next Generation
              </h3>
              <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                New Ideas · New Vision · Steady Growth
              </p>
            </div>
          </div>

          {/* Two Next-Gen Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NEXT_GEN.map((member, i) => (
              <div
                key={member.name}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  borderRadius: 20,
                  overflow: 'hidden',
                  background: '#ffffff',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 12px 40px rgba(20,184,166,0.08)',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(20,184,166,0.14)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(20,184,166,0.08)';
                }}
              >
                {/* Top accent bar – teal gradient for next gen */}
                <div style={{
                  height: 4,
                  background: 'linear-gradient(90deg, #14B8A6, #0B5ED7)',
                }} />

                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: 20,
                  padding: '28px 28px 28px',
                }}>
                  {/* Avatar initials */}
                  <div style={{
                    width: 80, height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #14B8A6, #0B5ED7)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(20,184,166,0.25)',
                    flexShrink: 0,
                    border: '3px solid #ffffff',
                    outline: '2px solid rgba(20,184,166,0.12)',
                  }}>
                    <span style={{
                      fontSize: 24, fontWeight: 800, color: '#ffffff',
                      fontFamily: "'Poppins', sans-serif",
                      letterSpacing: '0.02em',
                    }}>
                      {member.initials}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{
                      fontSize: 18, fontWeight: 800,
                      color: 'var(--color-text-primary)',
                      fontFamily: "'Poppins', sans-serif",
                      letterSpacing: '-0.02em',
                      marginBottom: 4,
                    }}>
                      {member.name}
                    </h3>

                    {/* Role pill */}
                    {/* <span style={{
                      display: 'inline-block',
                      fontSize: 10, fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '3px 12px',
                      borderRadius: 999,
                      marginBottom: 8,
                      background: 'linear-gradient(135deg, rgba(20,184,166,0.1), rgba(11,94,215,0.1))',
                      color: '#14B8A6',
                      border: '1px solid rgba(20,184,166,0.2)',
                    }}>
                      {member.role}
                    </span> */}

                    {/* Qualification + Institution */}
                    <div style={{
                      display: 'flex', flexWrap: 'wrap', gap: 8,
                      marginBottom: 12, marginTop: 4,
                    }}>
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: 4,
                        fontSize: 11, color: '#0B5ED7', fontWeight: 600,
                        background: 'rgba(11,94,215,0.06)',
                        padding: '3px 10px', borderRadius: 8,
                      }}>
                        <GraduationCap size={12} />
                        {member.qualification}
                      </div>
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: 4,
                        fontSize: 11, color: 'var(--color-text-secondary)', fontWeight: 600,
                        background: 'var(--color-surface-2)',
                        padding: '3px 10px', borderRadius: 8,
                      }}>
                        <Briefcase size={11} />
                        {member.institution}
                      </div>
                    </div>

                    {/* Divider */}
                    <div style={{
                      width: 36, height: 2, marginBottom: 10,
                      background: 'linear-gradient(90deg, #14B8A6, #0B5ED7)',
                      borderRadius: 2,
                    }} />

                    {/* Bio */}
                    <p style={{
                      fontSize: 13, lineHeight: 1.75,
                      color: 'var(--color-text-secondary)',
                    }}>
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ Legacy Quote ═══ */}
        <div className="reveal" style={{
          marginTop: 48,
          textAlign: 'center',
          padding: '32px 28px',
          borderRadius: 20,
          background: 'linear-gradient(135deg, rgba(11,94,215,0.03), rgba(20,184,166,0.03))',
          border: '1px solid rgba(11,94,215,0.08)',
        }}>
          <Quote size={28} color="#0B5ED7" style={{ margin: '0 auto 12px', opacity: 0.3 }} />
          <p style={{
            fontSize: 16, fontWeight: 600, fontStyle: 'italic',
            color: 'var(--color-text-primary)',
            lineHeight: 1.7, maxWidth: 640, margin: '0 auto',
            fontFamily: "'Poppins', sans-serif",
          }}>
            Growing steadily, following the ethics and trust that this company was built upon.
          </p>
          <p style={{
            fontSize: 12, color: 'var(--color-text-secondary)',
            marginTop: 8, fontWeight: 500,
          }}>
            — The Kankariya Family
          </p>
        </div>
      </section>



      {/* ── §6 Team image ────────────────────────────────────────── */}
      <section ref={refTeam} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Card screws vents padding="none" hoverable={false} className="overflow-hidden order-2 lg:order-1 reveal">
          <img
            src={IMG.team}
            alt="Our team at work"
            className="img-reveal w-full object-cover"
            style={{ height: 360 }}
            /* TODO: replace with real team photograph */
          />
        </Card>
        <div className="flex flex-col gap-5 order-1 lg:order-2 reveal reveal-delay-1">
          <Badge variant="recessed">Our Culture</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-text-primary)', fontFamily: "'Poppins', sans-serif" }}>
            Built on{' '}
            <span style={{ color: '#0B5ED7' }}>Trust</span> &{' '}
            <span style={{ color: '#14B8A6' }}>Loyalty</span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Many of our team members have been with us for over a decade.
            This continuity translates directly into product consistency,
            institutional knowledge, and a culture of pride in every unit
            that leaves our facility.
          </p>
          <Button as={Link} to="/contact" variant="ghost" size="md">
            Work With Us <ArrowRight size={15} />
          </Button>
        </div>
      </section>

    </div>
  );
}
