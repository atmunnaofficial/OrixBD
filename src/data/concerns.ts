export interface Concern {
  id: string;
  name: string;
  desc: string;
  link: string;
  icon: string;
  location?: string;
  phone?: string;
  highlights: string[];
}

export const concernsData: Concern[] = [
  {
    id: 'washing',
    name: 'Orix Washing Project',
    desc: 'Comprehensive garment wet processing & dry processing solutions equipped with modern sustainable washing technology.',
    link: '/washing',
    icon: '🧼',
    location: 'Gazipur',
    phone: '+880 1700-000001',
    highlights: [
      'Wet & Dry Processing',
      'Sustainable ETP Plant',
      'Eco-Dyeing Technology',
    ],
  },
  {
    name: 'Orix Packaging & Accessories',
    id: 'packaging',
    desc: 'All-in-one industrial packaging and garment accessory manufacturing including corrugated cartons, polybags, and trims.',
    link: '/packaging',
    icon: '📦',
    location: 'Tongi',
    phone: '+880 1700-000002',
    highlights: [
      'Custom Corrugated Boxes',
      'Garment Trims & Labels',
      'High-Strength Polybags',
    ],
  },
  {
    id: 'water-pump',
    name: 'Orix Water Pump',
    desc: 'Manufacturing high-performance agricultural, commercial, and heavy industrial water pumps for nationwide supply.',
    link: '/water-pump',
    icon: '⚙️',
    location: 'Narayanganj',
    phone: '+880 1700-000003',
    highlights: [
      'Agricultural Irrigation',
      'Industrial Deep Well Pumps',
      'Commercial Water Motors',
    ],
  },
  {
    id: 'denim',
    name: 'Denim Creation',
    desc: 'Specialized denim washing, premium laser distressing, vintage treatments, and high-end apparel finishing.',
    link: '/denim-creation',
    icon: '👖',
    location: 'Ashulia',
    phone: '+880 1700-000004',
    highlights: [
      'Special Denim Washing',
      'Laser & Ozone Finishing',
      'Global Export Quality',
    ],
  },
  {
    id: 'agro',
    name: 'Orix Agro Farm',
    desc: 'Integrated agro & commercial dairy farm supplying fresh milk, poultry (ducks, chickens, pigeons), cattle, goats, camels, and dumbas.',
    link: '/agro-farm',
    icon: '🌾',
    location: 'Bogra',
    phone: '+880 1700-000005',
    highlights: [
      'Fresh Pure Dairy Milk',
      'Cattle, Camel & Dumba Farm',
      'Poultry & Commercial Livestock',
    ],
  },
];
