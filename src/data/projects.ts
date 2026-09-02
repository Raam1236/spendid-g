import { Project } from '@/types';
import { SPLENDID_LAKE_BREEZ_ELEVATION_IMAGE } from '@/data/splendidLakeBreezImage';

// Hero Images
import splendidTimesSquareHero from '@/assets/images/regenerated_image_1786784513531.png';
import splendidEliteHero from '@/assets/images/regenerated_image_1786810371160.png';
import splendidSkywalkHero from '@/assets/images/regenerated_image_1786810497555.png';
import splendidPlazaHero from '@/assets/images/regenerated_image_1786810718786.png';
import skylinesHero from '@/assets/images/regenerated_image_1786810833457.png';
import lakeDewsHero from '@/assets/images/regenerated_image_1786811005969.png';

// Lake Breez Gallery
import lakeBreezGalleryTwo from '@/assets/images/regenerated_image_1787079127331.png';
import lakeBreezGalleryThree from '@/assets/images/regenerated_image_1787330551780.png';
import lakeBreezGalleryFour from '@/assets/images/regenerated_image_1787079133897.png';
import lakeBreezGalleryFive from '@/assets/images/regenerated_image_1787079138346.png';
import lakeBreezGallerySix from '@/assets/images/regenerated_image_1787079140596.png';

// Splendid Times Square & Unified Project Gallery
import timesSquareGalleryTwo from '@/assets/images/regenerated_image_1786985665065.png';
import timesSquareGalleryThree from '@/assets/images/regenerated_image_1786985668577.png';
import timesSquareGalleryFour from '@/assets/images/regenerated_image_1786985984819.png';
import timesSquareGalleryFive from '@/assets/images/regenerated_image_1786986364534.png';
import timesSquareGallerySix from '@/assets/images/regenerated_image_1786986368755.png';

export const UNIFIED_PROJECT_GALLERY: string[] = [
  splendidTimesSquareHero,
  timesSquareGalleryTwo,
  timesSquareGalleryThree,
  timesSquareGalleryFour,
  timesSquareGalleryFive,
  timesSquareGallerySix
];

export const LAKE_BREEZ_GALLERY: string[] = [
  SPLENDID_LAKE_BREEZ_ELEVATION_IMAGE,
  lakeBreezGalleryTwo,
  lakeBreezGalleryThree,
  lakeBreezGalleryFour,
  lakeBreezGalleryFive,
  lakeBreezGallerySix
];

// Splendid Elite Gallery
import eliteGalleryTwo from '@/assets/images/regenerated_image_1786811143448.png';
import eliteGalleryThree from '@/assets/images/regenerated_image_1787075174896.png';
import eliteGalleryFour from '@/assets/images/regenerated_image_1787075178539.png';
import eliteGalleryFive from '@/assets/images/regenerated_image_1787075392433.png';
import eliteGallerySix from '@/assets/images/regenerated_image_1787076463169.png';

export const SPLENDID_ELITE_GALLERY: string[] = [
  splendidEliteHero,
  eliteGalleryTwo,
  eliteGalleryThree,
  eliteGalleryFour,
  eliteGalleryFive,
  eliteGallerySix
];

// Lake Dews Gallery
import lakeDewsGalleryTwo from '@/assets/images/regenerated_image_1787074696920.png';
import lakeDewsGalleryThree from '@/assets/images/regenerated_image_1787074700501.png';
import lakeDewsGalleryFour from '@/assets/images/regenerated_image_1787074834900.png';
import lakeDewsGalleryFive from '@/assets/images/regenerated_image_1787074838983.png';
import lakeDewsGallerySix from '@/assets/images/regenerated_image_1787074960265.png';

export const LAKE_DEWS_GALLERY: string[] = [
  lakeDewsHero,
  lakeDewsGalleryTwo,
  lakeDewsGalleryThree,
  lakeDewsGalleryFour,
  lakeDewsGalleryFive,
  lakeDewsGallerySix
];

