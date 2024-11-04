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
        images: ["/assets/foundation-1.jpg", "/assets/foundation-2.jpg", "/assets/foundation-3.jpg", "/assets/foundation-4.jpg"],
        shades: shades,
        details: {
            description: `
                <div class="space-y-8">
                  <h2 class="text-xl font-bold">Long Days, Late Nights, Fresh Finish: Unapologetic Foundation</h2>
                  
                  <div>
                    <h3 class="text-lg font-semibold mb-3">Straight Up:</h3>
                    <p>
                      Embrace confidence with Unapologetic, the foundation crafted for dusky skin with 12 perfectly matched shades. 
                      Enjoy up to 16 hours of breathable, lightweight coverage with added sun protection, moisturizing care, and 
                      sweat resistance. From a natural glow to a buildable flawless finish, Unapologetic ensures your skin stays 
                      fresh, radiant, and unapologetically you.
                    </p>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold mb-3">The Lowdown:</h3>
                    <ul class="list-disc pl-5 space-y-2">
                      <li>Longwear, shine-free, soft matte finish</li>
                      <li>Light as air and undetectable on skin so you always look like you</li>
                      <li>All day comfortable wear</li>
                      <li>Medium to Full Buildable Coverage</li>
                      <li>Instantly smooths and diffuses the look of pores</li>
                      <li>Perfect for all skin types</li>
                      <li>Non Comedogenic</li>
                      <li>Engineered with advanced 16-hour breathable wear, SPF protection, sweat-resistant polymers, and moisture-lock technology to maintain a natural, hydrated finish under all conditions.</li>
                      <li>Available in 12 shades</li>
                    </ul>
                  </div>

                  <p class="italic">
                    Whether you're embracing a subtle everyday glow or building up for a night out, this foundation has you covered. 
                    Unapologetic is more than just makeup—it's a celebration of your skin, empowering you to shine unapologetically.
                  </p>
                  
                
                  

                </div>
            `,
            ingredients: `
                <div class="space-y-6">
                    <h3 class="text-lg font-semibold">Nature's Finest For Your Skin</h3>
                    
                    <p class="text-gray-600">
                        Our products are formulated using raw, food grade, organic, wildcrafted, and natural ingredients. 
                        We are also in constant pursuit of new technologies to set the bar even higher to provide even 
                        greater efficacy, innovation, and overall wellness.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                        <div class="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                            <div class="aspect-square rounded-lg overflow-hidden mb-4">
                                <img 
                                    src="/assets/p1-ing1.webp" 
                                    alt="Hyaluronic Acid" 
                                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <span class="block text-center font-medium text-gray-800">Hyaluronic Acid</span>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                            <div class="aspect-square rounded-lg overflow-hidden mb-4">
                                <img 
                                    src="/assets/p1-ing2.jpg" 
                                    alt="Pomegranate Seed Oil" 
                                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <span class="block text-center font-medium text-gray-800">Pomegranate Seed Oil</span>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                            <div class="aspect-square rounded-lg overflow-hidden mb-4">
                                <img 
                                    src="/assets/p1-ing3.png" 
                                    alt="Avocado Butter" 
                                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <span class="block text-center font-medium text-gray-800">Avocado Butter</span>
                        </div>
                    </div>

                    <div class="mt-4">
                        <button 
                            class="text-sm text-gray-600 underline cursor-pointer hover:text-gray-800"
                            onclick="document.getElementById('ingredientsList').classList.toggle('hidden')"
                        >
                            View Full Ingredients List
                        </button>
                        
                        <div id="ingredientsList" class="hidden mt-2 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                            AQUA/WATER/EAU, DIMETHICONE, TALC, PEG-10 DIMETHICONE, TRIMETHYLSILOXYSILICATE, 
                            POLYPROPYLENE, ISODODECANE, CETYL PEG/PPG-10/1 DIMETHICONE, NYLON-12, 
                            HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, PHENOXYETHANOL, SODIUM CHLORIDE, 
                            HYDROGEN DIMETHICONE, GLYCERIN, MAGNESIUM SULFATE, SODIUM DEHYDROACETATE, 
                            DISTEARDIMONIUM HECTORITE, ALUMINUM HYDROXIDE, METHICONE, BENZOIC ACID, 
                            DEHYDROACETIC ACID, PROPYLENE CARBONATE, ETHYLHEXYLGLYCERIN, PARFUM/FRAGRANCE, 
                            SILICA, BIOSACCHARIDE GUM-4, PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE, 
                            ANANAS SATIVUS (PINEAPPLE) FRUIT EXTRACT, CARICA PAPAYA (PAPAYA) FRUIT EXTRACT, 
                            PAULLINIA CUPANA SEED EXTRACT, POTASSIUM SORBATE, TOCOPHEROL, SORBIC ACID. 
                            MAY CONTAIN/PEUT CONTENIR (+/-): TITANIUM DIOXIDE (CI 77891), 
                            IRON OXIDES (CI 77491, CI 77492, CI 77499).
                        </div>
                    </div>
                </div>
            `,
            howToUse: [
                "Ace a lumi-matte base in 3 simple steps",
                "Step 1: Moisturize well and use a Dewy Primer",
                "Step 2: Take a few drops of the KiKi Unapologetic Lasting Finish Foundation and dot it all over your face and neck.",
                "Step 3: Blend this lightweight yet buildable to full coverage foundation using your fingertips, brush or a beauty blender for a luminous matte look."
            ]
        },
        sampleUrl: "/sample/foundation.mp4"
    },
    {
        id: 2,
        name: "Fade and Flaunt Unfiltered Concealer",
        description: "INSTANT PHOTO-SOFT COVERAGE FOR ALL. LONGWEAR, LIGHT AS AIR, CREASE PROOF.",
        shortDescription: "Whether you're covering up last night's stories or today's dark circles, this buildable concealer is your secret weapon for a natural, unfiltered look that lasts all day.",
        price: 699,
        originalPrice: 799,
        images: ["/assets/concealer-1.jpg", "/assets/concealer-2.jpg", "/assets/concealer-3.jpg"],
        shades: shades,
        details: {
            description: `
                <div class="space-y-6">
                    <h2 class="text-xl font-bold">INSTANT PHOTO-SOFT COVERAGE FOR ALL. LONGWEAR, LIGHT AS AIR, CREASE PROOF.</h2>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-3">Straight Up:</h3>
                        <div class="space-y-4">
                            <p class="text-gray-600">
                                Whether you're covering up last night's stories or today's dark circles, Fade and Flaunt Unfiltered 
                                Concealer has you covered—literally. This buildable, medium-to-full coverage concealer is your secret 
                                weapon for brightening under-eyes, blurring blemishes, and vanishing dark spots. Lightweight yet 
                                powerful, it's designed to give you that natural, unfiltered look while staying true to your skin.
                            </p>
                            
                            <p class="text-gray-600">
                                Our creamy, breathable formula blends seamlessly, offering a smooth, soft-matte finish that lasts all 
                                day—no creasing, no caking, no compromises. Sweat-resistant and long-wearing, Fade and Flaunt keeps 
                                up with your wildest nights and busiest days, leaving you looking fresh no matter how late you stay out.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold mb-3">The Lowdown:</h3>
                        <ul class="list-disc pl-5 space-y-2">
                            <li class="text-gray-600">
                                Easily buildable formula that blurs blemishes, brightens under-eyes, and fades dark spots while 
                                staying true to your skin.
                            </li>
                            <li class="text-gray-600">
                                Creamy texture blends seamlessly, offering a natural, unfiltered look without creasing or caking.
                            </li>
                            <li class="text-gray-600">
                                Keeps you looking fresh and flawless from sunrise to last call—no touch-ups needed.
                            </li>
                            <li class="text-gray-600">
                                Effortlessly spot-conceal, contour, or highlight with a flexible applicator that puts you in control.
                            </li>
                            <li class="text-gray-600">
                                Vegan, cruelty-free, and paraben-free—because you deserve coverage that's as kind as it is effective.
                            </li>
                        </ul>
                    </div>

                  
                </div>
            `,
            ingredients: `
                <div class="space-y-6">
                    <h3 class="text-lg font-semibold">Nature's Finest For Your Skin</h3>
                    
                    <p class="text-gray-600">
                        Our products are formulated using raw, food grade, organic, wildcrafted, and natural ingredients. 
                        We are also in constant pursuit of new technologies to set the bar even higher to provide even 
                        greater efficacy, innovation, and overall wellness.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                        <div class="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                            <div class="aspect-square rounded-lg overflow-hidden mb-4">
                                <img 
                                    src="/assets/p2-ing1.jpg" 
                                    alt="Sweet Almond Oil" 
                                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <span class="block text-center font-medium text-gray-800">Sweet Almond Oil</span>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                            <div class="aspect-square rounded-lg overflow-hidden mb-4">
                                <img 
                                    src="/assets/p2-ing2.avif" 
                                    alt="Liquorice" 
                                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <span class="block text-center font-medium text-gray-800">Liquorice</span>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                            <div class="aspect-square rounded-lg overflow-hidden mb-4">
                                <img 
                                    src="/assets/p2-ing3.jpg" 
                                    alt="Cica" 
                                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <span class="block text-center font-medium text-gray-800">Cica</span>
                        </div>
                    </div>

                    <div class="mt-4">
                        <button 
                            class="text-sm text-gray-600 underline cursor-pointer hover:text-gray-800"
                            onclick="document.getElementById('ingredientsList').classList.toggle('hidden')"
                        >
                            See Full Ingredients
                        </button>
                        
                        <div id="ingredientsList" class="hidden mt-2 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                            AQUA/WATER/EAU, HYDROGENATED DIDECENE, HYDROGENATED POLYISOBUTENE, TRIMETHYLSILOXYSILICATE, 
                            CETYL PEG/PPG-10/1 DIMETHICONE, GLYCERIN, NYLON-12, DIMETHICONE, DISTEARDIMONIUM HECTORITE, 
                            ACRYLATES/POLYTRIMETHYLSILOXYMETHACRYLATE COPOLYMER, METHICONE, SODIUM CHLORIDE, 
                            POLYMETHYLSILSESQUIOXANE, HYDROGENATED STYRENE/ISOPRENE COPOLYMER, HYDROXYACETOPHENONE, 
                            LAURYL PEG-8 DIMETHICONE, HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, 1,2-HEXANEDIOL, 
                            CAPRYLYL GLYCOL, TOCOPHERYL ACETATE, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, TALC, 
                            LAUROYL LYSINE, COMBRETUM FRUTICOSUM FLOWER NECTAR, ALCOHOL, BUTYLENE GLYCOL, 
                            PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE, CENTELLA ASIATICA LEAF EXTRACT, 
                            CAMELLIA SINENSIS LEAF EXTRACT. MAY CONTAIN/PEUT CONTENIR (+/-): TITANIUM DIOXIDE (CI 77891), 
                            IRON OXIDES (CI 77491, CI 77492, CI 77499).
                        </div>
                    </div>
                </div>
            `,
            howToUse: [
                "Perfect your concealer application in two simple steps",
                "Step 1: Using the tapered tip, swipe from inner corners diagonally to just beyond under eyes to disguise dark circles or dot onto small imperfections and gently tap to blend.",
                "Step 2: Layer over Corrector to disguise stubborn dark circles. Swipe the central reservoir side on redness or any unevenness, then use a finger to seamlessly blend out"
            ]
        },
        sampleUrl: "/sample/concealer.mp4"
    }
];
