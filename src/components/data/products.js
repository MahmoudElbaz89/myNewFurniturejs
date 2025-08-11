import armedChair1 from "../../assets/armedChair (1).webp";
import armedChair2 from "../../assets/armedChair (2).webp";
import armedChair3 from "../../assets/armedChair (3).webp";
import armedChair4 from "../../assets/armedChair (4).webp";
import armedChair5 from "../../assets/armedChair (5).webp";
import armedChair from "../../assets/armedChair.webp";
import armedChair_2 from "../../assets/armedChair2.webp";
import armedChair_3 from "../../assets/armedChair3.png";
import armedChair_4 from "../../assets/armedChair.png";
import armedChair_5 from "../../assets/armedChair (2).png";
import bed1 from "../../assets/bed.webp";
import bed2 from "../../assets/bed2.webp";
import bed3 from "../../assets/bed3.webp";
import bed4 from "../../assets/bed4.jpg";
import bed5 from "../../assets/bed5.webp";
import bed6 from "../../assets/bed6.webp";
import chair from "../../assets/chair.png";
import chair1 from "../../assets/chair (1).webp";
import chair2 from "../../assets/chair (2).webp";
import chair3 from "../../assets/chair (3).webp";
import chair4 from "../../assets/chair.webp";
import sofa1 from "../../assets/sofa (1).webp";
import sofa2 from "../../assets/sofa (2).webp";
import sofa3 from "../../assets/sofa (3).webp";
import sofa4 from "../../assets/sofa (4).webp";
import sofa5 from "../../assets/sofa (5).webp";
import sofa6 from "../../assets/sofa (6).webp";
import sofa from "../../assets/sofa.png";
import sofa_2 from "../../assets/sofa2.png";
import sofa_3 from "../../assets/sofa3.png";
import sofa_4 from "../../assets/sofa4.png";
import storage1 from "../../assets/storage.png";
import storage2 from "../../assets/storage2.png";
import storage3 from "../../assets/storage3.png";
import storage4 from "../../assets/storage4.webp";
import storage5 from "../../assets/storage5.png";
import storage6 from "../../assets/storage6.webp";
import storage7 from "../../assets/storage7.jpg";
import table1 from "../../assets/table (1).webp";
import table2 from "../../assets/table (2).webp";
import table from "../../assets/table.webp";
import table_2 from "../../assets/table2.webp";
import table_3 from "../../assets/table3.webp";
import diningTable from "../../assets/dining-table.png";

