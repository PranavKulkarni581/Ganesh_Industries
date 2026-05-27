import { Link } from 'react-router-dom';
import {
  FlaskConical, Wheat, Droplets,
  Factory, Milk, HeartPulse, Droplet,
  ShoppingBag, PawPrint, Waves, Package,
  ArrowRight, CheckCircle2,
} from 'lucide-react';
import { Card, Button, Badge, IconContainer } from '../components/ui';
import useScrollReveal from '../hooks/useScrollReveal';
import industries from '../data/industriesData';

/* ── Icon map — match industry name to lucide icon ────────────────── */
const ICON_MAP = {
  'Agrochemical Industry': FlaskConical,
  'Chemical Industry': Factory,
  'Food Industry': Wheat,
  'Dairy Industry': Milk,
  'Oil & Lubricants': Droplets,
  'Water Industry': Waves,
  'Household Industry': ShoppingBag,
  'Animal Healthcare': PawPrint,
  'Pharmaceutical': HeartPulse,
  'General Market': Package,
}; 

/* ── Image map — match industry name to photo ─────────────────────── */
const IMAGE_MAP = {
  'Agrochemical Industry': 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956471/732eeb7d-46ef-4929-959e-86fcf28aebf2.png',
  'Chemical Industry': 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956534/6b672813-8e53-4f01-83d5-e1368d145612.png',
  'Food Industry': 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956560/cdf25316-20d3-4740-8263-83cf83357b08.png',
  'Dairy Industry': 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956583/a42406ed-ee49-4e44-bd80-b156eb3cc718.png',
  'Oil & Lubricants': 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956606/9f7f29de-cce5-4b68-913e-ad704c5fe3ca.png',
  'Water Industry': 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956628/29021c6e-531b-4384-8f97-9a4839439f15.png',
  'Household Industry': 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956653/445a30f1-4424-4c22-81bd-c8e2d96fb05d.png',
  'Animal Healthcare': 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956675/48a8b479-c959-4b45-918d-5026eca06828.png',
  'Pharmaceutical': 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777957189/8e204199-fda4-4adc-9928-a6771ca8b1dd.png',
  'General Market': 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777957392/3d53bcf4-9af3-4fb3-a9f1-cecc903ef88d.png',
}; 

/* ── Description map ──────────────────────────────────────────────── */
const DESC_MAP = {
  'Agrochemical Industry': 'UN-approved HDPE/F-style bottles for pesticides, herbicides, fungicides, and growth regulators. Chemical-resistant, tamper-evident.',
  'Chemical Industry': 'Industrial HDPE and PP containers for acids, solvents, lubricants, and specialty chemicals. UN/DOT-certified options available.',
  'Food Industry': 'BIS-certified food-grade containers for edible oils, sauces, syrups, and processed foods. Safe, sealable, and shelf-ready.',
  'Dairy Industry': 'FDA-compliant food-grade HDPE milk cans for co-operatives and private dairies. Airtight lids, ergonomic handles, easy-pour design.',
  'Oil & Lubricants': 'HDPE containers for engine oils, coolants, gear oils, and lubricants. Oil-compatible and spill-proof.',
  'Water Industry': 'BPA-free PET and HDPE water jars for packaged drinking water, dispensers, and home storage. UV-resistant options.',
  'Household Industry': 'PET and HDPE bottles for liquid detergents, fabric softeners, floor cleaners, and household disinfectants.',
  'Animal Healthcare': 'HDPE and PP containers for veterinary medicines, animal feed supplements, and livestock care products.',
  'Pharmaceutical': 'GMP-compliant HDPE and PP containers for pharmaceutical powders, syrups, and caps. Precision dispensing closures.',
  'General Market': 'Versatile HDPE containers for general retail and market distribution. Standard shapes for easy branding and labelling.',
};

/* ── Products list map ─────────────────────────────────────────────── */
const PRODUCTS_MAP = {
  'Agrochemical Industry': ['Emida Bottles', 'Handle Bottles', 'Barni Containers', 'Mauzer Cans'],
  'Chemical Industry': ['Round Carboys 5L–20L', 'Wide Mouth Jars', 'Industrial Drums 50L+'],
  'Food Industry': ['Edible Oil Bottles', 'Ketchup Squeeze Bottles', 'Food Syrup Jars'],
  'Dairy Industry': ['Milk Cans 5L–20L', 'Ghagar Containers', 'Curd Packaging Jars'],
  'Oil & Lubricants': ['Engine Oil Bottles 1L–4L', 'Coolant Bottles', 'Jerry Cans 5L–10L'],
  'Water Industry': ['PET Water Jars 1L–2L', 'HDPE Water Jars 20L–25L', 'Storage Tanks 50L'],
  'Household Industry': ['Detergent Bottles', 'Trigger Spray Bottles', 'Floor Cleaner Bottles'],
  'Animal Healthcare': ['Veterinary Bottles', 'Feed Supplement Jars', 'Cattle Drench Bottles'],
  'Pharmaceutical': ['Powder Jars', 'Spice Containers', 'PP/HDPE Caps & Closures'],
  'General Market': ['Round Cans', 'Multipurpose Jars', 'Carry Handle Containers'],
};

