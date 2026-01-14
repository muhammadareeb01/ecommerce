// Types
export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number; 
    wholesalePrice: number; 
    wholesaleMinQty: number;
    category: string;
    image: string;
    description: string;
    features: string[];
    isFeatured: boolean;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    image: string;
    description: string;
    faqs?: { question: string; answer: string; }[];
    gradient?: string;
    accent?: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface Review {
    id: string;
    author: string;
    role: string;
    text: string;
    rating: number;
}

// CMS Content Types
export interface HeroContent {
    headline: string;
    subheadline: string;
    backgroundImage: string;
    ctaPrimary: string;
    ctaSecondary: string;
}

// Mock Data
export const HERO_CONTENT: HeroContent = {
    headline: "America's #1 Wholesale \nVape Distributor",
    subheadline: "Direct pricing on the hottest disposable vapes, pods, and e-liquids. Crypto payments accepted for 10% off.",
    backgroundImage: "https://images.unsplash.com/photo-1534067783741-512d69f66008?auto=format&fit=crop&q=80&w=2000",
    ctaPrimary: "Request Order",
    ctaSecondary: "Browse Products"
}

export const REVIEWS: Review[] = [
    {
        id: 'r1',
        author: 'James D.',
        role: 'Vape Shop Owner, NYC',
        text: 'Best prices I\'ve found. The crystal bars fly off my shelves. Shipping is always on time.',
        rating: 5
    },
    {
        id: 'r2',
        author: 'Sarah M.',
        role: 'Distributor, FL',
        text: 'The crypto discount really adds up for bulk orders. Customer service on WhatsApp is top notch.',
        rating: 5
    },
    {
        id: 'r3',
        author: 'Mike R.',
        role: 'Online Retailer',
        text: 'Authentic products. Had issues with other suppliers before but Bulk Vapes is legit.',
        rating: 5
    }
];

export const CATEGORIES: Category[] = [
    {
        id: 'cat_thc',
        name: 'THC Vapes',
        slug: 'thc-vapes',
        image: 'https://images.unsplash.com/photo-1612447936671-50e50882d9d9?auto=format&fit=crop&q=80&w=500', 
        description: 'Premium THC disposables and cartridges. High potency, lab-tested.',
        gradient: 'from-[#01161e] to-[#124559]',
        accent: '#aec3b0',
        faqs: [
            { question: "Are these THC products lab tested?", answer: "Yes, all our THC products come with third-party lab results (COAs) to ensure potency and safety." },
            { question: "What is the shelf life of THC disposables?", answer: "Typically 12 months if stored in a cool, dark place away from direct sunlight." }
        ]
    },
    {
        id: 'cat_nic',
        name: 'Nicotine Vapes',
        slug: 'nicotine-vapes',
        image: 'https://images.unsplash.com/photo-1542475143-585ee5db30e7?auto=format&fit=crop&q=80&w=500',
        description: 'Top-selling nicotine disposables from major brands. Bulk wholesale pricing.',
        gradient: 'from-[#124559] to-[#598392]',
        accent: '#eff6e0',
        faqs: [
            { question: "What nicotine strengths are available?", answer: "Most disposables come in 5% (50mg) salt nicotine, but we also stock 0% and 3% options." },
            { question: "Do you sell authentic products?", answer: "100% Yes. We source directly from manufacturers or authorized master distributors." }
        ]
    },
    {
        id: 'cat_cbd',
        name: 'CBD Vapes',
        slug: 'cbd-vapes',
        image: 'https://images.unsplash.com/photo-1603912699214-9262ba94a320?auto=format&fit=crop&q=80&w=500',
        description: 'Non-psychoactive CBD vapes for wellness and relaxation.',
        gradient: 'from-[#598392] to-[#aec3b0]',
        accent: '#01161e',
        faqs: [
            { question: "Will CBD vapes get me high?", answer: "No, our CBD products contain less than 0.3% THC and are non-psychoactive." },
            { question: "Is shipping legal for CBD?", answer: "Yes, CBD products derived from hemp are federally legal to ship in the US." }
        ]
    }
];

