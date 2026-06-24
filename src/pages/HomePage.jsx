import { Link } from 'react-router-dom';
import {
  ArrowRight, Phone, MessageCircle,
  Factory, Package, Truck, Award,
  Leaf, FlaskConical, Milk, Wheat,
  Droplets, HeartPulse, CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { Button, Card, IconContainer, Badge } from '../components/ui';
import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/* ─── Image URLs (replace with real assets later) ─────────────────── */
const IMG = {
  hero: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1779696819/ChatGPT_Image_May_25_2026_11_35_57_AM_tmk1wr.png',
  factory: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782219316/ChatGPT_Image_Jun_23_2026_06_23_03_PM_ngja5n.png',
  agro: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=500&h=380&fit=crop&q=80',
  edibleOil: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&h=380&fit=crop&q=80',
  chemical: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=500&h=380&fit=crop&q=80',
  milk: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&h=380&fit=crop&q=80',
  water: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&h=380&fit=crop&q=80',
  csr: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776953534/7c9c7b31-4e9f-4af7-b5a7-491b09c860ae.png',
};

/* ─── Data ─────────────────────────────────────────────────────────── */
const STATS = [
  { icon: Award, value: '32+', label: 'Years Experience', sub: 'Since 1994' },
  { icon: Factory, value: '85,000+', label: 'Pcs / Day', sub: 'Units capacity' },
  { icon: Package, value: '200+', label: 'Products', sub: 'Across categories' },
  { icon: Truck, value: 'Multi', label: 'State Distribution', sub: 'Pan-India reach' },
];

const PRODUCTS = [
  { name: 'Agro Chemical Bottles', img: IMG.agro, slug: 'agro-chemical' },
  { name: 'Edible Oil Containers', img: IMG.edibleOil, slug: 'edible-oil' },
  { name: 'Chemical Containers', img: IMG.chemical, slug: 'chemical' },
  { name: 'Milk Cans', img: IMG.milk, slug: 'milk-cans' },
  { name: 'Water Jars', img: IMG.water, slug: 'water-jars' },
];

const INDUSTRIES = [
  { icon: FlaskConical, label: 'Agrochemical' },
  { icon: Wheat, label: 'Food' },
  { icon: Droplets, label: 'Oil' },
  { icon: Factory, label: 'Chemical' },
  { icon: Milk, label: 'Dairy' },
  { icon: HeartPulse, label: 'Healthcare' },
];

const INFRA_POINTS = [
  '32 fully automated blow-moulding machines',
  '85,000+ pcs daily production capacity',
  'Own network of 32 delivery trucks',
  'ISO-compliant quality control lab',
];

/* ─── Section Header ───────────────────────────────────────────────── */
function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 mb-12">
      {badge && (
        <Badge variant="recessed" dot>
          {badge}
        </Badge>
      )}
      <h2
        className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base max-w-xl leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  /* ── Scroll-reveal refs ────────────────────────────────────── */
  const refHero = useScrollReveal();
  const refSnapshot = useScrollReveal();
  const refProducts = useScrollReveal();
  const refInfra = useScrollReveal();
  const refIndustries = useScrollReveal();
  const refCSR = useScrollReveal();
  const refCTA = useScrollReveal();

  // Hero carousel images (right column)
  const heroCarouselImages = [
    'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782221506/ChatGPT_Image_Jun_23_2026_07_01_02_PM_cvytfg.png',
    'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782219316/ChatGPT_Image_Jun_23_2026_06_23_03_PM_ngja5n.png',
    'https://res.cloudinary.com/dlh5prjhb/image/upload/v1779696819/ChatGPT_Image_May_25_2026_11_35_57_AM_tmk1wr.png',
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroCarouselImages.length);
    }, 3000); // 3s per slide
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col gap-24 md:gap-32">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §1  HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={refHero}>
        {/* Hero gradient background panel */}
        <div
          className="w-full rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0A2540 0%, #0B5ED7 58%, #14B8A6 100%)',
            boxShadow: '0 24px 64px rgba(10, 37, 64, 0.22)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-8 py-14 md:px-14 md:py-16">

            {/* Left — copy */}
            <div className="flex flex-col gap-6 reveal order-2 lg:order-1">
              {/* Logo */}
              <div className="flex items-center gap-5">
  <img
    src="https://res.cloudinary.com/dlh5prjhb/image/upload/v1779891101/8a0b8620-7e17-498d-9c44-1f996c262384.png"
    alt="Ganesh Plasto Pack Logo"
    className="h-24 w-auto rounded-lg object-contain"
  />

  <div>
    <h3 className="text-white text-4xl font-bold">
      GANESH PLASTO PACK
    </h3>

    <p className="text-white/70 text-xl mt-2">
      Best Jerry Can Manufacturer
    </p>
  </div>