/* ═══════════════════════════════════════════════════════════════════ */
export default function IndustriesPage() {
  const refHeader = useScrollReveal();
  const refCTA = useScrollReveal();

  /* Build enriched list from industriesData + maps */
  const INDUSTRIES = industries.map((ind) => ({
    icon: ICON_MAP[ind.name] || Package,
    name: ind.name,
    desc: DESC_MAP[ind.name] || '',
    products: PRODUCTS_MAP[ind.name] || [],
    img: IMAGE_MAP[ind.name] || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&h=420&fit=crop&q=80',
    primaryCategory: ind.categories[0],   // first category for navigation
  }));

  return (
    <div className="flex flex-col gap-16">

      {/* ── Page header ─────────────────────────────────────────── */}
      <div ref={refHeader} className="flex flex-col gap-4 reveal">
        <Badge variant="recessed">Industries</Badge>
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          style={{ color: 'var(--color-text-primary)', fontFamily: "'Poppins', sans-serif" }}
        >
          Packaging for{' '}
          <span style={{ color: '#0B5ED7' }}>Every Sector</span>
        </h1>
        <p
          className="text-base leading-relaxed max-w-2xl"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Ganesh Plasto Pack - Best Jerry Can Manufacturer and HDPE Jerry Can Supplier serving agrochemical, 
          chemical, food, dairy, pharma, and all industries. Our versatile range of plastic
          containers is engineered to meet the exact storage, safety, and
          compliance requirements of each sector we serve.
        </p>
      </div>

      {/* ── Industry cards ──────────────────────────────────────── */}
      <div className="flex flex-col gap-10">
        {INDUSTRIES.map((industry, i) => {
          const isEven = i % 2 === 0;
          const Icon = industry.icon;
          return (
            <IndustrySection key={industry.name} industry={industry} isEven={isEven} Icon={Icon} index={i} />
          );
        })}
      </div>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section ref={refCTA}>
        <div
          className="rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 reveal"
          style={{
            background: 'linear-gradient(135deg, #0A2540 0%, #0B5ED7 55%, #14B8A6 100%)',
            padding: '2.5rem 3rem',
            boxShadow: '0 20px 48px rgba(10,37,64,0.2)',
          }}
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-extrabold" style={{ color: '#FFFFFF', fontFamily: "'Poppins', sans-serif" }}>
              Don't see your industry?
            </h2>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              We offer custom packaging solutions for unique requirements. Contact us to discuss.
            </p>
          </div>
          <Button as={Link} to="/contact" variant="primary" size="lg"
            style={{ background: '#FFFFFF', color: '#0B5ED7', boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
          >
            Contact Us <ArrowRight size={15} />
          </Button>
        </div>
      </section>

    </div>
  );
}

function IndustrySection({ industry, isEven, Icon, index }) {
  const ref = useScrollReveal();
  return (
    <section
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center reveal`}
    >
      {/* Image */}
      <Card
        screws vents={!isEven} padding="none" hoverable={false}
        className={`overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <img
          src={industry.img}
          alt={industry.name}
          className="img-reveal w-full object-cover"
          style={{ height: 280 }}
        />
      </Card>

      {/* Text */}
      <div className={`flex flex-col gap-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-3">
          <IconContainer
            size="lg" variant="recessed"
            icon={<Icon size={22} />}
            color="#0B5ED7"
          />
          <h2
            className="text-2xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {industry.name}
          </h2>
        </div>

        <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {industry.desc}
        </p>

        <div className="flex flex-col gap-2">
          <span
            className="font-mono text-[10px] uppercase tracking-wider"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Products We Supply
          </span>
          <ul className="flex flex-col gap-2">
            {industry.products.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <CheckCircle2 size={13} color="#0B5ED7" />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Navigate to the first mapped product category */}
          <Button as={Link} to={`/products/${industry.primaryCategory}`} variant="ghost" size="sm">
            View Related Products <ArrowRight size={13} />
          </Button>
        </div>
      </div>
    </section>
  );
}
