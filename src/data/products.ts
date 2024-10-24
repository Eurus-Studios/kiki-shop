import { shades } from './shades';

export interface Product {
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    price: number;
    originalPrice: number;
    images: string[];
    shades: typeof shades;
    details: {
        description: string;
        ingredients: string;
        howToUse: string[];
    };
    sampleUrl: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "UNAPOLOGETIC Lasting Finish Foundation",
        description: "Long Days, Late Nights, Fresh Finish: Unapologetic Foundation",
        shortDescription: "12 shades of lightweight, 16-hour wear with SPF protection, moisture-lock, and sweat-resistant technology—crafted to celebrate every dusky skin tone.",
        price: 799,
        originalPrice: 1199,
        images: ["/assets/product1.png", "/assets/product2.png"],
        shades: shades,
        details: {
            description: "Experience flawless coverage that lasts all day with our Unapologetic Foundation. This lightweight formula provides medium to full coverage while feeling weightless on your skin. Enriched with SPF protection and moisture-locking technology, it keeps your skin protected and hydrated throughout the day.",
            ingredients: "Aqua, Cyclopentasiloxane, Dimethicone, Ethylhexyl Methoxycinnamate, Titanium Dioxide, Glycerin, Butylene Glycol, Aluminum Hydroxide, Stearic Acid, Phenoxyethanol, Tocopheryl Acetate, Retinyl Palmitate",
            howToUse: [
                "Start with clean, moisturized skin",
                "Apply primer if desired",
                "Pump a small amount onto the back of your hand",
                "Using a foundation brush or beauty sponge, blend from the center of your face outward",
                "Build coverage as needed"
            ]
        },
        sampleUrl: "/sample/foundation.mp4"
    },
    {
        id: 2,
        name: "Cherry Lipstick",
        description: "Sleek, sultry, and seductive.",
        shortDescription: "A velvety matte lipstick with a glossy finish that enhances your natural lip color.",
        price: 899,
        originalPrice: 1200,
        images: ["https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//e/l/elizabeth-arden-lip-color-lipstick-17-cherry-blaze-4g.jpg", "https://diambeauty.com/cdn/shop/files/FINALSWATCHIMAGE_422e8482-f844-4e28-8cf1-cae220a66251.jpg?v=1708593806&width=3000"],
        shades: shades.slice(-8),
        details: {
            description: "Experience flawless coverage that lasts all day with our Unapologetic Foundation. This lightweight formula provides medium to full coverage while feeling weightless on your skin. Enriched with SPF protection and moisture-locking technology, it keeps your skin protected and hydrated throughout the day.",
            ingredients: "Aqua, Cyclopentasiloxane, Dimethicone, Ethylhexyl Methoxycinnamate, Titanium Dioxide, Glycerin, Butylene Glycol, Aluminum Hydroxide, Stearic Acid, Phenoxyethanol, Tocopheryl Acetate, Retinyl Palmitate",
            howToUse: [
                "Start with clean, moisturized skin",
                "Apply primer if desired",
                "Pump a small amount onto the back of your hand",
                "Using a foundation brush or beauty sponge, blend from the center of your face outward",
                "Build coverage as needed"
            ]
        },
        sampleUrl: "/sample/foundation.mp4"
    }
];