</div>

              {/* Mobile — trusted badge above mobile image (mobile-only) */}
              <Badge
                variant="accent"
                dot
                className="block lg:hidden mt-4"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#ffffff',
                }}
              >
                Trusted Since 1994
              </Badge>

              {/* Mobile — hero image placed under logo/name and above paragraph */}
              <div className="w-full rounded-xl overflow-hidden reveal reveal-delay-1 relative mt-3 block lg:hidden" style={{ height: 'clamp(160px, 40vw, 280px)', boxShadow: '0 12px 36px rgba(0,0,0,0.18)' }}>
                <img
                  src={heroCarouselImages[heroIndex]}
                  alt="Industrial plastic manufacturing facility"
                  className="w-full h-full object-cover"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10,37,64,0.15) 0%, transparent 60%)',
                  }}
                />
              </div>
              {/* Desktop — trusted badge (desktop-only) */}
              <Badge
                variant="accent"
                dot
                className="hidden lg:block mt-4"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#ffffff',
                }}
              >
                Trusted Since 1994
              </Badge>

              <h1
                className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight"
                style={{ color: '#FFFFFF', fontFamily: "'Poppins', sans-serif" }}
              >
                Best{' '}
                <span style={{ color: '#22D3EE' }}>
                  HDPE Blowmoulding Jerry Can Supplier
                </span>
                {' '}in India
              </h1>

              <p
                className="text-base md:text-lg leading-relaxed max-w-lg"
                style={{ color: 'rgba(255,255,255,0.78)' }}
              >
                Ganesh Plasto Pack Barshi - Best HDPE Jerry Can Manufacturer & Supplier with{' '}
                <strong style={{ color: '#ffffff' }}>32+ years of expertise</strong>. Best jerry can manufacturer with large-scale production capacity.
                Serving high-quality plastic packaging solutions for industrial, chemical, and food sectors.
              </p>

              {/* CTA buttons — stack full-width on mobile */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
                <Button
                  as={Link}
                  to="/products"
                  variant="primary"
                  size="lg"
                  style={{
                    background: '#FFFFFF',
                    color: '#0B5ED7',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  }}
                >
                  View Products <ArrowRight size={16} />
                </Button>
                <Button
                  as={Link}
                  to="/contact"
                  variant="secondary"
                  size="lg"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(255,255,255,0.3)',
                    boxShadow: 'none',
                  }}
                >
                  Contact Us
                </Button>
              </div>

              {/* Trust strip with LED dot (hidden on mobile) */}
              <div className="hidden sm:flex items-center gap-3 pt-2">
                <span className="led-dot led-dot-sm" aria-hidden="true" style={{ background: '#22D3EE' }} />
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.15em]"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  ISO Certified · 85K+ Pcs/Day
                </span>
              </div>
            </div>

            {/* Right — hero image */}
            <div
              className="hidden lg:block overflow-hidden rounded-xl reveal reveal-delay-1 relative order-1 lg:order-2"
              style={{ height: 'clamp(200px, 60vw, 380px)', boxShadow: '0 16px 48px rgba(0,0,0,0.25)' }}
            >
              <img
                src={heroCarouselImages[heroIndex]}
                alt="Industrial plastic manufacturing facility"
                className="img-reveal w-full h-full object-cover"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              />
              {/* Subtle blue tint overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(10,37,64,0.25) 0%, transparent 60%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §2  COMPANY SNAPSHOT
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={refSnapshot}>
        <div className="w-full">
          <SectionHeader
            badge="Company Snapshot"
            title="Numbers That Speak"
            subtitle="Ganesh Plasto Pack Barshi - Best HDPE Jerry Can Manufacturer & Supplier with decades of manufacturing excellence reflected in every unit we produce."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map(({ icon: Icon, value, label, sub }, i) => (
              <Card key={label} screws vents padding="lg" className={`flex flex-col items-center text-center gap-4 reveal reveal-delay-${i + 1}`}>
                <IconContainer
                  size="lg"
                  variant="recessed"
                  icon={<Icon size={24} />}
                  color="#0B5ED7"
                />
                <div>
                  <p
                    className="text-3xl font-extrabold leading-none"
                    style={{ color: '#0B5ED7' }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-sm font-bold mt-1"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-mono text-[10px] mt-0.5 uppercase tracking-wider"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {sub}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §3  PRODUCT CATEGORY PREVIEW
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* <section ref={refProducts}>
        <div className="w-full">
        <SectionHeader
          badge="Our Products"
          title="Packaging for Every Industry"
          subtitle="From agrochemicals to dairy — engineered containers built to last."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
          {PRODUCTS.map(({ name, img, slug }) => (
            <Link
              key={slug}
              to={`/products/${slug}`}
              className="group block"
            >
              <Card screws={false} padding="none" className="overflow-hidden flex flex-col">
               
                <div className="overflow-hidden" style={{ height: 160 }}>
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  
                  />
                </div>

             
                <div
                  className="px-4 py-3 flex items-center justify-between"
                  style={{ borderTop: '1px solid rgba(181,201,219,0.4)' }}
                >
                  <span
                    className="text-[12px] font-semibold leading-tight"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {name}
                  </span>
                  <ChevronRight
                    size={14}
                    color="var(--color-accent)"
                    className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Button as={Link} to="/products" variant="secondary" size="lg">
            View All Products <ArrowRight size={16} />
          </Button>
        </div>
        </div>
      </section> */}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §4  INFRASTRUCTURE HIGHLIGHT
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={refInfra}>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — factory image */}
          <Card screws vents padding="none" hoverable={false} className="overflow-hidden order-2 lg:order-1">
            <img
              src={IMG.factory}
              alt="Ganesh Plasto Pack factory floor"
              className="img-reveal w-full object-cover"
              style={{ height: 'clamp(180px, 70vw, 480px)' }}
            /* TODO: replace with real factory photograph */
            />
          </Card>

          {/* Right — copy */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <Badge variant="recessed">Infrastructure</Badge>

            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Built for{' '}
              <span style={{ color: 'var(--color-accent)' }}>Scale</span>,
              <br />Engineered for{' '}
              <span style={{ color: 'var(--color-accent)' }}>Precision</span>
            </h2>

            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Our modern facility in Barshi, Maharashtra is equipped with advanced blow-moulding machines for manufacturing high-quality <strong> Jerry Cans</strong> and <strong>HDPE Cans</strong>.
              We have a dedicated quality control lab and our own transport network, helping us ensure that every order is delivered safely and on time.
            </p>

            {/* Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              {INFRA_POINTS.map((point, idx) => (
                <div
                  key={point}
                  className="flex items-start gap-3 p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(11, 94, 215, 0.08) 0%, rgba(34, 211, 238, 0.04) 100%)',
                    borderColor: 'var(--color-accent)',
                    borderOpacity: 0.3
                  }}
                >
                  <IconContainer
                    size="sm"
                    variant="recessed"
                    icon={<CheckCircle2 size={18} />}
                    color="var(--color-accent)"
                    className="mt-0.5 shrink-0"
                  />
                  <span
                    className="text-sm font-semibold leading-relaxed"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <Button as={Link} to="/infrastructure" variant="ghost" size="md">
              Explore Our Infrastructure <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §5  INDUSTRIES SERVED
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={refIndustries}>
        <div className="w-full">
          <SectionHeader
            badge="Industries"
            title="Sectors We Serve"
            subtitle="Versatile packaging solutions tailored to the precise demands of each industry."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {INDUSTRIES.map(({ icon: Icon, label }) => (
              <Card
                key={label}
                screws={false}
                padding="md"
                className="flex flex-col items-center gap-4 text-center cursor-default"
              >
                <IconContainer
                  size="lg"
                  variant="recessed"
                  icon={<Icon size={22} />}
                  color="var(--color-accent)"
                  glow
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {label}
                </span>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button as={Link} to="/industries" variant="secondary" size="md">
              All Industries <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §6  CSR PREVIEW
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={refCSR}>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            <Badge variant="recessed" dot>CSR</Badge>

            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Giving Back to the{' '}
              <span style={{ color: 'var(--color-accent)' }}>Community</span>
            </h2>

            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Beyond business, we are deeply committed to our community.
              From our <strong>daily cow-feeding initiative</strong> to
              building a workforce anchored in trust and fair practices,
              our responsibility extends well beyond the factory floor.
            </p>

            {/* CSR highlights */}
            <div className="flex flex-col gap-3">
              {[
                { icon: Leaf, text: 'Daily cow-feeding programme at local goshalas' },
                { icon: Award, text: 'Long-term employee welfare and skill development' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <IconContainer
                    size="sm"
                    variant="recessed"
                    icon={<Icon size={14} />}
                    color="var(--color-accent)"
                    className="mt-0.5 shrink-0"
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <Button as={Link} to="/csr" variant="ghost" size="md">
              Learn More <ArrowRight size={15} />
            </Button>
          </div>

          {/* Right — CSR image */}
          <Card screws vents={false} padding="none" hoverable={false} className="overflow-hidden">
            <img
              src={IMG.csr}
              alt="Community service initiative"
              className="w-full object-cover"
              style={{ height: 'clamp(180px, 70vw, 450px)' }}
            /* TODO: replace with actual CSR photograph */
            />
          </Card>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §7  FINAL CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={refCTA}>
        <div className="w-full">
          {/* CTA card — hero gradient background */}
          <div
            className="rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8"
            style={{
              background: 'linear-gradient(135deg, #0A2540 0%, #0B5ED7 55%, #14B8A6 100%)',
              padding: '3rem 3.5rem',
              boxShadow: '0 24px 56px rgba(10, 37, 64, 0.22)',
            }}
          >
            {/* Text */}
            <div className="flex flex-col gap-3 text-center md:text-left">
              <Badge
                variant="accent"
                dot
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#ffffff',
                }}
              >
                Ready to Order?
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
                style={{ color: '#FFFFFF', fontFamily: "'Poppins', sans-serif" }}
              >
                Let's Talk{' '}
                <span style={{ color: '#22D3EE' }}>Packaging</span>
              </h2>
              <p
                className="text-sm md:text-base"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                Reach out for bulk orders, custom requirements, or a free quote.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button
                as="a"
                href="tel:9561618161"
                variant="primary"
                size="lg"
                style={{
                  background: '#FFFFFF',
                  color: '#0B5ED7',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                }}
              >
                <Phone size={16} /> Call Now
              </Button>
              <Button
                as="a"
                href="https://wa.me/919561618161"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  color: '#FFFFFF',
                  border: '1.5px solid rgba(255,255,255,0.3)',
                  boxShadow: 'none',
                }}
              >
                <MessageCircle size={16} /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
