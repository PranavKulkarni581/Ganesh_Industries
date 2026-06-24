/**
 * GANESH PLASTO PACK — PRODUCT DATA (v2)
 * ══════════════════════════════════════
 * 14 categories with full product data.
 * HOW TO EDIT:
 *   • Add a new category → push an object to CATEGORIES.
 *   • Add a product      → push to the category's `products` array.
 *   • Swap images        → replace the `image` URL with a real asset path.
 */

/* ── Shared placeholder images ──────────────────────────────────────── */
const PH = {
  agro: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777955689/0a2d6da7-fa14-454f-9079-d27da2a40403.png',
  bottle: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956324/8a475956-fd7e-4ccf-b906-dce4db464f61.png',
  chem: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777955734/c382cf5e-e248-4ba8-8d1e-9f5d2c174852.png',
  oil: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777955805/a3b50b3e-fdfc-443f-93bd-d87991bd0a3f.png',
  food: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777955829/3dbc2175-7cc7-405d-9477-894cfcd1ed46.png',
  milk: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956006/01685d89-466a-4593-beea-707a663305ee.png',
  water: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956190/ef06854c-c47b-4e19-9510-39ec4240af6d.png',
  clean: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956324/8a475956-fd7e-4ccf-b906-dce4db464f61.png',
  powder: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956218/53812545-6465-4615-ae67-6dc72991f6de.png',
  engine: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956110/9e72b1e4-1bf1-4e87-aa0c-be68aeada563.png',
  syrup: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956165/86cad3a7-51ef-4975-8134-9ae259278b68.png',
  jar: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956190/ef06854c-c47b-4e19-9510-39ec4240af6d.png',
  cap: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956296/8960f73d-e422-403e-b599-503a8b01ef11.png',
  bulk: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956388/7c1e2c87-4563-40c8-928f-15d191664774.png',
  animal: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777956049/4ab8e39b-c89d-4bb1-abad-f9b4b02d1bf5.png',
  ketchup: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777955829/3dbc2175-7cc7-405d-9477-894cfcd1ed46.png',
  market: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1777955977/28a8379d-60a3-4749-99c0-2da2a689830a.png',
};

/* ══════════════════════════════════════════════════════════════════════
   CATEGORIES
   ══════════════════════════════════════════════════════════════════════ */