export const products = [
    // Armchairs
    {
        id: "1",
        name: "Classic Armed Chair",
        price: 8999.99,
        originalPrice: 10999.99,
        stock: 25,
        image: armedChair,
        category: "Armchairs",
        description:
            "A timeless armed chair with classic design and plush cushioning.",
        inStock: true,
        rating: 4.8,
        reviews: 112,
    },
    {
        id: "2",
        name: "Modern Armed Chair",
        price: 10499.99,
        originalPrice: 12499.99,
        stock: 18,
        image: armedChair1,
        category: "Armchairs",
        description:
            "Sleek and modern armed chair, a perfect accent for any room.",
        inStock: true,
        rating: 4.1,
        reviews: 98,
    },
    {
        id: "3",
        name: "Vintage Armed Chair",
        price: 8399.99,
        originalPrice: 9599.99,
        stock: 12,
        image: armedChair2,
        category: "Armchairs",
        description: "Vintage-inspired armed chair with detailed woodwork.",
        inStock: true,
        rating: 3.6,
        reviews: 75,
    },
    {
        id: "4",
        name: "Comfort Armed Chair",
        price: 11999.99,
        stock: 8,
        image: armedChair3,
        category: "Armchairs",
        description:
            "An exceptionally comfortable armed chair designed for relaxation.",
        inStock: true,
        featured: true,
        rating: 3.9,
        reviews: 150,
    },
    {
        id: "5",
        name: "Minimalist Armed Chair",
        price: 7499.99,
        originalPrice: 8799.99,
        stock: 30,
        image: armedChair4,
        category: "Armchairs",
        description:
            "A minimalist armed chair with clean lines and a simple profile.",
        inStock: true,
        rating: 4.5,
        reviews: 65,
    },
    {
        id: "6",
        name: "Lounge Armed Chair",
        price: 12899.99,
        originalPrice: 14499.99,
        stock: 15,
        image: armedChair5,
        category: "Armchairs",
        description:
            "A luxurious lounge armed chair, perfect for reading or relaxing.",
        inStock: true,
        rating: 4.8,
        reviews: 120,
    },
    {
        id: "7",
        name: "Compact Armed Chair",
        price: 6899.99,
        originalPrice: 7899.99,
        stock: 20,
        image: armedChair_2,
        category: "Armchairs",
        description:
            "A compact armed chair ideal for smaller spaces without compromising comfort.",
        inStock: true,
        rating: 4.0,
        reviews: 55,
    },
    {
        id: "8",
        name: "Executive Armed Chair",
        price: 14999.99,
        originalPrice: 16499.99,
        stock: 10,
        image: armedChair_3,
        category: "Armchairs",
        description:
            "An executive armed chair offering both style and ergonomic support.",
        inStock: true,
        rating: 3.7,
        reviews: 90,
    },
    {
        id: "9",
        name: "blue Armed Chair",
        price: 13999.99,
        originalPrice: 15499.99,
        stock: 10,
        image: armedChair_4,
        category: "Armchairs",
        description: "A blue armed chair offering both style and comfort.",
        inStock: true,
        rating: 3.7,
        reviews: 90,
    },
    {
        id: "10",
        name: "wooden Armed Chair",
        price: 12999.99,
        originalPrice: 14499.99,
        stock: 10,
        image: armedChair_5,
        category: "Armchairs",
        description: "A wooden armed chair offering uniqe style.",
        inStock: true,
        rating: 3.7,
        reviews: 90,
    },

    // Beds
    {
        id: "11",
        name: "Queen Platform Bed",
        price: 20999.99,
        originalPrice: 22999.99,
        stock: 12,
        image: bed1,
        category: "Beds",
        description:
            "A sturdy queen-size platform bed with a modern, low-profile design.",
        inStock: true,
        featured: true,
        rating: 4.8,
        reviews: 210,
    },
    {
        id: "12",
        name: "King Upholstered Bed",
        price: 26999.99,
        originalPrice: 28999.99,
        stock: 8,
        image: bed2,
        category: "Beds",
        description:
            "Luxurious king-size upholstered bed with a tufted headboard.",
        inStock: true,
        rating: 4.9,
        reviews: 180,
    },
    {
        id: "13",
        name: "Twin Storage Bed",
        price: 14999.99,
        originalPrice: 16499.99,
        stock: 15,
        image: bed3,
        category: "Beds",
        description:
            "A practical twin bed with built-in drawers for extra storage.",
        inStock: true,
        rating: 4.6,
        reviews: 130,
    },
    {
        id: "14",
        name: "Modern Canopy Bed",
        price: 23499.99,
        originalPrice: 25499.99,
        stock: 7,
        image: bed4,
        category: "Beds",
        description: "An elegant and modern canopy bed that makes a statement.",
        inStock: true,
        rating: 4.7,
        reviews: 145,
    },
    {
        id: "15",
        name: "Simple Metal Frame Bed",
        price: 10499.99,
        originalPrice: 11999.99,
        stock: 18,
        image: bed5,
        category: "Beds",
        description:
            "A simple and durable metal frame bed with a minimalist aesthetic.",
        inStock: true,
        rating: 4.5,
        reviews: 160,
    },
    {
        id: "16",
        name: "Rustic Wooden Bed",
        price: 22499.99,
        originalPrice: 23999.99,
        stock: 10,
        image: bed6,
        category: "Beds",
        description:
            "A rustic wooden bed frame that adds warmth and character to any bedroom.",
        inStock: true,
        rating: 4.8,
        reviews: 195,
    },

    // Chairs
    {
        id: "17",
        name: "Ergonomic Office Chair",
        price: 6999.99,
        originalPrice: 8499.99,
        stock: 25,
        image: chair,
        category: "Chairs",
        description:
            "An ergonomic office chair designed for maximum comfort and support.",
        inStock: true,
        rating: 4.8,
        reviews: 300,
    },
    {
        id: "18",
        name: "Modern Dining Chair",
        price: 3899.99,
        originalPrice: 4499.99,
        stock: 30,
        image: chair1,
        category: "Chairs",
        description: "A sleek dining chair with a comfortable, contoured seat.",
        inStock: true,
        rating: 4.7,
        reviews: 250,
    },
    {
        id: "19",
        name: "Accent Velvet Chair",
        price: 5499.99,
        originalPrice: 6499.99,
        stock: 20,
        image: chair2,
        category: "Chairs",
        description:
            "A luxurious velvet accent chair to add a pop of color and style.",
        inStock: true,
        featured: true,
        rating: 4.9,
        reviews: 180,
    },
    {
        id: "20",
        name: "Wooden Cafe Chair",
        price: 2999.99,
        originalPrice: 3499.99,
        stock: 35,
        image: chair3,
        category: "Chairs",
        description:
            "A classic wooden cafe chair, durable and stylish for any setting.",
        inStock: true,
        rating: 4.6,
        reviews: 220,
    },
    {
        id: "21",
        name: "Dining table Chair",
        price: 1999.99,
        originalPrice: 2499.99,
        stock: 25,
        image: chair4,
        category: "Chairs",
        description:
            "A classic Dining table chair, durable and stylish for any setting.",
        inStock: true,
        rating: 4.6,
        reviews: 220,
    },

    // Sofas
    {
        id: "22",
        name: "3-Seater Modern Sofa",
        price: 30099.99,
        originalPrice: 39999.99,
        stock: 0,
        image: sofa,
        category: "Sofas",
        description:
            "A spacious and comfortable 3-seater sofa with a modern design.",
        inStock: false,
        featured: true,
        rating: 4.8,
        reviews: 280,
    },
    {
        id: "23",
        name: "Sectional Sofa with Chaise",
        price: 8999.99,
        stock: 15,
        image: sofa1,
        category: "Sofas",
        description:
            "A large sectional sofa with a reversible chaise for ultimate flexibility.",
        inStock: true,
        rating: 4.9,
        reviews: 230,
    },
    {
        id: "24",
        name: "Leather Loveseat",
        price: 8999.99,
        stock: 18,
        image: sofa2,
        category: "Sofas",
        description:
            "A sophisticated leather loveseat, perfect for smaller living areas.",
        inStock: true,
        rating: 4.7,
        reviews: 190,
    },
    {
        id: "25",
        name: "Sleeper Sofa Bed",
        price: 11199.99,
        originalPrice: 12499.99,
        stock: 12,
        image: sofa3,
        category: "Sofas",
        description:
            "A functional and stylish sleeper sofa that easily converts to a bed.",
        inStock: true,
        rating: 4.6,
        reviews: 160,
    },
    {
        id: "26",
        name: "Mid-Century Modern Sofa",
        price: 11099.99,
        originalPrice: 12499.99,
        stock: 10,
        image: sofa4,
        category: "Sofas",
        description:
            "A mid-century modern sofa with iconic tapered legs and clean lines.",
        inStock: true,
        rating: 4.8,
        reviews: 210,
    },
    {
        id: "27",
        name: "Compact Apartment Sofa",
        price: 17999.99,
        stock: 14,
        image: sofa5,
        category: "Sofas",
        description:
            "A stylish sofa designed specifically for compact apartment living.",
        inStock: true,
        rating: 4.5,
        reviews: 140,
    },
    {
        id: "28",
        name: "Plush Velvet Sofa",
        price: 12999.99,
        originalPrice: 14499.99,
        stock: 16,
        image: sofa6,
        category: "Sofas",
        description:
            "A luxurious and plush velvet sofa that is soft to the touch.",
        inStock: true,
        rating: 4.9,
        reviews: 170,
    },
    {
        id: "29",
        name: "Reclining Sofa",
        price: 15499.99,
        originalPrice: 16999.99,
        stock: 11,
        image: sofa_2,
        category: "Sofas",
        description:
            "A comfortable reclining sofa with dual power-reclining seats.",
        inStock: true,
        rating: 4.7,
        reviews: 200,
    },
    {
        id: "30",
        name: "Chesterfield Sofa",
        price: 17499.99,
        originalPrice: 18999.99,
        stock: 9,
        image: sofa_3,
        category: "Sofas",
        description:
            "A classic Chesterfield sofa with deep button tufting and rolled arms.",
        inStock: true,
        rating: 4.8,
        reviews: 150,
    },
    {
        id: "31",
        name: "Outdoor Wicker Sofa",
        price: 19499.99,
        originalPrice: 20999.99,
        stock: 8,
        image: sofa_4,
        category: "Sofas",
        description:
            "A durable and stylish outdoor sofa made from all-weather wicker.",
        inStock: true,
        rating: 4.6,
        reviews: 120,
    },

    // Storage
    {
        id: "32",
        name: "5-Drawer Dresser",
        price: 11449.99,
        stock: 15,
        image: storage1,
        category: "Storage",
        description:
            "A tall 5-drawer dresser offering ample storage for your clothing.",
        inStock: true,
        rating: 4.7,
        reviews: 130,
    },
    {
        id: "33",
        name: "Modern Bookshelf",
        price: 10999.99,
        originalPrice: 11999.99,
        stock: 18,
        image: storage2,
        category: "Storage",
        description:
            "A modern bookshelf with an open design and multiple shelves.",
        inStock: true,
        rating: 4.8,
        reviews: 180,
    },
    {
        id: "34",
        name: "Entryway Cabinet",
        price: 12249.99,
        stock: 12,
        image: storage3,
        category: "Storage",
        description:
            "A slim entryway cabinet, perfect for storing shoes and accessories.",
        inStock: true,
        rating: 4.6,
        reviews: 110,
    },
    {
        id: "35",
        name: "Bedside Nightstand",
        price: 6949.99,
        originalPrice: 7499.99,
        stock: 20,
        image: storage4,
        category: "Storage",
        description:
            "A compact bedside nightstand with a drawer and an open shelf.",
        inStock: true,
        rating: 4.5,
        reviews: 200,
    },
    {
        id: "36",
        name: "Kitchen Pantry",
        price: 11599.99,
        originalPrice: 12499.99,
        stock: 14,
        image: storage5,
        category: "Storage",
        description:
            "A spacious kitchen pantry cabinet for all your food storage needs.",
        inStock: true,
        rating: 4.7,
        reviews: 150,
    },
    {
        id: "37",
        name: "Small Storage Ottoman",
        price: 3499.99,
        stock: 25,
        image: storage6,
        category: "Storage",
        description:
            "A versatile ottoman that provides extra seating and hidden storage.",
        inStock: true,
        rating: 4.8,
        reviews: 220,
    },
    {
        id: "38",
        name: "Two-Tone Modern Wardrobe",
        price: 3499.99,
        originalPrice: 3999.99,
        stock: 25,
        image: storage7,
        category: "Storage",
        description:
            "A sleek, modern two-tone wardrobe, providing ample storage with a contemporary design.",
        inStock: true,
        rating: 4.8,
        reviews: 220,
    },

    // Tables
    {
        id: "39",
        name: "Expandable Dining Table",
        price: 23459.99,
        originalPrice: 24999.99,
        stock: 10,
        image: table,
        category: "Tables",
        description:
            "An expandable dining table that can comfortably seat up to 8 people.",
        inStock: true,
        featured: true,
        rating: 4.9,
        reviews: 190,
    },
    {
        id: "40",
        name: "Round Coffee Table",
        price: 11449.99,
        stock: 16,
        image: table1,
        category: "Tables",
        description:
            "A stylish round coffee table with a marble top and metal base.",
        inStock: true,
        rating: 4.8,
        reviews: 160,
    },
    {
        id: "41",
        name: "Console Table",
        price: 8399.99,
        originalPrice: 9499.99,
        stock: 18,
        image: table2,
        category: "Tables",
        description:
            "A narrow console table, perfect for hallways and entryways.",
        inStock: true,
        rating: 4.7,
        reviews: 140,
    },
    {
        id: "42",
        name: "Minimalist Desk",
        price: 8799.99,
        originalPrice: 9999.99,
        stock: 15,
        image: table_2,
        category: "Tables",
        description:
            "A minimalist writing desk with a clean design and ample workspace.",
        inStock: true,
        rating: 4.6,
        reviews: 170,
    },
    {
        id: "43",
        name: "Nesting End Tables",
        price: 6349.99,
        stock: 22,
        image: table_3,
        category: "Tables",
        description:
            "A set of two nesting end tables that save space and add style.",
        inStock: true,
        rating: 4.5,
        reviews: 130,
    },
    {
        id: "44",
        name: "Dining Table",
        price: 13749.99,
        stock: 9,
        image: diningTable,
        category: "Tables",
        description: "An elegant table featuring a unique design.",
        inStock: true,
        rating: 4.8,
        reviews: 95,
    },
];


export const categories = [
  { name: "Chairs"},
  { name: "Storage"},
  { name: "Armchairs"},
  { name: "Sofas"},
  { name: "Beds"},
  { name: "Tables"},
];
