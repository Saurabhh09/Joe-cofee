import { MenuItem, EventPackage } from '../types/cafe';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'hot',
    price: 3.75,
    description: 'Double shot pulled from our signature seasonal roast. Rich, syrupy body with bright citrus notes and dark chocolate finish.',
    calories: '5 kcal',
    tags: ['Single Origin', 'Double Shot'],
    imageKey: 'espresso'
  },
  {
    id: 'latte',
    name: 'Latte',
    category: 'hot',
    price: 5.50,
    description: 'Silky micro-textured steamed milk poured over a rich double espresso with handcrafted rosetta latte art.',
    calories: '180 kcal',
    tags: ['Signature', 'Latte Art'],
    imageKey: 'latte'
  },
  {
    id: 'cold_brew',
    name: 'Cold Brew',
    category: 'cold',
    price: 5.00,
    description: 'Slow steeped for 18 hours in cold filtered spring water. Naturally sweet, low acidity, served over hand-carved ice.',
    calories: '5 kcal',
    tags: ['18h Steeped', 'Over Ice'],
    imageKey: 'cold_brew'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'hot',
    price: 4.75,
    description: 'Equal thirds of bold espresso, silky steamed milk, and a crown of pillowy microfoam dusted with organic Ceylon cinnamon.',
    calories: '130 kcal',
    tags: ['Traditional', 'Velvety Foam'],
    imageKey: 'cappuccino'
  },
  {
    id: 'matcha_latte',
    name: 'Iced Matcha Latte',
    category: 'cold',
    price: 6.25,
    description: 'First-harvest ceremonial grade Uji matcha hand-whisked and layered over sweet oat milk and crystalline ice.',
    calories: '150 kcal',
    tags: ['Ceremonial Grade', 'Organic'],
    imageKey: 'matcha'
  },
  {
    id: 'mocha',
    name: 'Mocha',
    category: 'hot',
    price: 5.75,
    description: 'Single-origin espresso blended with 70% dark Valrhona melted chocolate ganache and textured whole milk.',
    calories: '260 kcal',
    tags: ['Valrhona Chocolate', 'Decadent'],
    imageKey: 'mocha'
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'hot',
    price: 4.00,
    description: 'Double espresso shots lengthened with pure hot water, preserving the aromatic crema and nuanced flavors.',
    calories: '5 kcal',
    tags: ['Classic', 'Bold'],
    imageKey: 'espresso'
  },
  {
    id: 'flat_white',
    name: 'Flat White',
    category: 'hot',
    price: 5.00,
    description: 'Double ristretto espresso shots topped with a glossy, thin veil of velvety microfoam for a punchy coffee flavor.',
    calories: '140 kcal',
    tags: ['Double Ristretto', 'Microfoam'],
    imageKey: 'latte'
  },
  {
    id: 'caramel_macchiato',
    name: 'Caramel Macchiato',
    category: 'hot',
    price: 6.00,
    description: 'Steamed milk infused with Madagascar vanilla bean, marked with bold espresso and finished with house fleur de sel caramel.',
    calories: '240 kcal',
    tags: ['House Caramel', 'Fleur de Sel'],
    imageKey: 'cappuccino'
  },
  {
    id: 'chai_latte',
    name: 'Chai Latte',
    category: 'hot',
    price: 5.50,
    description: 'Slow-simmered Assam black tea steeped with crushed cardamom, cinnamon bark, ginger, and clover, steamed with whole milk.',
    calories: '190 kcal',
    tags: ['Slow Simmered', 'Spiced'],
    imageKey: 'latte'
  },
  {
    id: 'cortado',
    name: 'Cortado',
    category: 'hot',
    price: 4.50,
    description: 'An exact 1:1 balance of intense espresso "cut" with warm textured milk in a classic 4.5oz faceted Gibraltar glass.',
    calories: '60 kcal',
    tags: ['Gibraltar Glass', 'Balanced'],
    imageKey: 'espresso'
  },
  {
    id: 'croissant',
    name: 'Butter Croissant',
    category: 'pastry',
    price: 4.50,
    description: '72 layers of artisanal laminated puff pastry with cultured Normandy butter. Golden crisp exterior, tender honeycomb interior.',
    calories: '280 kcal',
    tags: ['Baked at 6 AM', 'Normandy Butter'],
    imageKey: 'croissant'
  },
  {
    id: 'scone',
    name: 'Blueberry Scone',
    category: 'pastry',
    price: 4.25,
    description: 'Tender crumb vanilla cream scone studded with wild Maine blueberries, finished with coarse demerara sugar crust.',
    calories: '310 kcal',
    tags: ['Wild Maine Berries', 'Demerara Crust'],
    imageKey: 'scone'
  },
  {
    id: 'almond_danish',
    name: 'Almond Danish',
    category: 'pastry',
    price: 5.00,
    description: 'Flaky butter pastry folded around sweet roasted almond frangipane, topped with toasted sliced almonds and powdered sugar.',
    calories: '340 kcal',
    tags: ['Almond Frangipane', 'Toasted Nuts'],
    imageKey: 'croissant'
  }
];

export const EVENT_PACKAGES: EventPackage[] = [
  {
    id: 'private',
    title: 'Private Events',
    tagline: 'Evening gatherings, celebrations & workshops',
    description: 'Reserve our full café space for intimate private dinners, team celebrations, or creative workshops. Includes two dedicated baristas, unlimited craft drink bar, and warm ambient sound setup.',
    capacity: 'Up to 45 guests',
    features: [
      'Full private buyout of interior & patio',
      'Two master baristas serving unlimited specialty drinks',
      'Curated jazz & acoustic audio playlist',
      'Setup & post-event cleanup included'
    ]
  },
  {
    id: 'catering',
    title: 'Catering & Office Drops',
    tagline: 'Freshly brewed carafes & artisan pastry boxes',
    description: 'Bring the warmth of Joe\'s Coffee directly to your studio or office. Thermal insulated dispensers keeping single-origin roasts piping hot, paired with freshly baked morning pastry boxes.',
    capacity: '10 to 120 people',
    features: [
      '96oz disposable coffee boxes & stainless carafes',
      'Pastry platters with mini croissants, scones & tarts',
      'Compostable cups, lids, sleeves, milks & sugars',
      'On-time morning doorstep delivery'
    ]
  },
  {
    id: 'custom_menus',
    title: 'Custom Roasts & Pairings',
    tagline: 'Collaborative tasting & branded favors',
    description: 'Work hand-in-hand with our head roaster to create a custom wedding blend, personalized printed bags, or a bespoke drink menu tailored to your company celebration.',
    capacity: 'Custom orders',
    features: [
      'Cupping & blend formulation session',
      'Custom stamped kraft bags with your monogram/logo',
      'Seasonal syrup pairings & bespoke signature drink',
      'Gift basket assembly & shipping'
    ]
  }
];