export const CATEGORIES = [

  /* ── 1. Fertilizer & Pesticide Bottles ──────────────────────── */
  {
    id: 'fertilizer-pesticide',
    name: 'Fertilizer & Pesticide Bottles',
    description: 'High-quality HDPE bottles for agrochemical storage. Chemical-resistant, leak-proof, and available in multiple capacities.',
    image: PH.agro,
    products: [
      {
        id: 'emida',
        name: 'Emida Bottle',
        sizes: ['100ml', '250ml', '500ml', '1L'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279504/Emida_xrfwpt.jpg',
        description: 'HDPE bottle designed for pesticide and fertilizer storage with high chemical resistance.',
        applications: ['Pesticides', 'Fertilizers', 'Agrochemicals'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Chemical Resistant', 'Durable'],
        type: 'HDPE',
      },
      {
        id: 'handle-bottle-fp',
        name: 'Handle Bottle',
        sizes: ['250ml', '500ml', '1L'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279508/handle_bottle_xcwhow.jpg',
        description: 'Ergonomic handle bottle for easy handling and pouring of agrochemical liquids.',
        applications: ['Pesticides', 'Liquid Fertilizers'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Ergonomic', 'Easy Grip'],
        type: 'HDPE',
      },
      {
        id: 'square-bottle',
        name: 'Square Bottle',
        sizes: ['50ml', '100ml', '250ml', '500ml', '1L'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279512/square_bottles_awrnkk.jpg',
        description: 'Space-efficient square bottles ideal for agrochemical storage and transport.',
        applications: ['Agrochemicals', 'Retail Packaging'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Stackable', 'Space Saving'],
        type: 'HDPE',
      },
      {
        id: 'sigenta',
        name: 'Sigenta Bottle',
        sizes: ['250ml', '500ml', '1L'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839254/57_ternfr.jpg',
        description: 'Specialized bottle for agrochemical formulations with secure closure.',
        applications: ['Pesticides', 'Herbicides'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Secure Cap', 'Precision Design'],
        type: 'HDPE',
      },
      {
        id: 'plain-bm',
        name: 'Plain BM Bottle',
        sizes: ['100ml', '175ml', '250ml', '350ml', '500ml', '1L', '1250ml'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839246/76_eodhqj.jpg',
        description: 'Standard blow-moulded bottle for general agrochemical use.',
        applications: ['Fertilizers', 'Pesticides', 'Liquid Storage'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Versatile', 'Cost Effective'],
        type: 'HDPE', 
      },
      {
        id: 'glypho',
        name: 'Glypho Bottle',
        sizes: ['500ml', '1L', '5L'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279505/glypho_bottles_dnlu0h.jpg',
        description: 'Designed for herbicide and glyphosate packaging with chemical compatibility.',
        applications: ['Herbicides', 'Weedicides'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Herbicide Grade', 'Chemical Safe'],
        type: 'HDPE',
      },
      {
        id: 'spiral',
        name: 'Spiral Bottle',
        sizes: ['1L'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839263/37_h1ixyg.jpg',
        description: 'Spiral grip design bottle for improved handling in field conditions.',
        applications: ['Pesticides', 'Field Use'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Grip Design', 'Durable'],
        type: 'HDPE',
      },
      { 
        id: 'oval',
        name: 'Oval Bottle',
        sizes: ['500ml', '1L', '2L', '3L', '5L', '6L'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839258/48_uymlks.jpg',
        description: 'Ergonomic oval bottles for easy pouring and storage.',
        applications: ['Agrochemicals', 'Liquid Storage'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Ergonomic', 'Large Capacity'],
        type: 'HDPE',
      },
      {
        id: 'handle-barni',
        name: 'Handle Barni',
        sizes: ['500gm', '1kg', '2kg', '5kg', '10kg', '25kg'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279507/Handle_Barni_xw7zje.jpg',
        description: 'Heavy-duty barni with handle for powder and granular storage.',
        applications: ['Fertilizer Storage', 'Powders'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Heavy Duty', 'Wide Mouth'],
        type: 'HDPE',
      },
      {
        id: 'wide-mouth-barni',
        name: 'Wide Mouth Barni',
        sizes: ['250gm', '500gm', '1kg'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279513/Wde_mouth_barni_fbilgs.jpg',
        description: 'Wide-mouth containers for easy filling and dispensing of powders.',
        applications: ['Powder Storage', 'Granules'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Wide Mouth', 'Easy Fill'],
        type: 'HDPE',
      },
      {
        id: 'meera-bottle',
        name: 'Meera Bottle',
        sizes: ['1L'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279509/Meera_bottle_aak59e.jpg',
        description: 'Standard 1L bottle widely used in agrochemical applications.',
        applications: ['Agrochemicals', 'Liquid Storage'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Standard Design'],
        type: 'HDPE',
      },
      {
        id: 'square-chemical-can',
        name: 'Square Chemical Can',
        sizes: ['10L', '20L'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839248/72_wyhfk5.jpg',
        description: 'Industrial-grade square cans for chemical storage and transport.',
        applications: ['Chemicals', 'Industrial Liquids'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Industrial Grade', 'Durable'],
        type: 'HDPE',
      },
      {
  id: 'barni',
  name: 'Barni',
  sizes: [],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279504/Barni_lhurua.jpg',
  description: 'HDPE storage container.',
  applications: ['Storage'],
  material: 'HDPE',
  category: 'Fertilizer & Pesticide Bottles',
  tags: ['HDPE'],
  type: 'HDPE',
},
{
  id: 'barni-2kg',
  name: '2kg Barni',
  sizes: ['2kg'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279498/2kg_Barni_nlqkf9.jpg',
  description: 'HDPE storage container.',
  applications: ['Storage'],
  material: 'HDPE',
  category: 'Fertilizer & Pesticide Bottles',
  tags: ['HDPE'],
  type: 'HDPE',
},
{
  id: 'bucket-5kg',
  name: '5kg Bucket',
  sizes: ['5kg'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279503/5kg_Bucket_buypqs.jpg',
  description: 'HDPE bucket.',
  applications: ['Storage'],
  material: 'HDPE',
  category: 'Fertilizer & Pesticide Bottles',
  tags: ['HDPE'],
  type: 'HDPE',
},
{
  id: 'bucket-10kg',
  name: '10kg Bucket',
  sizes: ['10kg'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279489/10_kg_Bucket_mqedeq.jpg',
  description: 'HDPE bucket.',
  applications: ['Storage'],
  material: 'HDPE',
  category: 'Fertilizer & Pesticide Bottles',
  tags: ['HDPE'],
  type: 'HDPE',
},
{
  id: 'cross-handle-20l',
  name: '20 Ltr Cross Handle Container',
  sizes: ['20L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279492/20_ltrs_Cross_Handle_it3uq0.jpg',
  description: 'HDPE container.',
  applications: ['Chemical Storage'],
  material: 'HDPE',
  category: 'Fertilizer & Pesticide Bottles',
  tags: ['HDPE'],
  type: 'HDPE',
},
{
  id: 'mauzer-20l',
  name: '20 Ltr Mauzer Container',
  sizes: ['20L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279495/20_ltrs_mauzer_kdl00a.jpg',
  description: 'HDPE container.',
  applications: ['Bulk Storage'],
  material: 'HDPE',
  category: 'Fertilizer & Pesticide Bottles',
  tags: ['HDPE'],
  type: 'HDPE',
},
{
  id: 'mauzer-25l',
  name: '25 Ltr Mauzer Container',
  sizes: ['25L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279497/25_ltr_mauzer_ywdqj8.jpg',
  description: 'HDPE container.',
  applications: ['Bulk Storage'],
  material: 'HDPE',
  category: 'Fertilizer & Pesticide Bottles',
  tags: ['HDPE'],
  type: 'HDPE',
},
{
  id: 'blue-can-35l',
  name: '35 Ltr Blue Can',
  sizes: ['35L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279498/35_ltrs_Blue_Cans_clhsxm.jpg',
  description: 'HDPE industrial can.',
  applications: ['Industrial Storage'],
  material: 'HDPE',
  category: 'Fertilizer & Pesticide Bottles',
  tags: ['HDPE'],
  type: 'HDPE',
},
{
  id: 'yellow-can-35l',
  name: '35 Ltr Yellow Can',
  sizes: ['35L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279501/35_ltrs_yellow_can_chhaun.jpg',
  description: 'HDPE industrial can.',
  applications: ['Industrial Storage'],
  material: 'HDPE',
  category: 'Fertilizer & Pesticide Bottles',
  tags: ['HDPE'],
  type: 'HDPE',
},
    ]
  },

  /* ── 2. Chemical Containers ──────────────────────────────────── */
  {
    id: 'chemical-containers',
    name: 'Chemical Containers',
    description: 'Industrial-grade HDPE and PP containers for acids, solvents, lubricants, and specialty chemicals. Leak-proof closures and UN certifications available.',
    image: PH.chem,
    products: [
      {
        id: 'radiant-shape',
        name: 'Radiant Shape Container',
        sizes: ['1L', '5L'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279295/5_ltr_radiant_white_2_laq9by.jpg',
        description: 'Durable HDPE containers designed for safe storage and transport of acid-based chemicals.',
        applications: ['Acid Storage', 'Industrial Chemicals'],
        material: 'HDPE',
        category: 'Chemical Containers',
        tags: ['Chemical Resistant', 'Leak Proof'],
        type: 'HDPE',
      },
      {
        id: 'mahaveer-shape',
        name: 'Mahaveer Shape Container',
        sizes: ['400ml', '500ml', '900ml', '1L', '4L', '5L'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839276/9_e4ind1.jpg',
        description: 'Versatile HDPE containers suitable for various chemical storage needs with strong build quality.',
        applications: ['Acids', 'Industrial Liquids', 'Chemical Packaging'],
        material: 'HDPE',
        category: 'Chemical Containers',
        tags: ['Durable', 'Multi Size'],
        type: 'HDPE',
      }, 
      {
        id: 'phosphoric-acid',
        name: 'Phosphoric Acid Container',
        sizes: ['5L (Oval)'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839248/71_ndcq61.jpg',
        description: 'Specialized oval-shaped container designed for phosphoric acid storage with high chemical resistance.',
        applications: ['Phosphoric Acid', 'Industrial Chemicals'],
        material: 'HDPE',
        category: 'Chemical Containers',
        tags: ['Acid Resistant', 'Oval Shape'],
        type: 'HDPE',
      },
      {
        id: 'sulphuric-acid',
        name: 'Sulphuric Acid Container (Cross Handle)',
        sizes: ['20L'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839278/4_izp4dm.jpg',
        description: 'Heavy-duty 20L cross-handle container (Taiwan shape) for safe sulphuric acid storage and transport.',
        applications: ['Sulphuric Acid', 'Industrial Storage', 'Bulk Chemicals'],
        material: 'HDPE',
        category: 'Chemical Containers',
        tags: ['Heavy Duty', 'Cross Handle', 'Industrial Grade'],
        type: 'HDPE',
      },
      {
  id: 'milky-1ltr',
  name: '1 Ltr Milky Container',
  sizes: ['1L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279295/1_ltr_radiant_milky_2_dzulbh.jpg',
  description: 'HDPE milky container for chemical storage.',
  applications: ['Chemical Storage'],
  material: 'HDPE',
  category: 'Chemical Containers',
  tags: ['Milky Container'],
  type: 'HDPE',
},
{
  id: 'milky-4ltr',
  name: '4 Ltr Milky Container',
  sizes: ['4L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279297/4_ltrs_milky_igtsm5.jpg',
  description: '4L HDPE milky container.',
  applications: ['Chemical Storage'],
  material: 'HDPE',
  category: 'Chemical Containers',
  tags: ['Milky Container'],
  type: 'HDPE',
},
{
  id: 'radiant-milky-1ltr',
  name: '1 Ltr Radiant Milky Container',
  sizes: ['1L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279291/1_ltr_Milky_iywwle.jpg',
  description: 'Radiant style milky chemical container.',
  applications: ['Chemical Storage'],
  material: 'HDPE',
  category: 'Chemical Containers',
  tags: ['Radiant'],
  type: 'HDPE',
},
{
  id: 'radiant-milky-5ltr',
  name: '5 Ltr Radiant Milky Container',
  sizes: ['5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279295/5_ltr_radiant_white_2_laq9by.jpg',
  description: '5L radiant milky HDPE container.',
  applications: ['Chemical Storage'],
  material: 'HDPE',
  category: 'Chemical Containers',
  tags: ['Radiant'],
  type: 'HDPE',
},
{
  id: 'radiant-white-5ltr',
  name: '5 Ltr Radiant White Container',
  sizes: ['5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279295/5_ltr_radiant_white_2_laq9by.jpg',
  description: '5L radiant white chemical container.',
  applications: ['Chemical Storage'],
  material: 'HDPE',
  category: 'Chemical Containers',
  tags: ['Radiant White'],
  type: 'HDPE',
},
{
  id: 'container-35ltr',
  name: '35 Ltr Container',
  sizes: ['35L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279299/35_ltrs_mpficq.jpg',
  description: 'Large capacity chemical container.',
  applications: ['Bulk Chemical Storage'],
  material: 'HDPE',
  category: 'Chemical Containers',
  tags: ['Bulk Storage'],
  type: 'HDPE',
},
{
  id: 'round-white-series',
  name: 'Round White Container Series',
  sizes: ['1L', '2L', '5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279296/Round_white_1ltr_2_ltr_5ltr_q8v90t.jpg',
  description: 'Round white HDPE chemical containers.',
  applications: ['Chemical Packaging'],
  material: 'HDPE',
  category: 'Chemical Containers',
  tags: ['Round Shape'],
  type: 'HDPE',
},
{
  id: 'half-1ltr-series',
  name: 'Half Ltr & 1 Ltr Container',
  sizes: ['500ml', '1L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279297/half_ltr_1ltr_gbjuhg.jpg',
  description: 'Small capacity chemical containers.',
  applications: ['Chemical Packaging'],
  material: 'HDPE',
  category: 'Chemical Containers',
  tags: ['Small Size'],
  type: 'HDPE',
},
    ],
  },

  /* ── 3. Edible Oil Containers ─────────────────────────────────── */
  {
    id: 'edible-oil',
    name: 'Edible Oil Containers',
    description: 'Food-safe PET and HDPE containers for refined oils, ghee, and vanaspati. BIS-certified, UV-stabilised.',
    image: PH.oil,
    products: [
      {
        id: 'adani-shape',
        name: 'Adani Shape Container',
        sizes: [], // ⚠️ Add sizes
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839214/adani_ivory_fd3nkf.jpg',
        description: 'Premium edible oil container with strong build and market-standard design.',
        applications: ['Edible Oil', 'Cooking Oil'],
        material: 'HDPE',
        category: 'Edible Oil Containers',
        tags: ['Food Grade', 'Durable'],
        type: 'HDPE',
      },
      {
        id: 'gemini',
        name: 'Gemini Container',
        sizes: [], // ⚠️ Add sizes
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839217/gemini_yellow_mxftpj.jpg',
        description: 'Popular edible oil packaging container suitable for retail and bulk use.',
        applications: ['Cooking Oil', 'Refined Oil'],
        material: 'HDPE',
        category: 'Edible Oil Containers',
        tags: ['Retail Use', 'Strong Build'],
        type: 'HDPE',
      },
      {
        id: 'malharpet',
        name: 'Malharpet Container',
        sizes: [], // ⚠️ Add sizes
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839214/malharpet_pista_fy8akb.jpg',
        description: 'High-quality oil container used for commercial edible oil storage.',
        applications: ['Bulk Oil Storage', 'Retail Packaging'],
        material: 'HDPE',
        category: 'Edible Oil Containers',
        tags: ['Bulk Use', 'Durable'],
        type: 'HDPE',
      },
      {
        id: 'samarth',
        name: 'Samarth Container',
        sizes: [], // ⚠️ Add sizes
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839214/samarth_yellow_ez9hhe.jpg',
        description: 'Robust container designed for edible oil packaging with easy handling.',
        applications: ['Cooking Oil', 'Edible Oil'],
        material: 'HDPE',
        category: 'Edible Oil Containers',
        tags: ['Easy Handling', 'Food Grade'],
        type: 'HDPE',
      },
      {
        id: 'oval-oil',
        name: 'Oval Oil Container',
        sizes: [], // ⚠️ Add sizes
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839215/samarth_green_d2nkhq.jpg',
        description: 'Ergonomic oval-shaped container for efficient storage and pouring of edible oil.',
        applications: ['Edible Oil', 'Liquid Storage'],
        material: 'HDPE',
        category: 'Edible Oil Containers',
        tags: ['Ergonomic', 'Space Efficient'],
        type: 'HDPE',
      },
      {
        id: 'oil-can-15kg',
        name: '15kg Oil Can',
        sizes: ['15kg'],
        image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839217/15_kg_yellow_vptoza.jpg',
        description: 'Heavy-duty oil can for bulk edible oil storage and transport.',
        applications: ['Bulk Oil Storage', 'Industrial Supply'],
        material: 'HDPE',
        category: 'Edible Oil Containers',
        tags: ['Heavy Duty', 'Bulk Storage'],
        type: 'HDPE',
      },
      {
  id: 'adani-yellow',
  name: 'Adani Yellow Container',
  sizes: ['1L', '2L', '5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279276/adani_yellow_zs12vj.jpg',
  description: 'Food grade HDPE edible oil container.',
  applications: ['Edible Oil'],
  material: 'HDPE',
  category: 'Edible Oil Containers',
  tags: ['Food Grade'],
  type: 'HDPE',
},
{
  id: 'adani-ivory-yellow',
  name: 'Adani Ivory & Yellow Container',
  sizes: ['1L', '2L', '5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279276/adani_yellow_zs12vj.jpg',
  description: 'Food grade HDPE edible oil container.',
  applications: ['Edible Oil'],
  material: 'HDPE',
  category: 'Edible Oil Containers',
  tags: ['Food Grade'],
  type: 'HDPE',
},
{
  id: 'gemini-ivory',
  name: 'Gemini Ivory Container',
  sizes: ['1L', '2L', '5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279283/gemini_ivory_bgt5yu.jpg',
  description: 'Food grade HDPE edible oil container.',
  applications: ['Edible Oil'],
  material: 'HDPE',
  category: 'Edible Oil Containers',
  tags: ['Food Grade'],
  type: 'HDPE',
},
{
  id: 'gemini-milky',
  name: 'Gemini Milky Container',
  sizes: ['1L', '2L', '5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279283/gemini_milky_mtmzsr.jpg',
  description: 'Food grade HDPE edible oil container.',
  applications: ['Edible Oil'],
  material: 'HDPE',
  category: 'Edible Oil Containers',
  tags: ['Food Grade'],
  type: 'HDPE',
},
{
  id: 'gemini-multi',
  name: 'Gemini White Ivory Yellow Container',
  sizes: ['1L', '2L', '5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279274/gemini_white_ivory_yellow_s8bslq.jpg',
  description: 'Food grade HDPE edible oil container.',
  applications: ['Edible Oil'],
  material: 'HDPE',
  category: 'Edible Oil Containers',
  tags: ['Food Grade'],
  type: 'HDPE',
},
{
  id: 'malharpet-yellow',
  name: 'Malharpet Yellow Container',
  sizes: ['1L', '2L', '5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279273/malharpeth_yellow_rtecao.jpg',
  description: 'Food grade edible oil container.',
  applications: ['Edible Oil'],
  material: 'HDPE',
  category: 'Edible Oil Containers',
  tags: ['Food Grade'],
  type: 'HDPE',
},
{
  id: 'malharpet-green-yellow',
  name: 'Malharpet Green Yellow Container',
  sizes: ['1L', '2L', '5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279272/Malharpeth_green_yellow_hvxebo.jpg',
  description: 'Food grade edible oil container.',
  applications: ['Edible Oil'],
  material: 'HDPE',
  category: 'Edible Oil Containers',
  tags: ['Food Grade'],
  type: 'HDPE',
},
{
  id: 'round-ivory',
  name: 'Round Ivory Container',
  sizes: ['1L', '2L', '5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279278/round_ivory_allxiw.jpg',
  description: 'Round edible oil container.',
  applications: ['Edible Oil'],
  material: 'HDPE',
  category: 'Edible Oil Containers',
  tags: ['Round Shape'],
  type: 'HDPE',
},
{
  id: 'round-milky',
  name: 'Round Milky Container',
  sizes: ['1L', '2L', '5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279277/round_milky_k5p5dt.jpg',
  description: 'Round edible oil container.',
  applications: ['Edible Oil'],
  material: 'HDPE',
  category: 'Edible Oil Containers',
  tags: ['Round Shape'],
  type: 'HDPE',
},
{
  id: 'round-yellow',
  name: 'Round Yellow Container',
  sizes: ['1L', '2L', '5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279277/round_yellow_nrxh5t.jpg',
  description: 'Round edible oil container.',
  applications: ['Edible Oil'],
  material: 'HDPE',
  category: 'Edible Oil Containers',
  tags: ['Round Shape'],
  type: 'HDPE',
},
{
  id: 'round-multi',
  name: 'Round White Ivory Yellow Container',
  sizes: ['1L', '2L', '5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279270/round_white_ivory_yellow_lknzpg.jpg',
  description: 'Round edible oil container.',
  applications: ['Edible Oil'],
  material: 'HDPE',
  category: 'Edible Oil Containers',
  tags: ['Round Shape'],
  type: 'HDPE',
},
    ],
  },

  /* ── 4. Tomato Ketchup & Sauce ───────────────────────────────── */
  {
    id: 'ketchup-sauce',
    name: 'Tomato Ketchup & Sauce',
    description: 'Food-grade PET and HDPE bottles for ketchup, sauces, and condiments. Squeeze-bottle and flip-cap options.',
    image: PH.ketchup,
    products: [
{
  id: 'ketchup-sauce-container',
  name: '5kg Ketchup Container',
  sizes: ['5kg'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1776839209/5kg_ketcheup_pjsgyr.jpg',
  description: 'Food-grade HDPE container designed for packaging tomato ketchup and sauces.',
  applications: ['Tomato Ketchup', 'Sauces', 'Food Industry'],
  material: 'HDPE',
  category: 'Tomato Ketchup & Sauce',
  tags: ['Food Grade', 'Leak Proof'],
  type: 'HDPE',
},
{
  id: 'nitesh-sauce-container',
  name: '5kg Nitesh Sauce Container',
  sizes: ['5kg'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279321/5kg_Nitesh_crhgf0.jpg',
  description: 'Food-grade HDPE container for sauce and condiment packaging.',
  applications: ['Sauces', 'Food Industry'],
  material: 'HDPE',
  category: 'Tomato Ketchup & Sauce',
  tags: ['Food Grade', 'Leak Proof'],
  type: 'HDPE',
},
{
  id: 'radiant-sauce-container',
  name: '5kg Radiant Sauce Container',
  sizes: ['5kg'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279322/5kg_Radiant_durobj.jpg',
  description: 'Heavy-duty HDPE sauce container suitable for bulk food packaging.',
  applications: ['Tomato Ketchup', 'Sauces'],
  material: 'HDPE',
  category: 'Tomato Ketchup & Sauce',
  tags: ['Food Grade', 'Bulk Storage'],
  type: 'HDPE',
},    ],
  },

/* ── 5. Market / General Containers ─────────────────────────── */
{
  id: 'market-general',
  name: 'Market / General Containers',
  description: 'Versatile general-purpose HDPE and PET containers for diverse market applications.',
  image: PH.market,
  products: [
    {
      id: 'container-1l-1-2l',
      name: '1L & 1.2L Container',
      sizes: ['1L', '1.2L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279213/1.2_ltr_1_ltr_gbadqd.jpg',
      description: 'Compact HDPE container for retail and general liquid packaging.',
      applications: ['Liquid Storage'],
      material: 'HDPE',
      category: 'Market / General Containers',
      tags: ['Compact'],
      type: 'HDPE',
    },
    {
      id: 'container-2l-3l',
      name: '2L & 3L Container',
      sizes: ['2L', '3L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279214/2_ltr_3_ltr_kpl5k4.jpg',
      description: 'Medium-capacity HDPE container suitable for multiple applications.',
      applications: ['Liquid Storage'],
      material: 'HDPE',
      category: 'Market / General Containers',
      tags: ['Medium Capacity'],
      type: 'HDPE',
    },
    {
      id: 'container-4l-5l',
      name: '4L & 5L Container',
      sizes: ['4L', '5L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279211/4_ltr_5_ltr_fzboog.jpg',
      description: 'Durable HDPE container designed for safe storage and transport.',
      applications: ['Storage'],
      material: 'HDPE',
      category: 'Market / General Containers',
      tags: ['Heavy Duty'],
      type: 'HDPE',
    },
    {
      id: 'petjar-pushjar-collection',
      name: 'Pet Jar & Push Jar Collection',
      sizes: ['10L', '20L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279206/10_ltr_petjar_20ltr_petjar_20ltr_pushjar_jncaum.jpg',
      description: 'Collection of PET jars and push jars for bulk liquid storage.',
      applications: ['Water Storage'],
      material: 'PET',
      category: 'Market / General Containers',
      tags: ['PET Jar'],
      type: 'PET',
    },
    {
      id: 'heavy-10l',
      name: '10L Heavy Container',
      sizes: ['10L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279207/10_LTR_HEAVY_10_LTR_q54elz.jpg',
      description: 'Heavy-duty HDPE container built for industrial applications.',
      applications: ['Industrial Storage'],
      material: 'HDPE',
      category: 'Market / General Containers',
      tags: ['Heavy Duty'],
      type: 'HDPE',
    },
    {
      id: 'petjar-10l',
      name: '10L Pet Jar',
      sizes: ['10L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279209/10_ltr_petjar_lbbtcy.jpg',
      description: 'Food-grade PET jar suitable for liquid and water storage.',
      applications: ['Water Storage'],
      material: 'PET',
      category: 'Market / General Containers',
      tags: ['PET'],
      type: 'PET',
    },
    {
      id: 'petjar-20l',
      name: '20L Pet Jar',
      sizes: ['20L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279218/20_ltr_pet_jar_zdd9uq.jpg',
      description: 'Large-capacity PET jar for commercial liquid storage.',
      applications: ['Bulk Storage'],
      material: 'PET',
      category: 'Market / General Containers',
      tags: ['PET'],
      type: 'PET',
    },
    {
      id: 'pushjar-20l',
      name: '20L Push Jar',
      sizes: ['20L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279208/20_ltr_push_jar_gouupl.jpg',
      description: 'Convenient push-top jar for liquid storage and dispensing.',
      applications: ['Liquid Storage'],
      material: 'PET',
      category: 'Market / General Containers',
      tags: ['Push Jar'],
      type: 'PET',
    },
    {
      id: 'container-20l',
      name: '20L Container',
      sizes: ['20L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279215/20_ltr_hip8pm.jpg',
      description: 'Reliable general-purpose container for commercial use.',
      applications: ['Storage'],
      material: 'HDPE',
      category: 'Market / General Containers',
      tags: ['20L'],
      type: 'HDPE',
    },
    {
      id: 'waterjar-orange-white',
      name: '25L Water Jar Orange & White',
      sizes: ['25L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279206/25_ltr_water_jar_orange_white_mhqbnv.jpg',
      description: 'Heavy-duty water jar available in dual-color design.',
      applications: ['Water Storage'],
      material: 'PET',
      category: 'Market / General Containers',
      tags: ['Water Jar'],
      type: 'PET',
    },
    {
      id: 'waterjar-orange',
      name: '25L Water Jar Orange',
      sizes: ['25L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279217/25_ltr_water_jar_orange_oyiavp.jpg',
      description: 'Durable orange water jar for long-term storage.',
      applications: ['Water Storage'],
      material: 'PET',
      category: 'Market / General Containers',
      tags: ['Orange'],
      type: 'PET',
    },
    {
      id: 'waterjar-white',
      name: '25L Water Jar White',
      sizes: ['25L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279212/25_ltr_water_jar_white_dgylgu.jpg',
      description: 'Food-grade white water jar for drinking water storage.',
      applications: ['Water Storage'],
      material: 'PET',
      category: 'Market / General Containers',
      tags: ['White'],
      type: 'PET',
    },
    {
      id: 'container-35l-blue',
      name: '35L Blue Container',
      sizes: ['35L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279216/35_ltr_blue_hpldbw.jpg',
      description: 'Large-capacity blue container for industrial use.',
      applications: ['Industrial Storage'],
      material: 'HDPE',
      category: 'Market / General Containers',
      tags: ['Blue'],
      type: 'HDPE',
    },
    {
      id: 'diesel-blue-white',
      name: '35L Diesel Blue & White Container',
      sizes: ['35L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279205/35_ltr_disel_blue_white_unmchf.jpg',
      description: 'Heavy-duty fuel container available in multiple color options.',
      applications: ['Diesel Storage'],
      material: 'HDPE',
      category: 'Market / General Containers',
      tags: ['Fuel'],
      type: 'HDPE',
    },
    {
      id: 'diesel-35l',
      name: '35L Diesel Container',
      sizes: ['35L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279217/35_ltr_disel_vyr07o.jpg',
      description: 'Robust diesel storage container for transportation and storage.',
      applications: ['Fuel Storage'],
      material: 'HDPE',
      category: 'Market / General Containers',
      tags: ['Diesel'],
      type: 'HDPE',
    },
    {
      id: 'container-35l',
      name: '35L Container',
      sizes: ['35L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279211/35_ltr_tq8jm4.jpg',
      description: 'Industrial-grade HDPE container for bulk liquid storage.',
      applications: ['Bulk Storage'],
      material: 'HDPE',
      category: 'Market / General Containers',
      tags: ['Bulk'],
      type: 'HDPE',
    },
    {
      id: 'dispenser',
      name: 'Liquid Dispenser',
      sizes: [],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279210/dispenser_tnye4m.jpg',
      description: 'Easy-to-use dispenser for controlled liquid dispensing.',
      applications: ['Dispensing'],
      material: 'HDPE',
      category: 'Market / General Containers',
      tags: ['Dispenser'],
      type: 'HDPE',
    },
  ],
},

/* ── 6. Milk Cans & Ghagar ───────────────────────────────────── */
{
  id: 'milk-cans',
  name: 'Milk Cans & Ghagar',
  description: 'Food-grade HDPE milk cans engineered for dairy co-operatives and private dairies. Easy-grip handles, airtight lids, FDA-compliant.',
  image: PH.milk,
  products: [
    {
  id: 'milkcan-blue-3-5l',
  name: '3.5L Milk Can Blue',
  sizes: ['3.5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279198/3.5_ltr_milkcan_blue_no63yt.jpg',
  description: 'Food-grade blue HDPE milk can for dairy storage and transport.',
  applications: ['Milk Storage', 'Dairy Transport'],
  material: 'HDPE',
  category: 'Milk Cans & Ghagar',
  tags: ['Food Grade'],
  type: 'HDPE',
},
{
  id: 'milkcan-3-5l',
  name: '3.5L Milk Can',
  sizes: ['3.5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279203/3.5_ltr_milkcan_blggmi.jpg',
  description: 'Durable HDPE milk can designed for safe dairy handling.',
  applications: ['Milk Storage'],
  material: 'HDPE',
  category: 'Milk Cans & Ghagar',
  tags: ['Dairy'],
  type: 'HDPE',
},
{
  id: 'milkcan-blue-5l',
  name: '5L Milk Can Blue',
  sizes: ['5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279199/5_ltr_milkcan_blue_ltecg6.jpg',
  description: 'Food-grade blue milk can with secure lid.',
  applications: ['Milk Storage'],
  material: 'HDPE',
  category: 'Milk Cans & Ghagar',
  tags: ['Food Grade'],
  type: 'HDPE',
},
{
  id: 'milkcan-5l',
  name: '5L Milk Can',
  sizes: ['5L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279197/milkcan_3.5ltr_5ltr_10ltr_15ltr_sj9ste.jpg',
  description: 'Strong HDPE milk can for dairy transportation.',
  applications: ['Milk Transport'],
  material: 'HDPE',
  category: 'Milk Cans & Ghagar',
  tags: ['Durable'],
  type: 'HDPE',
},
{
  id: 'milkcan-blue-10l',
  name: '10L Milk Can Blue',
  sizes: ['10L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279199/10_ltr_milkcan_blue_hyjh6d.jpg',
  description: 'Large-capacity blue milk can for dairy use.',
  applications: ['Milk Storage'],
  material: 'HDPE',
  category: 'Milk Cans & Ghagar',
  tags: ['Food Grade'],
  type: 'HDPE',
},
{
  id: 'milkcan-10l',
  name: '10L Milk Can',
  sizes: ['10L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279202/10_ltr_milkcan_cbqs1g.jpg',
  description: 'HDPE milk can suitable for dairy collection and transport.',
  applications: ['Dairy Collection'],
  material: 'HDPE',
  category: 'Milk Cans & Ghagar',
  tags: ['Dairy'],
  type: 'HDPE',
},
{
  id: 'milkcan-blue-15l',
  name: '15L Milk Can Blue',
  sizes: ['15L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279200/15ltr_milkcan_blue_wwotys.jpg',
  description: 'Heavy-duty blue milk can for bulk dairy storage.',
  applications: ['Bulk Storage'],
  material: 'HDPE',
  category: 'Milk Cans & Ghagar',
  tags: ['Heavy Duty'],
  type: 'HDPE',
},
{
  id: 'milkcan-15l',
  name: '15L Milk Can',
  sizes: ['15L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279197/milkcan_3.5ltr_5ltr_10ltr_15ltr_sj9ste.jpg',
  description: 'Large HDPE milk can for commercial dairy operations.',
  applications: ['Commercial Dairy'],
  material: 'HDPE',
  category: 'Milk Cans & Ghagar',
  tags: ['Commercial'],
  type: 'HDPE',
},
{
  id: 'ghagar-10l',
  name: '10L Ghagar',
  sizes: ['10L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279197/10_ltr_ghagar_m57s1v.jpg',
  description: 'Traditional HDPE ghagar for milk carrying and storage.',
  applications: ['Milk Storage'],
  material: 'HDPE',
  category: 'Milk Cans & Ghagar',
  tags: ['Traditional'],
  type: 'HDPE',
},
{
  id: 'ghagar-15l',
  name: '15L Ghagar',
  sizes: ['15L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279203/15_ltr_ghagar_aa77hb.jpg',
  description: 'Durable ghagar designed for dairy transport.',
  applications: ['Dairy Transport'],
  material: 'HDPE',
  category: 'Milk Cans & Ghagar',
  tags: ['Unbreakable'],
  type: 'HDPE',
},
{
  id: 'ghagar-17l',
  name: '17L Ghagar',
  sizes: ['17L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279204/17_ltr_Ghagar_yzc368.jpg',
  description: 'Large-capacity ghagar for dairy and liquid storage.',
  applications: ['Liquid Storage'],
  material: 'HDPE',
  category: 'Milk Cans & Ghagar',
  tags: ['Large Capacity'],
  type: 'HDPE',
},
  ],
},

 /* ── 7. Animal Healthcare ────────────────────────────────────── */
{
  id: 'animal-healthcare',
  name: 'Animal Healthcare',
  description: 'HDPE and PP containers for veterinary medicines, animal feed supplements, and livestock care products.',
  image: PH.animal,
  products: [
    {
      id: 'emida-bottle',
      name: 'Emida Bottle',
      sizes: ['100ml', '250ml', '500ml', '1L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279309/Emida_yzfer4.jpg',
      description: 'HDPE bottle designed for veterinary medicines and animal healthcare liquids.',
      applications: ['Veterinary Medicines', 'Animal Healthcare'],
      material: 'HDPE',
      category: 'Animal Healthcare',
      tags: ['Veterinary'],
      type: 'HDPE',
    },
    {
      id: 'glypho-bottles',
      name: 'Glypho Bottles',
      sizes: ['100ml', '250ml', '500ml', '1L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279307/glypho_bottles_msv466.jpg',
      description: 'Durable HDPE bottles suitable for animal healthcare formulations.',
      applications: ['Veterinary Products', 'Liquid Packaging'],
      material: 'HDPE',
      category: 'Animal Healthcare',
      tags: ['Chemical Resistant'],
      type: 'HDPE',
    },
    {
      id: 'handle-bottle',
      name: 'Handle Bottle',
      sizes: ['250ml', '500ml', '1L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279308/handle_bottle_odq7cx.jpg',
      description: 'Easy-grip handle bottle for convenient pouring and handling.',
      applications: ['Veterinary Liquids', 'Farm Use'],
      material: 'HDPE',
      category: 'Animal Healthcare',
      tags: ['Handle Design'],
      type: 'HDPE',
    },
    {
      id: 'milk-can-ah',
      name: 'Milk Can',
      sizes: ['3.5L', '5L', '10L', '15L'],
      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279306/milkcan_3.5ltr_5ltr_10ltr_15ltr_fr6dmw.jpg',
      description: 'Food-grade milk can suitable for dairy and livestock applications.',
      applications: ['Milk Storage', 'Farm Transport'],
      material: 'HDPE',
      category: 'Animal Healthcare',
      tags: ['Food Grade', 'Heavy Duty'],
      type: 'HDPE',
    },
  ],
},


  /* ── 8. Coolant & Engine Oil ─────────────────────────────────── */
  {
    id: 'coolant-engine-oil',
    name: 'Coolant & Engine Oil',
    description: 'HDPE containers for automotive coolants, engine oils, gear oils, and lubricants. Chemical-compatible and spill-proof.',
    image: PH.engine,
    products: [
     {
  id: 'everest-bottle',
  name: '1L Everest Bottle',
  sizes: ['1L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279288/1_ltr_everest_tdnnuy.jpg',
  description: 'HDPE bottle designed for coolant and engine oil packaging.',
  applications: ['Coolant', 'Engine Oil'],
  material: 'HDPE',
  category: 'Coolant & Engine Oil',
  tags: ['Automotive'],
  type: 'HDPE',
},
{
  id: 'square-coolant-bottle',
  name: '1L Square Coolant Bottle',
  sizes: ['1L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279287/1_ltr_square_coolent_xuj1rz.jpg',
  description: 'Square HDPE coolant bottle with efficient storage design.',
  applications: ['Coolant', 'Radiator Fluid'],
  material: 'HDPE',
  category: 'Coolant & Engine Oil',
  tags: ['Square Design'],
  type: 'HDPE',
},
{
  id: 'engine-oil-bottle-1l',
  name: '1L Engine Oil Bottle',
  sizes: ['1L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279289/1_ltr_giqhn8.jpg',
  description: 'Durable HDPE bottle for engine oil and lubricant packaging.',
  applications: ['Engine Oil', 'Lubricants'],
  material: 'HDPE',
  category: 'Coolant & Engine Oil',
  tags: ['Lubricant'],
  type: 'HDPE',
},
{
  id: 'coolant-bottle-500ml-1l',
  name: '500ml & 1L Coolant Bottle',
  sizes: ['500ml', '1L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279286/500ml_1_ltr_coolent_ewejcd.jpg',
  description: 'Compact coolant bottles for automotive fluid packaging.',
  applications: ['Coolant', 'Automotive Fluids'],
  material: 'HDPE',
  category: 'Coolant & Engine Oil',
  tags: ['Coolant'],
  type: 'HDPE',
},
{
  id: 'coolant-bottle-500ml',
  name: '500ml Coolant Bottle',
  sizes: ['500ml'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279290/500ml_otwq2q.jpg',
  description: 'Small HDPE bottle ideal for coolant and additive packaging.',
  applications: ['Coolant', 'Additives'],
  material: 'HDPE',
  category: 'Coolant & Engine Oil',
  tags: ['Compact'],
  type: 'HDPE',
},
{
  id: 'coolant-handle-bottle',
  name: 'Handle Bottle',
  sizes: ['500ml', '1L', '2L'],
  image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279286/handle_egzd1m.jpg',
  description: 'Easy-grip handle bottle for coolant and engine oil applications.',
  applications: ['Coolant', 'Engine Oil'],
  material: 'HDPE',
  category: 'Coolant & Engine Oil',
  tags: ['Handle Grip'],
  type: 'HDPE',
},
    ],
  },

  /* ── 9. Food Syrup & Pickle ──────────────────────────────────── */
  {
    id: 'food-syrup-pickle',
    name: 'Food Syrup & Pickle',
    description: 'Food-grade PET and HDPE containers for syrups, jams, pickles, and condiments. BIS-certified and airtight.',
    image: PH.syrup,
    products: [
     {

      id: 'syrup-bottle-1l-1-2l',

      name: '1L & 1.2L Syrup Bottle',

      sizes: ['1L', '1.2L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279222/1.2_ltr_1_ltr_rrtiel.jpg',

      description: 'Food-grade PET bottle ideal for syrups and liquid concentrates.',

      applications: ['Syrups', 'Food Concentrates'],

      material: 'PET',

      category: 'Food Syrup & Pickle',

      tags: ['Food Grade'],

      type: 'PET',

    },

    {

      id: 'syrup-bottle-4l-5l',

      name: '4L & 5L Syrup Bottle',

      sizes: ['4L', '5L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279221/4_ltr_5_ltr_wtzddx.jpg',

      description: 'Large-capacity syrup container for commercial food packaging.',

      applications: ['Syrups', 'Bulk Food Liquids'],

      material: 'PET',

      category: 'Food Syrup & Pickle',

      tags: ['Bulk Storage'],

      type: 'PET',

    },

    {

      id: 'pickle-barni-5kg',

      name: '5kg Pickle Barni',

      sizes: ['5kg'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279220/5kg_pickle_barni_t8nsm1.jpg',

      description: 'Wide-mouth food-grade container for pickle storage.',

      applications: ['Pickles', 'Food Storage'],

      material: 'HDPE',

      category: 'Food Syrup & Pickle',

      tags: ['Wide Mouth'],

      type: 'HDPE',

    },

    {

      id: 'pickle-barni-10kg',

      name: '10kg Pickle Barni',

      sizes: ['10kg'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279220/10_kg_pickle_barni_ufvcbl.jpg',

      description: 'Heavy-duty pickle container for bulk food preservation.',

      applications: ['Pickles', 'Bulk Food Storage'],

      material: 'HDPE',

      category: 'Food Syrup & Pickle',

      tags: ['Bulk Storage'],

      type: 'HDPE',

    },
    ],
  },

  /* ── 10. Water Storage Containers ───────────────────────────── */
  {
    id: 'water-storage',
    name: 'Water/Diesel Storage Containers',
    description: 'BPA-free PET and HDPE water jars and containers for packaged drinking water and home storage.',
    image: PH.water,
    products: [
      {

      id: 'water-jar-10l-20l-push',

      name: '10L & 20L Push Jar',

      sizes: ['10L', '20L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279241/20_ltr_push_jar_agv4oz.jpg',

      description: 'Strong water storage jars with push-fit design for easy handling and transportation.',

      applications: ['Water Storage', 'Home Use', 'Commercial Supply'],

      material: 'PET',

      category: 'Water Storage Containers',

      tags: ['Reusable', 'Food Grade'],

      type: 'PET',

    },

    {

      id: 'water-jar-10l',

      name: '10L PET Jar',

      sizes: ['10L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279242/10_ltr_petjar_kwphqp.jpg',

      description: 'Compact PET water jar suitable for drinking water storage and delivery.',

      applications: ['Water Storage', 'Water Distribution'],

      material: 'PET',

      category: 'Water Storage Containers',

      tags: ['Reusable'],

      type: 'PET',

    },

    {

      id: 'water-jar-20l',

      name: '20L PET Jar',

      sizes: ['20L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279250/20_ltr_pet_jar_o4umi5.jpg',

      description: 'Heavy-duty PET jar designed for safe storage and transport of drinking water.',

      applications: ['Drinking Water', 'Commercial Supply'],

      material: 'PET',

      category: 'Water Storage Containers',

      tags: ['Food Grade', 'Durable'],

      type: 'PET',

    },

    {

      id: 'water-push-jar-20l',

      name: '20L Push Jar',

      sizes: ['20L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279241/20_ltr_push_jar_agv4oz.jpg',

      description: 'Large-capacity push jar suitable for commercial and residential water storage.',

      applications: ['Water Storage', 'Bulk Supply'],

      material: 'PET',

      category: 'Water Storage Containers',

      tags: ['Heavy Duty'],

      type: 'PET',

    },

    {

      id: 'water-square-can-20l',

      name: '20L Square Can',

      sizes: ['20L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279248/20_ltr_square_can_oh17co.jpg',

      description: 'Space-efficient square container for water and liquid storage applications.',

      applications: ['Water Storage', 'Liquid Transport'],

      material: 'HDPE',

      category: 'Water Storage Containers',

      tags: ['Stackable', 'Durable'],

      type: 'HDPE',

    },

    {

      id: 'water-can-20l',

      name: '20L Water Can',

      sizes: ['20L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279247/20_ltr_g7voa5.jpg',

      description: 'Durable HDPE water can designed for everyday water transportation and storage.',

      applications: ['Water Storage', 'Home Use'],

      material: 'HDPE',

      category: 'Water Storage Containers',

      tags: ['Reusable'],

      type: 'HDPE',

    },

    {

      id: 'water-jar-25l-orange-white',

      name: '25L Water Jar (Orange & White)',

      sizes: ['25L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279240/25_ltr_water_jar_orange_white_kwyug7.jpg',

      description: 'Premium dual-color water jar suitable for commercial water supply.',

      applications: ['Drinking Water', 'Commercial Supply'],

      material: 'HDPE',

      category: 'Water Storage Containers',

      tags: ['Food Grade'],

      type: 'HDPE',

    },

    {

      id: 'water-jar-25l-orange',

      name: '25L Water Jar (Orange)',

      sizes: ['25L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279240/25_ltr_water_jar_orange_white_kwyug7.jpg',

      description: 'Strong and reusable orange water jar for bulk water storage.',

      applications: ['Water Storage', 'Distribution'],

      material: 'HDPE',

      category: 'Water Storage Containers',

      tags: ['Durable'],

      type: 'HDPE',

    },

    {

      id: 'water-jar-25l-white',

      name: '25L Water Jar (White)',

      sizes: ['25L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279240/25_ltr_water_jar_orange_white_kwyug7.jpg',

      description: 'Food-grade white water jar designed for safe drinking water storage.',

      applications: ['Drinking Water', 'Home Use'],

      material: 'HDPE',

      category: 'Water Storage Containers',

      tags: ['Food Grade'],

      type: 'HDPE',

    },

    {

      id: 'diesel-can-35l',

      name: '35L Diesel Can',

      sizes: ['35L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279248/35_ltr_disel_lhirhe.jpg',

      description: 'Heavy-duty HDPE diesel can suitable for industrial fuel storage and transport.',

      applications: ['Diesel Storage', 'Fuel Transport'],

      material: 'HDPE',

      category: 'Water Storage Containers',

      tags: ['Fuel Safe', 'Industrial Grade'],

      type: 'HDPE',

    },

    {

      id: 'water-can-35l',

      name: '35L Water Can',

      sizes: ['35L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279245/35_ltr_rchdsq.jpg',

      description: 'Large-capacity water can for commercial and industrial water storage needs.',

      applications: ['Water Storage', 'Bulk Supply'],

      material: 'HDPE',

      category: 'Water Storage Containers',

      tags: ['Heavy Duty'],

      type: 'HDPE',

    },

    {

      id: 'mauser-drum-35l',

      name: '35L Mauser Drum',

      sizes: ['35L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279244/35_ltrs_Mauzer_uftkvo.jpg',

      description: 'Robust Mauser-style drum for safe storage and transportation of liquids.',

      applications: ['Liquid Storage', 'Industrial Use'],

      material: 'HDPE',

      category: 'Water Storage Containers',

      tags: ['Industrial Grade'],

      type: 'HDPE',

    },

    {

      id: 'water-dispenser',

      name: 'Water Dispenser',

      sizes: ['Standard'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279243/dispenser_grqqcm.jpg',

      description: 'Convenient dispenser attachment for easy and hygienic water dispensing.',

      applications: ['Water Dispensing', 'Home Use', 'Office Use'],

      material: 'Plastic',

      category: 'Water Storage Containers',

      tags: ['Easy Use'],

      type: 'Accessory',

    },
    ],
  },

  /* ── 11. Powder Packing Jars ─────────────────────────────────── */
  {
    id: 'powder-packing',
    name: 'Powder Packing Jars',
    description: 'Wide-mouth HDPE and PP jars for spices, protein powders, pharma, and industrial powder packaging.',
    image: PH.powder,
    products: [
      {

      id: 'barni-2kg',

      name: '2kg Barni',

      sizes: ['2kg'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279253/2kg_Barni_yibexl.jpg',

      description: 'Compact HDPE barni ideal for powder and food product packaging.',

      applications: ['Powders', 'Spices', 'Food Storage'],

      material: 'HDPE',

      category: 'Powder Packing Jars',

      tags: ['Food Grade', 'Compact'],

      type: 'HDPE',

    },

    {

      id: 'barni-5kg',

      name: '5kg Barni',

      sizes: ['5kg'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279252/5kg_barni_tav0vs.jpg',

      description: 'Durable HDPE barni suitable for medium-capacity powder storage.',

      applications: ['Powders', 'Food Storage', 'Industrial Use'],

      material: 'HDPE',

      category: 'Powder Packing Jars',

      tags: ['Food Grade', 'Durable'],

      type: 'HDPE',

    },

    {

      id: 'bucket-5kg',

      name: '5kg Bucket',

      sizes: ['5kg'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279255/5kg_Bucket_fs5xig.jpg',

      description: 'Strong HDPE bucket designed for powder and bulk material packaging.',

      applications: ['Powder Packing', 'Industrial Storage'],

      material: 'HDPE',

      category: 'Powder Packing Jars',

      tags: ['Heavy Duty'],

      type: 'HDPE',

    },

    {

      id: 'bucket-10kg',

      name: '10kg Bucket',

      sizes: ['10kg'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279255/10_kg_Bucket_hearwr.jpg',

      description: 'Heavy-duty bucket suitable for large-volume powder storage and transport.',

      applications: ['Bulk Powders', 'Industrial Storage'],

      material: 'HDPE',

      category: 'Powder Packing Jars',

      tags: ['Bulk Storage', 'Heavy Duty'],

      type: 'HDPE',

    },

    {

      id: 'handle-barni',

      name: 'Handle Barni',

      sizes: ['5kg', '10kg'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279252/Handle_Barni_smtbdq.jpg',

      description: 'Ergonomic handle barni for convenient carrying and storage.',

      applications: ['Powders', 'Food Products', 'Industrial Use'],

      material: 'HDPE',

      category: 'Powder Packing Jars',

      tags: ['Handle Grip', 'Easy Carry'],

      type: 'HDPE',

    },

    {

      id: 'wide-mouth-barni',

      name: 'Wide Mouth Barni',

      sizes: ['2kg', '5kg', '10kg'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279250/Wide_Mouth_barni_2_mz1ysx.jpg',

      description: 'Wide-mouth container allowing easy filling and dispensing of powders.',

      applications: ['Powders', 'Food Storage', 'Industrial Storage'],

      material: 'HDPE',

      category: 'Powder Packing Jars',

      tags: ['Wide Mouth', 'Heavy Duty'],

      type: 'HDPE',

    },
    ],
  },

  /* ── 12. Caps & Accessories ──────────────────────────────────── */
  {
    id: 'caps-accessories',
    name: 'Caps & Accessories',
    description: 'Precision-moulded PP and HDPE caps, closures, and accessories for all container types.',
    image: PH.cap,
    products: [
     {

      id: 'lock-caps-20l-35l',

      name: '20L & 35L Lock Caps',

      sizes: ['20L', '35L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279303/20ltr_35_ltr_lock_caps_owacbj.jpg',

      description: 'Heavy-duty lock caps designed for secure sealing of large containers.',

      applications: ['Water Cans', 'Chemical Containers', 'Industrial Packaging'],

      material: 'PP',

      category: 'Caps & Accessories',

      tags: ['Lock Type', 'Leak Proof'],

      type: 'PP',

    },

    {

      id: 'cap-78mm',

      name: '78mm Cap',

      sizes: ['78mm'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279306/78_hokkvy.jpg',

      description: 'Durable threaded cap suitable for a wide range of plastic containers.',

      applications: ['Food Containers', 'Chemical Bottles'],

      material: 'PP',

      category: 'Caps & Accessories',

      tags: ['Threaded', 'Reusable'],

      type: 'PP',

    },

    {

      id: 'cap-79mm',

      name: '79mm Cap',

      sizes: ['79mm'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279305/79_qufyzv.jpg',

      description: 'Reliable sealing cap designed for medium and large-mouth containers.',

      applications: ['Industrial Packaging', 'Food Packaging'],

      material: 'PP',

      category: 'Caps & Accessories',

      tags: ['Leak Resistant'],

      type: 'PP',

    },

    {

      id: 'cap-81mm',

      name: '81mm Cap',

      sizes: ['81mm'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279303/81_logarg.jpg',

      description: 'Heavy-duty closure cap providing secure protection for stored contents.',

      applications: ['Chemical Storage', 'Food Containers'],

      material: 'PP',

      category: 'Caps & Accessories',

      tags: ['Heavy Duty'],

      type: 'PP',

    },

    {

      id: 'glypho-caps',

      name: 'Glypho Caps',

      sizes: ['Standard'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279301/glypho_caps_ni2okm.jpg',

      description: 'Specialized caps designed for agrochemical and glyphosate packaging containers.',

      applications: ['Agrochemicals', 'Pesticide Containers'],

      material: 'PP',

      category: 'Caps & Accessories',

      tags: ['Agrochemical Use'],

      type: 'PP',

    },

    {

      id: 'measuring-caps',

      name: 'Measuring Caps',

      sizes: ['Standard'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279302/measuring_caps_zqumph.jpg',

      description: 'Measurement-marked caps for accurate dispensing of liquid products.',

      applications: ['Liquids', 'Chemicals', 'Detergents'],

      material: 'PP',

      category: 'Caps & Accessories',

      tags: ['Measurement', 'Dispensing'],

      type: 'PP',

    },
    ],
  },

  /* ── 13. Household Cleaning Bottles ─────────────────────────── */
  {
    id: 'cleaning-bottles',
    name: 'Household Cleaning Bottles',
    description: 'PET and HDPE bottles for liquid detergents, fabric softeners, floor cleaners, and disinfectants.',
    image: PH.clean,
    products: [
      {

      id: 'blue-bottle-500ml',

      name: 'Blue Bottle',

      sizes: ['500ml'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279269/0.5_ltr_blue_otd1ax.jpg',

      description: 'Compact HDPE bottle suitable for cleaning and liquid products.',

      applications: ['Cleaners', 'Detergents'],

      material: 'HDPE',

      category: 'Household Cleaning Bottles',

      tags: ['Compact', 'Reusable'],

      type: 'HDPE',

    },

    {

      id: 'blue-bottle-combo',

      name: 'Blue Bottle',

      sizes: ['500ml', '1L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279261/0.5ltr_1ltr_blue_dinip0.jpg',

      description: 'Available in multiple capacities for household cleaning products.',

      applications: ['Cleaners', 'Disinfectants'],

      material: 'HDPE',

      category: 'Household Cleaning Bottles',

      tags: ['Multi Size'],

      type: 'HDPE',

    },

    {

      id: 'blue-bottle-1l',

      name: 'Blue Bottle',

      sizes: ['1L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279269/1_ltr_blue_hqmroq.jpg',

      description: 'Large-capacity bottle for cleaning and disinfectant liquids.',

      applications: ['Floor Cleaner', 'Liquid Detergent'],

      material: 'HDPE',

      category: 'Household Cleaning Bottles',

      tags: ['1L Capacity'],

      type: 'HDPE',

    },

    {

      id: 'harpic-1l',

      name: 'Harpic Type Bottle',

      sizes: ['1L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279268/1_ltr_harpic_rpwwnk.jpg',

      description: 'Special nozzle bottle designed for toilet cleaning solutions.',

      applications: ['Toilet Cleaner'],

      material: 'HDPE',

      category: 'Household Cleaning Bottles',

      tags: ['Nozzle Design'],

      type: 'HDPE',

    },

    {

      id: 'sunshine-bottle',

      name: 'Sunshine Bottle',

      sizes: ['1L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279266/1_ltr_sunshine_u1joac.jpg',

      description: 'Cleaning liquid bottle suitable for household and commercial use.',

      applications: ['Cleaning Liquids'],

      material: 'HDPE',

      category: 'Household Cleaning Bottles',

      tags: ['Durable'],

      type: 'HDPE',

    },

    {

      id: 'cap-76-bottle',

      name: '76mm Cap Bottle',

      sizes: ['Standard'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279262/76_ei1wzi.jpg',

      description: 'Bottle with 76mm closure suitable for liquid packaging.',

      applications: ['Chemical Packaging', 'Cleaning Products'],

      material: 'HDPE',

      category: 'Household Cleaning Bottles',

      tags: ['76mm Cap'],

      type: 'HDPE',

    },

    {

      id: 'harpic-500ml',

      name: 'Harpic Type Bottle',

      sizes: ['500ml'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279267/500ml_harpic_n9pioy.jpg',

      description: 'Compact toilet cleaner bottle with angled nozzle.',

      applications: ['Toilet Cleaner'],

      material: 'HDPE',

      category: 'Household Cleaning Bottles',

      tags: ['500ml'],

      type: 'HDPE',

    },

    {

      id: 'harpic-combo',

      name: 'Harpic Type Bottle',

      sizes: ['500ml', '1L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279263/harpic_500ml_1ltr_ua7yhg.jpg',

      description: 'Available in multiple sizes for toilet cleaning products.',

      applications: ['Bathroom Cleaning'],

      material: 'HDPE',

      category: 'Household Cleaning Bottles',

      tags: ['Multi Size'],

      type: 'HDPE',

    },

    {

      id: 'lizol-type',

      name: 'Lizol Type Bottle',

      sizes: ['250ml', '500ml', '1L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279265/lizol_bottle_hsw6lf.jpg',

      description: 'HDPE bottles designed for floor cleaners and disinfectants.',

      applications: ['Floor Cleaner', 'Disinfectant'],

      material: 'HDPE',

      category: 'Household Cleaning Bottles',

      tags: ['Cleaning Use', 'Ergonomic'],

      type: 'HDPE',

    },

    {

      id: 'oval-cleaning',

      name: 'Oval Shape Container',

      sizes: ['5L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279265/oval_lrpgas.jpg',

      description: 'Large capacity oval container for bulk liquid storage.',

      applications: ['Bulk Cleaning Liquids', 'Industrial Cleaning'],

      material: 'HDPE',

      category: 'Household Cleaning Bottles',

      tags: ['Bulk Storage'],

      type: 'HDPE',

    },

    {

      id: 'spray-bottle',

      name: 'Spray Bottle',

      sizes: ['250ml', '500ml'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279264/spray_bottlres_es4pci.jpg',

      description: 'Spray bottle designed for sanitizers, cleaners, and liquid solutions.',

      applications: ['Spraying', 'Cleaning', 'Sanitizing'],

      material: 'HDPE',

      category: 'Household Cleaning Bottles',

      tags: ['Spray Type'],

      type: 'HDPE',

    },
    ],
  },

  /* ── 14. Industrial Bulk Containers ─────────────────────────── */
  {
    id: 'industrial-bulk',
    name: 'Industrial Bulk Containers',
    description: 'Heavy-duty HDPE drums, IBCs, and large containers for industrial bulk storage and transport.',
    image: PH.bulk,
    products: [
      {

      id: 'square-can-20l',

      name: '20L Square Can',

      sizes: ['20L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279258/20_ltr_sqaure_can_fssk21.jpg',

      description: 'Square-shaped industrial container offering efficient storage and stacking.',

      applications: ['Chemical Storage', 'Industrial Liquids'],

      material: 'HDPE',

      category: 'Industrial Bulk Containers',

      tags: ['Square Shape', 'Stackable'],

      type: 'HDPE',

    },

    {

      id: 'cross-handle-taiwan',

      name: 'Cross Handle Container (Taiwan Type)',

      sizes: ['20L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279260/20ltr_cross_handle_Taiwan_v7vono.jpg',

      description: 'Industrial container with cross-handle design for easy carrying and handling.',

      applications: ['Chemical Transport', 'Industrial Use'],

      material: 'HDPE',

      category: 'Industrial Bulk Containers',

      tags: ['Cross Handle', 'Heavy Duty'],

      type: 'HDPE',

    },

    {

      id: 'mauzer-25l',

      name: 'Mauzer Container',

      sizes: ['25L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279256/25_ltr_mauzer_isjnmj.jpg',

      description: 'Durable Mauzer-style container for industrial liquid storage and transport.',

      applications: ['Bulk Chemicals', 'Industrial Storage'],

      material: 'HDPE',

      category: 'Industrial Bulk Containers',

      tags: ['Mauzer Type', 'Industrial'],

      type: 'HDPE',

    },

    {

      id: 'blue-can-35l',

      name: 'Blue Industrial Can',

      sizes: ['35L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279258/35_ltrs_Blue_Cans_qcecl2.jpg',

      description: 'Large-capacity blue HDPE container for industrial and commercial applications.',

      applications: ['Chemical Storage', 'Bulk Liquids'],

      material: 'HDPE',

      category: 'Industrial Bulk Containers',

      tags: ['Blue Container', 'Large Capacity'],

      type: 'HDPE',

    },

    {

      id: 'mauzer-35l',

      name: 'Mauzer Container',

      sizes: ['35L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279259/35_ltrs_pejae4.jpg',

      description: 'Heavy-duty Mauzer container designed for industrial storage requirements.',

      applications: ['Industrial Chemicals', 'Bulk Storage'],

      material: 'HDPE',

      category: 'Industrial Bulk Containers',

      tags: ['Mauzer Type', 'Heavy Duty'],

      type: 'HDPE',

    },

    {

      id: 'industrial-can-35l',

      name: 'Industrial Bulk Can',

      sizes: ['35L'],

      image: 'https://res.cloudinary.com/dlh5prjhb/image/upload/v1782279256/35_ltrs_Mauzer_aklule.jpg',

      description: 'Strong HDPE bulk container suitable for storing and transporting industrial liquids.',

      applications: ['Industrial Use', 'Chemical Storage'],

      material: 'HDPE',

      category: 'Industrial Bulk Containers',

      tags: ['Bulk Storage', 'Durable'],

      type: 'HDPE',

    },
    ],
  },
];

/* ── Helper: find a single category by slug ───────────────────────── */
export function getCategoryById(id) {
  return CATEGORIES.find((c) => c.id === id) ?? null;
}

/* ── Helper: find a single product across all categories ──────────── */
export function getProductById(productId) {
  for (const cat of CATEGORIES) {
    const product = cat.products.find((p) => p.id === productId);
    if (product) return { product, category: cat };
  }
  return null;
}

/* ── Helper: get unique types within a category ───────────────────── */
export function getTypesForCategory(categoryId) {
  const cat = getCategoryById(categoryId);
  if (!cat) return [];
  return [...new Set(cat.products.map((p) => p.material))];
}

/* ── Helper: get unique sizes within a category ───────────────────── */
export function getSizesForCategory(categoryId) {
  const cat = getCategoryById(categoryId);
  if (!cat) return []
  const all = cat.products.flatMap((p) => p.sizes);
  return [...new Set(all)];
}