// Skylines Gallery
import skylinesGalleryTwo from '@/assets/images/regenerated_image_1786986531990.png';
import skylinesGalleryThree from '@/assets/images/regenerated_image_1786986536502.png';
import skylinesGalleryFour from '@/assets/images/regenerated_image_1786783480079.png';
import skylinesGalleryFive from '@/assets/images/regenerated_image_1786553379611.png';

export const SKYLINES_GALLERY: string[] = [
  skylinesHero,
  skylinesGalleryTwo,
  skylinesGalleryThree,
  skylinesGalleryFour,
  skylinesGalleryFive
];

// Skywalk & Plaza Gallery
import skywalkGalleryTwo from '@/assets/images/regenerated_image_1786811257864.png';
import plazaGalleryTwo from '@/assets/images/regenerated_image_1786811395409.png';

export const SKYWALK_GALLERY: string[] = [
  splendidSkywalkHero,
  skywalkGalleryTwo,
  timesSquareGalleryThree,
  timesSquareGalleryFour,
  timesSquareGalleryFive
];

export const PLAZA_GALLERY: string[] = [
  splendidPlazaHero,
  plazaGalleryTwo,
  timesSquareGalleryTwo,
  timesSquareGalleryThree,
  timesSquareGalleryFour
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'splendid-lake-breez',
    slug: 'splendid-lake-breez',
    name: 'Splendid Lake Breez',
    location: 'Begur, Bengaluru',
    sublocation: 'Begur Main Road, Near Hulimavu Lake',
    configuration: '2 & 3 BHK Lake-Facing Residences',
    propertyType: 'Residential',
    status: 'Ongoing',
    reraNumber: 'PRM/KA/RERA/1251/310/PR/181210/002201',
    priceRange: '₹88 Lakhs - ₹1.45 Cr',
    startingPriceNum: 8800000,
    totalUnits: 184,
    possessionDate: 'Ready to Move / Q4 2026',
    shortDescription: 'Sanctuary of calm overlooking the serene waters of Begur Lake. Masterful architecture harmonizing natural breezes, expansive balconies and contemporary interior layouts.',
    longDescription: 'Splendid Lake Breez represents the pinnacle of waterfront urban living in South Bengaluru. Intentionally designed to capture maximum natural cross-ventilation and uninterrupted lake views, each residence is built with meticulous attention to structural acoustics, premium fittings, and open floor planning.',
    story: 'Designed around the natural contours and rhythms of South Bengaluru lake ecosystem, Splendid Lake Breez bridges the gap between serene waterfront tranquillity and immediate access to IT corridors like Electronic City and Bannerghatta Road.',
    heroImage: SPLENDID_LAKE_BREEZ_ELEVATION_IMAGE,
    gallery: LAKE_BREEZ_GALLERY,
    featured: true,
    coordinates: { lat: 12.879, lng: 77.625 },
    amenities: [
      { name: 'Infinity Lake-View Pool', category: 'Wellness', iconName: 'Waves', description: 'Temperature-controlled swimming pool with sunken deck overlooking Begur Lake' },
      { name: 'Sky Fitness Pavilion', category: 'Fitness', iconName: 'Dumbbell', description: 'Fully equipped gymnasium with floor-to-ceiling panoramic glass windows' },
      { name: 'Multipurpose Clubhouse', category: 'Community', iconName: 'Users', description: 'Private banquet hall, coffee lounge, and indoor games room' },
      { name: 'Reflexology Trail & Garden', category: 'Landscape', iconName: 'Trees', description: 'Landscaping designed with indigenous flora and acoustic water streams' },
      { name: 'EV Charging Infrastructure', category: 'Eco', iconName: 'Zap', description: 'Dedicated high-speed electric vehicle charging docks in basement' },
      { name: '3-Tier Biometric Security', category: 'Security', iconName: 'ShieldCheck', description: '24/7 CCTV surveillance, video door phones and smart access barriers' }
    ],
    floorPlans: [
      {
        id: 'lb-2bhk-a',
        title: '2 BHK Horizon Suite',
        type: '2 BHK + 2 Bath',
        sqft: 1185,
        priceEstimate: '₹88.8 Lakhs*',
        bedrooms: 2,
        bathrooms: 2,
        balconies: 2,
        image: '/floorplan-3bhk.jpg',
        features: ['Lake-facing master bedroom balcony', 'Separate utility zone next to kitchen', 'Vastu-compliant East facing entry']
      },
      {
        id: 'lb-3bhk-b',
        title: '3 BHK Royal Pavilion',
        type: '3 BHK + 3 Bath',
        sqft: 1540,
        priceEstimate: '₹1.15 Cr*',
        bedrooms: 3,
        bathrooms: 3,
        balconies: 3,
        image: '/floorplan-2bhk.jpg',
        features: ['Expansive 18ft corner balcony', 'Walk-in wardrobe room in Master Suite', 'Private foyer entry space']
      }
    ],
    specs: [
      { category: 'Structure', detail: 'RCC framed structure designed for Seismic Zone III compliance with solid concrete block masonry.' },
      { category: 'Flooring', detail: 'Italian marble finish Vitrified tiles (800x800mm) in living/dining; anti-skid wooden finish tiles in balconies.' },
      { category: 'Doors & Windows', detail: 'Teakwood main door frame with designer shutter. UPVC 3-track sliding balcony windows with mosquito mesh.' },
      { category: 'Electrical & Plumbing', detail: 'Concealed copper wiring (Finolex/Havells), modular switches (Schneider/Legrand), CP fittings by Kohler/Grohe.' }
    ],
    locationHighlights: [
      { category: 'Tech Parks & Hubs', placeName: 'Electronic City Phase 1', distance: '12 Mins / 5.5 Km' },
      { category: 'Tech Parks & Hubs', placeName: 'Silk Board / HSR Layout', distance: '15 Mins / 6.8 Km' },
      { category: 'Schools & Universities', placeName: 'Delhi Public School (DPS)', distance: '10 Mins / 4.2 Km' },
      { category: 'Hospitals', placeName: 'Fortis & Apollo Hospital (Bannerghatta)', distance: '14 Mins / 6.0 Km' },
      { category: 'Transit & Metro', placeName: 'Upcoming Yellow Line Metro Station', distance: '5 Mins / 1.8 Km' }
    ]
  },
  {
    id: 'splendid-elite',
    slug: 'splendid-elite',
    name: 'Splendid Elite',
    location: 'Electronics City, Bengaluru',
    sublocation: 'Phase 1 Tech Corridor',
    configuration: '2 & 3 BHK Modern Apartments',
    propertyType: 'Residential',
    status: 'Ongoing',
    reraNumber: 'PRM/KA/RERA/1251/308/PR/190412/002511',
    priceRange: '₹75 Lakhs - ₹1.18 Cr',
    startingPriceNum: 7500000,
    totalUnits: 120,
    possessionDate: 'Ready to Move',
    shortDescription: 'High-efficiency modern homes engineered for tech executives and young families seeking effortless commute and urban luxury.',
    longDescription: 'Splendid Elite stands as an architectural tribute to precision and contemporary comfort in the heart of Electronics City Phase 1. Offering intelligent spatial geometry, seamless digital connectivity, and serene landscaped gardens.',
    story: 'Crafted for modern professionals who value both time and aesthetic tranquility, Splendid Elite eliminates long city commutes while providing a calm, gated sanctuary filled with greenery.',
    heroImage: splendidEliteHero,
    gallery: SPLENDID_ELITE_GALLERY,
    featured: true,
    coordinates: { lat: 12.845, lng: 77.662 },
    amenities: [
      { name: 'Sky Deck Lounge', category: 'Wellness', iconName: 'Sun', description: 'Top-floor lounge with stargazing telescope and cocktail seating' },
      { name: 'Technogym Fitness Studio', category: 'Fitness', iconName: 'Dumbbell', description: 'Air-conditioned fitness studio with cardio & strength zone' },
      { name: 'Co-Working Business Pods', category: 'Community', iconName: 'Briefcase', description: 'High-speed fiber connectivity, private meeting rooms and printing hub' },
      { name: 'Badminton & Squash Court', category: 'Fitness', iconName: 'Activity', description: 'Indoor wooden flooring court with night lighting' },
      { name: 'Children Play Zone', category: 'Landscape', iconName: 'Smile', description: 'Rubberized safety flooring with interactive play structures' }
    ],
    floorPlans: [
      {
        id: 'se-2bhk',
        title: '2 BHK Urban Compact',
        type: '2 BHK + 2 Bath',
        sqft: 1060,
        priceEstimate: '₹75.2 Lakhs*',
        bedrooms: 2,
        bathrooms: 2,
        balconies: 1,
        image: '/floorplan-3bhk.jpg',
        features: ['Smart home touch switches included', 'Efficient space utilization with zero wasted corridor', 'Utility drying balcony']
      },
      {
        id: 'se-3bhk',
        title: '3 BHK Executive Suite',
        type: '3 BHK + 3 Bath',
        sqft: 1410,
        priceEstimate: '₹1.05 Cr*',
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        image: '/floorplan-2bhk.jpg',
        features: ['Dual master bedrooms with attached baths', 'Spacious open-plan kitchen bar counter']
      }
    ],
    specs: [
      { category: 'Structure', detail: 'Monolithic RCC shear wall construction using international aluminium formwork technology.' },
      { category: 'Plumbing', detail: 'Hydro-pneumatic water supply system ensuring constant pressure across all floors.' },
      { category: 'Power Backup', detail: '100% DG power backup for common areas and 1.5 KVA dedicated load per apartment.' }
    ],
    locationHighlights: [
      { category: 'Tech Parks & Hubs', placeName: 'Infosys Main Campus', distance: '5 Mins / 1.5 Km' },
      { category: 'Tech Parks & Hubs', placeName: 'Wipro Technologies', distance: '7 Mins / 2.2 Km' },
      { category: 'Transit & Metro', placeName: 'Electronic City Metro Station', distance: '4 Mins / 1.2 Km' },
      { category: 'Retail & Leisure', placeName: 'Neo Town Mall', distance: '8 Mins / 3.0 Km' }
    ]
  },
  {
    id: 'splendid-skywalk',
    slug: 'splendid-skywalk',
    name: 'Splendid Skywalk',
    location: 'Yelahanka, North Bengaluru',
    sublocation: 'Kogilu Cross / Airport Corridor',
    configuration: '2, 3 & 4 BHK Luxury Sky Towers',
    propertyType: 'Residential',
    status: 'Ongoing',
    reraNumber: 'PRM/KA/RERA/1251/309/PR/201015/003622',
    priceRange: '₹1.10 Cr - ₹2.25 Cr',
    startingPriceNum: 11000000,
    totalUnits: 210,
    possessionDate: 'Q2 2027',
    shortDescription: 'Iconic architectural high-rise featuring elevated skywalk bridges, infinity cloud pools, and swift access to Kempegowda International Airport.',
    longDescription: 'Splendid Skywalk redefines the North Bengaluru skyline. Inspired by futuristic international high-rises, the development connects twin residential towers with a dramatic double-height cantilevered skywalk deck at the 18th floor.',
    story: 'North Bengaluru is evolving as the city’s premier innovation and aviation corridor. Splendid Skywalk provides an elevated sanctuary where sweeping views meet high-design living.',
    heroImage: splendidSkywalkHero,
    gallery: SKYWALK_GALLERY,
    featured: true,
    coordinates: { lat: 13.102, lng: 77.608 },
    amenities: [
      { name: '18th Floor Skywalk Deck', category: 'Wellness', iconName: 'Compass', description: 'Glass-bottom observation bridge connecting twin towers with sunset lounge' },
      { name: 'Half-Olympic Swimming Pool', category: 'Fitness', iconName: 'Waves', description: 'Temperature controlled lap pool with wooden sun loungers' },
      { name: 'Private Amphitheatre', category: 'Community', iconName: 'Film', description: 'Open-air acoustic theatre for weekend cinema & cultural events' },
      { name: 'Tennis & Basketball Courts', category: 'Fitness', iconName: 'Trophy', description: 'Synthetic turf multi-sport courts with floodlights' }
    ],
    floorPlans: [
      {
        id: 'ss-3bhk',
        title: '3 BHK Sky Residence',
        type: '3 BHK + 3 Bath + Maid',
        sqft: 1680,
        priceEstimate: '₹1.35 Cr*',
        bedrooms: 3,
        bathrooms: 3,
        balconies: 3,
        image: '/floorplan-2bhk.jpg',
        features: ['270-degree panoramic airport corridor views', 'Dedicated maid/utility quarter']
      }
    ],
    specs: [
      { category: 'Structure', detail: 'High-strength RCC core frame designed to withstand extreme wind dynamics and seismic safety standards.' },
      { category: 'Glass Facade', detail: 'Double-glazed Low-E acoustic glass windows reducing thermal heat & external road noise by 85%.' }
    ],
    locationHighlights: [
      { category: 'Transit & Metro', placeName: 'Kempegowda Int. Airport (BLR)', distance: '18 Mins / 19.5 Km' },
      { category: 'Tech Parks & Hubs', placeName: 'Manyata Tech Park', distance: '12 Mins / 7.8 Km' },
      { category: 'Schools & Universities', placeName: 'Canadian International School', distance: '8 Mins / 3.5 Km' }
    ]
  },
  {
    id: 'splendid-plaza',
    slug: 'splendid-plaza',
    name: 'Splendid Plaza',
    location: 'Koramangala / Ring Road, Bengaluru',
    sublocation: 'Inner Ring Road Commercial District',
    configuration: 'Boutique Commercial & Retail Hub',
    propertyType: 'Commercial',
    status: 'Completed',
    reraNumber: 'PRM/KA/RERA/1251/310/PR/171101/001150',
    priceRange: '₹1.80 Cr - ₹5.50 Cr',
    startingPriceNum: 18000000,
    totalUnits: 42,
    possessionDate: 'Ready for Fit-outs',
    shortDescription: 'Grade-A boutique commercial landmark engineered for flagship retail, fintech headquarters, and luxury dining spaces.',
    longDescription: 'Splendid Plaza offers unmatched high-street visibility along Bengaluru’s high-density commercial artery. Featuring energy-efficient glass curtain walls, high-speed elevator banks, and flexible open floor plates.',
    story: 'Designed to elevate brand presence for corporate headquarters and premium retail, Splendid Plaza combines architectural prestige with high footfall accessibility.',
    heroImage: splendidPlazaHero,
    gallery: PLAZA_GALLERY,
    featured: false,
    coordinates: { lat: 12.935, lng: 77.624 },
    amenities: [
      { name: '100% VRV Air Conditioning', category: 'Eco', iconName: 'Wind', description: 'Centralized energy efficient chilled water system' },
      { name: 'Multi-Level Subterranean Parking', category: 'Security', iconName: 'Car', description: 'Automated mechanical parking for 250+ vehicles' },
      { name: 'High-Speed Mitsubishi Elevators', category: 'Community', iconName: 'ArrowUpRight', description: 'Destination-controlled elevator bank with zero wait algorithm' }
    ],
    floorPlans: [
      {
        id: 'sp-office-unit',
        title: 'Grade-A Executive Office Floor Plate',
        type: 'Commercial Office Space',
        sqft: 2800,
        priceEstimate: '₹2.90 Cr*',
        bedrooms: 0,
        bathrooms: 4,
        balconies: 0,
        image: '/commercial-1.jpg',
        features: ['Columns placed along perimeter for maximum floor layout freedom', 'Double glass facade with energy conservation']
      }
    ],
    specs: [
      { category: 'Structure', detail: 'Commercial post-tensioned slab construction allowing long spans without interior pillars.' }
    ],
    locationHighlights: [
      { category: 'Tech Parks & Hubs', placeName: 'EGL (Embassy GolfLinks)', distance: '6 Mins / 2.1 Km' },
      { category: 'Retail & Leisure', placeName: 'Koramangala 100ft Road Retail Corridor', distance: '2 Mins / 0.5 Km' }
    ]
  },
  {
    id: 'splendid-times-square',
    slug: 'splendid-times-square',
    name: 'Splendid Times Square',
    location: 'Sarjapur Road, Bengaluru',
    sublocation: 'Near Wipro Corporate Office',
    configuration: 'Mixed-Use Commercial & Tech Retail',
    propertyType: 'Mixed Use',
    status: 'Ongoing',
    reraNumber: 'PRM/KA/RERA/1251/310/PR/210518/004112',
    priceRange: '₹1.20 Cr - ₹4.80 Cr',
    startingPriceNum: 12000000,
    totalUnits: 65,
    possessionDate: 'Q1 2027',
    shortDescription: 'Vibrant commercial hub combining upscale retail promenades, alfresco dining plazas, and boutique corporate suites on Sarjapur Road.',
    longDescription: 'Splendid Times Square captures the vibrant energy of Sarjapur Road’s technology epicenter. Designed with open-air pedestrian avenues, double-height retail storefronts, and premium rooftop restaurant terraces.',
    story: 'Serving over 50,000 tech professionals and affluent residential communities within a 3km radius, Splendid Times Square is destined to become the defining destination for commerce and lifestyle.',
    heroImage: splendidTimesSquareHero,
    gallery: UNIFIED_PROJECT_GALLERY,
    featured: false,
    coordinates: { lat: 12.911, lng: 77.685 },
    amenities: [
      { name: 'Pedestrian Promenade & Plaza', category: 'Community', iconName: 'MapPin', description: 'Tree-lined central avenue with water fountains and seating clusters' },
      { name: 'Rooftop Lounge & Fine Dining Space', category: 'Wellness', iconName: 'Utensils', description: 'Double-height open air terrace for signature restaurants' }
    ],
    floorPlans: [
      {
        id: 'sts-retail',
        title: 'High-Street Retail Anchor Unit',
        type: 'Ground Floor Retail',
        sqft: 1450,
        priceEstimate: '₹2.10 Cr*',
        bedrooms: 0,
        bathrooms: 2,
        balconies: 0,
        image: '/villa-1.jpg',
        features: ['Direct road frontage with 24ft glass display facade', 'Dedicated customer valet drop-off zone']
      }
    ],
    specs: [
      { category: 'Facade', detail: 'High performance structural glazed curtain walling with metallic bronze accents.' }
    ],
    locationHighlights: [
      { category: 'Tech Parks & Hubs', placeName: 'Wipro Sarjapur Campus', distance: '3 Mins / 1.0 Km' },
      { category: 'Tech Parks & Hubs', placeName: 'RGA Tech Park', distance: '5 Mins / 2.0 Km' }
    ]
  },
  {
    id: 'skylines',
    slug: 'skylines',
    name: 'Skylines by Splendid',
    location: 'Sarjapur Road, Bengaluru',
    sublocation: 'Carmelaram Railway Station Road',
    configuration: '3 & 4 BHK Luxury High-Rise Residences',
    propertyType: 'Residential',
    status: 'Completed',
    reraNumber: 'PRM/KA/RERA/1251/310/PR/171015/000840',
    priceRange: '₹1.25 Cr - ₹1.95 Cr',
    startingPriceNum: 12500000,
    totalUnits: 96,
    possessionDate: 'Ready to Move',
    shortDescription: 'Bespoke executive apartments with oversized viewing decks, low density living, and mature landscaped gardens.',
    longDescription: 'Skylines offers exclusive low-density high-rise living with only 4 apartments per floor. Designed for families seeking privacy, acoustic isolation, and spacious living rooms bathed in morning sunlight.',
    story: 'Skylines represents Splendid Group’s commitment to timeless architectural proportions and peaceful residential communities in East Bengaluru.',
    heroImage: skylinesHero,
    gallery: SKYLINES_GALLERY,
    featured: false,
    coordinates: { lat: 12.908, lng: 77.698 },
    amenities: [
      { name: 'Club Skylines', category: 'Community', iconName: 'Coffee', description: 'Private resident lounge, squash court, and library' },
      { name: 'Heated Indoor Lap Pool', category: 'Wellness', iconName: 'Waves', description: 'All-weather swimming pool with jacuzzi jets' }
    ],
    floorPlans: [
      {
        id: 'sky-3bhk',
        title: '3 BHK Signature Residence',
        type: '3 BHK + 3 Bath',
        sqft: 1620,
        priceEstimate: '₹1.28 Cr*',
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        image: '/floorplan-3bhk.jpg',
        features: ['100% Vastu compliance', 'Separated living & dining areas for private family gatherings']
      }
    ],
    specs: [
      { category: 'Finishes', detail: 'Imported Marble flooring in living & dining areas; engineered hardwood flooring in Master Suite.' }
    ],
    locationHighlights: [
      { category: 'Schools & Universities', placeName: 'Inventure Academy & Greenwood High', distance: '10 Mins / 4.5 Km' },
      { category: 'Hospitals', placeName: 'Columbia Asia / Manipal Hospital', distance: '12 Mins / 5.2 Km' }
    ]
  },
  {
    id: 'lake-dews',
    slug: 'lake-dews',
    name: 'Lake Dews',
    location: 'Begur - HSR Extension, Bengaluru',
    sublocation: 'Off Hosur Main Road',
    configuration: '2 & 3 BHK Serene Garden Residences',
    propertyType: 'Residential',
    status: 'Completed',
    reraNumber: 'PRM/KA/RERA/1251/310/PR/170920/000512',
    priceRange: '₹82 Lakhs - ₹1.20 Cr',
    startingPriceNum: 8200000,
    totalUnits: 140,
    possessionDate: 'Ready to Move',
    shortDescription: 'Quiet luxury enclave nestled amid lush greenery, zen garden courtyards, and charming walking trails.',
    longDescription: 'Lake Dews is a boutique residential community designed around central green courtyards, water fountains, and tranquil seating pavilions. An ideal haven for peaceful family living with quick connectivity to HSR Layout.',
    story: 'Created with a focus on human scale, natural light, and green community spaces, Lake Dews provides a refreshing retreat from urban busyness.',
    heroImage: lakeDewsHero,
    gallery: LAKE_DEWS_GALLERY,
    featured: false,
    coordinates: { lat: 12.888, lng: 77.635 },
    amenities: [
      { name: 'Zen Garden & Lotus Pond', category: 'Landscape', iconName: 'Flower2', description: 'Meditation zone with running stream and koi pond' },
      { name: 'Community Organic Garden', category: 'Eco', iconName: 'Leaf', description: 'Resident garden plots for homegrown herbs and plants' }
    ],
    floorPlans: [
      {
        id: 'ld-2bhk',
        title: '2 BHK Garden View Suite',
        type: '2 BHK + 2 Bath',
        sqft: 1140,
        priceEstimate: '₹82.5 Lakhs*',
        bedrooms: 2,
        bathrooms: 2,
        balconies: 2,
        image: '/floorplan-3bhk.jpg',
        features: ['Courtyard garden view balcony', 'Spacious modular kitchen space']
      }
    ],
    specs: [
      { category: 'Masonry', detail: 'Eco-friendly AAC blocks with high thermal insulation properties.' }
    ],
    locationHighlights: [
      { category: 'Retail & Leisure', placeName: 'HSR Layout Sector 1 Commercial Hub', distance: '8 Mins / 3.8 Km' },
      { category: 'Transit & Metro', placeName: 'Kudlu Gate Metro Station', distance: '6 Mins / 2.5 Km' }
    ]
  }
];
