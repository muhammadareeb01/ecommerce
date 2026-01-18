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
        id: 'cat_thca',
        name: 'THCA Vapes',
        slug: 'thca-vapes',
        image: 'https://images.unsplash.com/photo-1629196911514-cfd8d63f6311?auto=format&fit=crop&q=80&w=500', 
        description: 'Legal hemp-derived THCA disposables and carts. Potent and compliant.',
        gradient: 'from-[#01161e] to-[#598392]',
        accent: '#aec3b0',
        faqs: [
            { question: "Is THCA legal?", answer: "Yes, our THCA products are hemp-derived and federally legal under the 2018 Farm Bill (containing less than 0.3% Delta-9 THC)." },
            { question: "Do you offer bulk THCA pricing?", answer: "Absolutely. We specialize in bulk THCA supply for retailers." }
        ]
    },
    {
        id: 'cat_cartridges',
        name: 'Vape Cartridges',
        slug: 'vape-cartridges',
        image: 'https://images.unsplash.com/photo-1542475143-585ee5db30e7?auto=format&fit=crop&q=80&w=500', 
        description: 'High-quality vape cartridges for THC, CBD, and other distillates.',
        gradient: 'from-[#124559] to-[#aec3b0]',
        accent: '#eff6e0',
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
        image: '/images/product.png',
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

    // --- THCA Vapes (Example Product) ---
    {
        id: 'thca_1',
        name: 'Hidden Hills 2g Live Res - London Pound Cake',
        slug: 'hidden-hills-2g-live-res-london-pound-cake',
        price: 38.00,
        wholesalePrice: 19.50,
        wholesaleMinQty: 10,
        category: 'thca-vapes', // matches the new slug
        image: '/images/product.png',
        description: 'Hidden Hills Club 2g Live Resin + THCA blend. London Pound Cake strain.',
        features: ['2g Blend', 'THCA + D9', 'Indica'],
        isFeatured: false
    },
     // --- Cartridges (Example) ---
    {
        id: 'cart_1',
        name: 'Cake 1g Cart - Wedding Cake',
        slug: 'cake-1g-cart-wedding-cake',
        price: 20.00,
        wholesalePrice: 10.00,
        wholesaleMinQty: 20,
        category: 'vape-cartridges',
        image: '/images/product.png',
        description: 'Cake 510 Thread Cartridge. Wedding Cake strain.',
        features: ['1g Ceramic', '510 Thread', 'High Terpenes'],
        isFeatured: false
    }
];

export const FAQS: FaqItem[] = [
    {
        question: "Where can I buy vapes in bulk in the USA?",
        answer: "You can order directly from BulkVapes.us by submitting a bulk order request."
    },
    {
        question: "How do I buy vapes in bulk?",
        answer: "Add products to cart, submit the order form, and our team will contact you with payment instructions."
    },
    {
        question: "Do I get a discount when paying with crypto?",
        answer: "Yes, crypto payments receive a 10% discount. We accept BTC, ETH, and USDT."
    },
    {
        question: "How long does delivery take?",
        answer: "Delivery times depend on order size and location but are typically fast within the USA."
    }
];
