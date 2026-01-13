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
    subheadline: "Direct pricing on the hottest disposable vapes, pods, and e-liquids. Crypto payments accepted for 5% off.",
    backgroundImage: "https://images.unsplash.com/photo-1534067783741-512d69f66008?auto=format&fit=crop&q=80&w=2000",
    ctaPrimary: "Start Ordering",
    ctaSecondary: "Wholesale Inquiry"
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
        id: 'cat_1',
        name: 'Disposable Vapes',
        slug: 'disposable-vapes',
        image: 'https://images.unsplash.com/photo-1574926054530-540288c8e678?auto=format&fit=crop&q=80&w=500', 
        description: 'Premium disposable vapes for on-the-go satisfaction.'
    },
    {
        id: 'cat_2',
        name: 'E-Liquids',
        slug: 'e-liquids',
        image: 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&q=80&w=500', 
        description: 'A wide variety of flavors and nicotine strengths.'
    },
    {
        id: 'cat_3',
        name: 'Pod Systems',
        slug: 'pod-systems',
        image: 'https://images.unsplash.com/photo-1612447936671-50e50882d9d9?auto=format&fit=crop&q=80&w=500',
        description: 'Refillable and pre-filled pod systems.'
    },
    {
        id: 'cat_4',
        name: 'Starter Kits',
        slug: 'starter-kits',
        image: 'https://images.unsplash.com/photo-1565551390466-99c546255d64?auto=format&fit=crop&q=80&w=500',
        description: 'Everything you need to start your vaping journey.'
    }
];

export const PRODUCTS: Product[] = [
    {
        id: 'prod_1',
        name: 'Crystal Bar 600',
        slug: 'crystal-bar-600',
        price: 5.99,
        wholesalePrice: 2.50,
        wholesaleMinQty: 50,
        category: 'disposable-vapes',
        image: '/images/product.png',
        description: 'The Crystal Bar 600 is a sleek, pocket-friendly disposable vape device.',
        features: ['600 Puffs', '2ml E-Liquid', '20mg Nicotine', 'Mesh Coil'],
        isFeatured: true
    },
    {
        id: 'prod_2',
        name: 'Elf Bar 6000',
        slug: 'elf-bar-6000',
        price: 12.99,
        wholesalePrice: 6.00,
        wholesaleMinQty: 20,
        category: 'disposable-vapes',
        image: 'https://images.unsplash.com/photo-1534942296062-0b1a8d05ee0e?auto=format&fit=crop&q=80&w=600',
        description: 'Long-lasting disposable vape with rechargeable battery.',
        features: ['6000 Puffs', 'Rechargeable USB-C', '13ml E-Liquid'],
        isFeatured: true
    },
    {
        id: 'prod_3',
        name: 'Fruit Fusion E-Liquid',
        slug: 'fruit-fusion-eliquid',
        price: 14.99,
        wholesalePrice: 7.50,
        wholesaleMinQty: 10,
        category: 'e-liquids',
        image: 'https://images.unsplash.com/photo-1550963295-019d8a8a61c5?auto=format&fit=crop&q=80&w=600',
        description: 'A tropical blend of mango, pineapple, and kiwi.',
        features: ['70/30 VG/PG', '100ml Shortfill', '0mg / 3mg'],
        isFeatured: false
    },
    {
        id: 'prod_4',
        name: 'Pro Pod X',
        slug: 'pro-pod-x',
        price: 29.99,
        wholesalePrice: 15.00,
        wholesaleMinQty: 5,
        category: 'pod-systems',
        image: 'https://images.unsplash.com/photo-1647864356707-d3da8490214a?auto=format&fit=crop&q=80&w=600',
        description: 'High-performance pod system with adjustable airflow.',
        features: ['25W Max Output', 'OLED Screen', 'Type-C Charging'],
        isFeatured: true
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
        answer: "Select 'Crypto Payment' at the order form. You will receive a 5% discount. We accept BTC, ETH, and USDT."
    },
    {
        question: "Are your products authentic?",
        answer: "Yes, we guarantee 100% authenticity. We source directly from manufacturers and authorized distributors."
    }
];