export const PRODUCTS: Product[] = [
    // --- THC Vapes ---
    {
        id: 'thc_1',
        name: 'Fryd Extracts - Berry Blow Pop',
        slug: 'fryd-extracts-berry-blow-pop',
        price: 35.00,
        wholesalePrice: 18.00,
        wholesaleMinQty: 10,
        category: 'thc-vapes',
        image: '/images/product.png', // Placeholder, user can update
        description: 'Authentic Fryd Extracts 2g Live Resin Disposable. Berry Blow Pop flavor.',
        features: ['2g Live Resin', 'Rechargeable', 'Lab Tested'],
        isFeatured: true
    },
    {
        id: 'thc_2',
        name: 'Packman Disposables - Peachy Nerdz',
        slug: 'packman-disposables-peachy-nerdz',
        price: 32.00,
        wholesalePrice: 16.50,
        wholesaleMinQty: 10,
        category: 'thc-vapes',
        image: '/images/product.png',
        description: 'Packman 2g Disposable Vape. Sweet and tangy Peachy Nerdz flavor.',
        features: ['2g Capacity', 'High Potency', 'Liquid Diamonds'],
        isFeatured: true
    },
    {
        id: 'thc_3',
        name: 'Backpackboyz - White Cherry Gelato',
        slug: 'backpackboyz-white-cherry-gelato',
        price: 40.00,
        wholesalePrice: 22.00,
        wholesaleMinQty: 10,
        category: 'thc-vapes',
        image: '/images/product.png',
        description: 'Official Backpackboyz 1g Disposable. White Cherry Gelato strain.',
        features: ['1g Premium Oil', 'Ceramic Coil', 'Exotic Strain'],
        isFeatured: true
    },
     {
        id: 'thc_4',
        name: 'Muha Meds - Mavericks',
        slug: 'muha-meds-mavericks',
        price: 30.00,
        wholesalePrice: 15.00,
        wholesaleMinQty: 20,
        category: 'thc-vapes',
        image: '/images/product.png',
        description: 'Muha Meds 2g Melted Diamonds. Mavericks flavor profile.',
        features: ['Melted Diamonds', '2000mg', 'Sativa Dominant'],
        isFeatured: false
    },

    // --- Nicotine Vapes ---
    {
        id: 'nic_1',
        name: 'Elf Bar BC5000 - Watermelon Ice',
        slug: 'elf-bar-bc5000-watermelon-ice',
        price: 18.99,
        wholesalePrice: 8.50,
        wholesaleMinQty: 20,
        category: 'nicotine-vapes',
        image: '/images/product.png',
        description: 'Original Elf Bar BC5000. Refreshing Watermelon Ice flavor.',
        features: ['5000 Puffs', 'Rechargeable', '5% Nicotine'],
        isFeatured: true
    },
    {
        id: 'nic_2',
        name: 'Lost Mary MO5000 - Blue Trio',
        slug: 'lost-mary-mo5000-blue-trio',
        price: 19.99,
        wholesalePrice: 9.00,
        wholesaleMinQty: 20,
        category: 'nicotine-vapes',
        image: '/images/product.png',
        description: 'Lost Mary MO5000 disposable. Blue Raspberry, Blueberry & Pomegranate.',
        features: ['5000 Puffs', 'Mesh Coil', 'Ergonomic Design'],
        isFeatured: false
    },
    {
        id: 'nic_3',
        name: 'Geek Bar Pulse - Mexico Mango',
        slug: 'geek-bar-pulse-mexico-mango',
        price: 22.99,
        wholesalePrice: 10.50,
        wholesaleMinQty: 15,
        category: 'nicotine-vapes',
        image: '/images/product.png',
        description: 'Geek Bar Pulse with full LED screen. Sweet Mexico Mango flavor.',
        features: ['15000 Puffs', 'Pulse Mode', 'Smart Screen'],
        isFeatured: true
    },

    // --- CBD Vapes ---
    {
        id: 'cbd_1',
        name: 'JustCBD 1000mg - Pineapple Express',
        slug: 'justcbd-1000mg-pineapple-express',
        price: 25.00,
        wholesalePrice: 12.00,
        wholesaleMinQty: 10,
        category: 'cbd-vapes',
        image: '/images/product.png',
        description: 'Full spectrum CBD vape cartridge. Pineapple Express terpene profile.',
        features: ['1000mg CBD', 'No THC', 'Natural Terpenes'],
        isFeatured: false
    },
    {
        id: 'cbd_2',
        name: 'Koi CBD Disposable - Tropical',
        slug: 'koi-cbd-disposable-tropical',
        price: 27.99,
        wholesalePrice: 13.50,
        wholesaleMinQty: 10,
        category: 'cbd-vapes',
        image: '/images/product.png',
        description: 'Koi CBD disposable vape bar. Tropical fruit mix.',
        features: ['2g Device', 'Hemp Derived', 'Relaxation'],
        isFeatured: false
    }
];

export const FAQS: FaqItem[] = [
    {
        question: "What is the Minimum Order Quantity (MOQ)?",
        answer: "Our general MOQ for wholesale accounts is $500 per order, or 50 units for specific product lines."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries. Shipping rates and times vary by location."
    },
    {
        question: "How do I pay with Crypto?",
        answer: "Select 'Crypto Payment' at the order form. You will receive a 10% discount. We accept BTC, ETH, and USDT."
    },
    {
        question: "Are your products authentic?",
        answer: "Yes, we guarantee 100% authenticity. We source directly from manufacturers and authorized distributors."
    }
];
