// Import all product images from the assets directory
import armedChair1 from "../../assets/imgs/armedChair (1).webp";
import armedChair2 from "../../assets/imgs/armedChair (2).webp";
import armedChair3 from "../../assets/imgs/armedChair (3).webp";
import armedChair4 from "../../assets/imgs/armedChair (4).webp";
import armedChair5 from "../../assets/imgs/armedChair (5).webp";
import armedChair from "../../assets/imgs/armedChair.webp";
import armedChair_2 from "../../assets/imgs/armedChair2.webp";
import armedChair_3 from "../../assets/imgs/armedChair3.jpg";
import bed1 from "../../assets/imgs/bed.webp";
import bed2 from "../../assets/imgs/bed2.webp";
import bed3 from "../../assets/imgs/bed3.webp";
import bed4 from "../../assets/imgs/bed4.webp";
import bed5 from "../../assets/imgs/bed5.webp";
import bed6 from "../../assets/imgs/bed6.webp";
import bed7 from "../../assets/imgs/bed7.webp";
import chair1 from "../../assets/imgs/chair (1).webp";
import chair2 from "../../assets/imgs/chair (2).webp";
import chair3 from "../../assets/imgs/chair (3).webp";
import chair from "../../assets/imgs/chair.jpg";
import sofa1 from "../../assets/imgs/sofa (1).webp";
import sofa2 from "../../assets/imgs/sofa (2).webp";
import sofa3 from "../../assets/imgs/sofa (3).webp";
import sofa4 from "../../assets/imgs/sofa (4).webp";
import sofa5 from "../../assets/imgs/sofa (5).webp";
import sofa6 from "../../assets/imgs/sofa (6).webp";
import sofa from "../../assets/imgs/sofa.jpg";
import sofa_2 from "../../assets/imgs/sofa2.jpg";
import sofa_3 from "../../assets/imgs/sofa3.jpg";
import sofa_4 from "../../assets/imgs/sofa4.jpg";
import storage1 from "../../assets/imgs/storage.jpg";
import storage2 from "../../assets/imgs/storage2.jpg";
import storage3 from "../../assets/imgs/storage3.jpg";
import storage4 from "../../assets/imgs/storage4.webp";
import storage5 from "../../assets/imgs/storage5.jpg";
import storage6 from "../../assets/imgs/storage6.webp";
import table1 from "../../assets/imgs/table (1).webp";
import table2 from "../../assets/imgs/table (2).webp";
import table from "../../assets/imgs/table.webp";
import table_2 from "../../assets/imgs/table2.webp";
import table_3 from "../../assets/imgs/table3.webp";
import diamVlutpat from "../../assets/imgs/Diam Vlutpat.webp";

export const products = [
  // Armchairs
  {
    id: "1",
    name: "Classic Armed Chair",
    price: 8999.99,
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
    image: armedChair1,
    category: "Armchairs",
    description: "Sleek and modern armed chair, a perfect accent for any room.",
    inStock: true,
    rating: 4.1,
    reviews: 98,
  },
  {
    id: "3",
    name: "Vintage Armed Chair",
    price: 8399.99,
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
    image: armedChair_3,
    category: "Armchairs",
    description:
      "An executive armed chair offering both style and ergonomic support.",
    inStock: true,
    rating: 3.7,
    reviews: 90,
  },

  // Beds
  {
    id: "9",
    name: "Queen Platform Bed",
    price: 20999.99,
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
    id: "10",
    name: "King Upholstered Bed",
    price: 26999.99,
    image: bed2,
    category: "Beds",
    description: "Luxurious king-size upholstered bed with a tufted headboard.",
    inStock: true,
    rating: 4.9,
    reviews: 180,
  },
  {
    id: "11",
    name: "Twin Storage Bed",
    price: 14999.99,
    image: bed3,
    category: "Beds",
    description:
      "A practical twin bed with built-in drawers for extra storage.",
    inStock: true,
    rating: 4.6,
    reviews: 130,
  },
  {
    id: "12",
    name: "Modern Canopy Bed",
    price: 23499.99,
    image: bed4,
    category: "Beds",
    description: "An elegant and modern canopy bed that makes a statement.",
    inStock: true,
    rating: 4.7,
    reviews: 145,
  },
  {
    id: "13",
    name: "Simple Metal Frame Bed",
    price: 10499.99,
    image: bed5,
    category: "Beds",
    description:
      "A simple and durable metal frame bed with a minimalist aesthetic.",
    inStock: true,
    rating: 4.5,
    reviews: 160,
  },
  {
    id: "14",
    name: "Rustic Wooden Bed",
    price: 22499.99,
    image: bed6,
    category: "Beds",
    description:
      "A rustic wooden bed frame that adds warmth and character to any bedroom.",
    inStock: true,
    rating: 4.8,
    reviews: 195,
  },
  {
    id: "15",
    name: "Daybed with Trundle",
    price: 17999.99,
    image: bed7,
    category: "Beds",
    description:
      "A versatile daybed with a pull-out trundle, perfect for guests.",
    inStock: true,
    rating: 4.6,
    reviews: 110,
  },

  // Chairs
  {
    id: "16",
    name: "Ergonomic Office Chair",
    price: 6999.99,
    image: chair,
    category: "Chairs",
    description:
      "An ergonomic office chair designed for maximum comfort and support.",
    inStock: true,
    rating: 4.8,
    reviews: 300,
  },
  {
    id: "17",
    name: "Modern Dining Chair",
    price: 3899.99,
    image: chair1,
    category: "Chairs",
    description: "A sleek dining chair with a comfortable, contoured seat.",
    inStock: true,
    rating: 4.7,
    reviews: 250,
  },
  {
    id: "18",
    name: "Accent Velvet Chair",
    price: 5499.99,
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
    id: "19",
    name: "Wooden Cafe Chair",
    price: 2999.99,
    image: chair3,
    category: "Chairs",
    description:
      "A classic wooden cafe chair, durable and stylish for any setting.",
    inStock: true,
    rating: 4.6,
    reviews: 220,
  },

  // Sofas
  {
    id: "20",
    name: "3-Seater Modern Sofa",
    price: 30099.99,
    image: sofa,
    category: "Sofas",
    description:
      "A spacious and comfortable 3-seater sofa with a modern design.",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 280,
  },
  {
    id: "21",
    name: "Sectional Sofa with Chaise",
    price: 8999.99,
    image: sofa1,
    category: "Sofas",
    description:
      "A large sectional sofa with a reversible chaise for ultimate flexibility.",
    inStock: true,
    rating: 4.9,
    reviews: 230,
  },
  {
    id: "22",
    name: "Leather Loveseat",
    price: 8999.99,
    image: sofa2,
    category: "Sofas",
    description:
      "A sophisticated leather loveseat, perfect for smaller living areas.",
    inStock: true,
    rating: 4.7,
    reviews: 190,
  },
  {
    id: "23",
    name: "Sleeper Sofa Bed",
    price: 11199.99,
    image: sofa3,
    category: "Sofas",
    description:
      "A functional and stylish sleeper sofa that easily converts to a bed.",
    inStock: true,
    rating: 4.6,
    reviews: 160,
  },
  {
    id: "24",
    name: "Mid-Century Modern Sofa",
    price: 11099.99,
    image: sofa4,
    category: "Sofas",
    description:
      "A mid-century modern sofa with iconic tapered legs and clean lines.",
    inStock: true,
    rating: 4.8,
    reviews: 210,
  },
  {
    id: "25",
    name: "Compact Apartment Sofa",
    price: 17999.99,
    image: sofa5,
    category: "Sofas",
    description:
      "A stylish sofa designed specifically for compact apartment living.",
    inStock: true,
    rating: 4.5,
    reviews: 140,
  },
  {
    id: "26",
    name: "Plush Velvet Sofa",
    price: 12999.99,
    image: sofa6,
    category: "Sofas",
    description: "A luxurious and plush velvet sofa that is soft to the touch.",
    inStock: true,
    rating: 4.9,
    reviews: 170,
  },
  {
    id: "27",
    name: "Reclining Sofa",
    price: 15499.99,
    image: sofa_2,
    category: "Sofas",
    description:
      "A comfortable reclining sofa with dual power-reclining seats.",
    inStock: true,
    rating: 4.7,
    reviews: 200,
  },
  {
    id: "28",
    name: "Chesterfield Sofa",
    price: 17499.99,
    image: sofa_3,
    category: "Sofas",
    description:
      "A classic Chesterfield sofa with deep button tufting and rolled arms.",
    inStock: true,
    rating: 4.8,
    reviews: 150,
  },
  {
    id: "29",
    name: "Outdoor Wicker Sofa",
    price: 19499.99,
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
    id: "30",
    name: "5-Drawer Dresser",
    price: 11449.99,
    image: storage1,
    category: "Storage",
    description:
      "A tall 5-drawer dresser offering ample storage for your clothing.",
    inStock: true,
    rating: 4.7,
    reviews: 130,
  },
  {
    id: "31",
    name: "Modern Bookshelf",
    price: 10999.99,
    image: storage2,
    category: "Storage",
    description: "A modern bookshelf with an open design and multiple shelves.",
    inStock: true,
    rating: 4.8,
    reviews: 180,
  },
  {
    id: "32",
    name: "Entryway Cabinet",
    price: 12249.99,
    image: storage3,
    category: "Storage",
    description:
      "A slim entryway cabinet, perfect for storing shoes and accessories.",
    inStock: true,
    rating: 4.6,
    reviews: 110,
  },
  {
    id: "33",
    name: "Bedside Nightstand",
    price: 6949.99,
    image: storage4,
    category: "Storage",
    description:
      "A compact bedside nightstand with a drawer and an open shelf.",
    inStock: true,
    rating: 4.5,
    reviews: 200,
  },
  {
    id: "34",
    name: "Kitchen Pantry",
    price: 11599.99,
    image: storage5,
    category: "Storage",
    description:
      "A spacious kitchen pantry cabinet for all your food storage needs.",
    inStock: true,
    rating: 4.7,
    reviews: 150,
  },
  {
    id: "35",
    name: "Small Storage Ottoman",
    price: 3499.99,
    image: storage6,
    category: "Storage",
    description:
      "A versatile ottoman that provides extra seating and hidden storage.",
    inStock: true,
    rating: 4.8,
    reviews: 220,
  },

  // Tables
  {
    id: "36",
    name: "Expandable Dining Table",
    price: 23459.99,
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
    id: "37",
    name: "Round Coffee Table",
    price: 11449.99,
    image: table1,
    category: "Tables",
    description:
      "A stylish round coffee table with a marble top and metal base.",
    inStock: true,
    rating: 4.8,
    reviews: 160,
  },
  {
    id: "38",
    name: "Console Table",
    price: 8399.99,
    image: table2,
    category: "Tables",
    description: "A narrow console table, perfect for hallways and entryways.",
    inStock: true,
    rating: 4.7,
    reviews: 140,
  },
  {
    id: "39",
    name: "Minimalist Desk",
    price: 8799.99,
    image: table_2,
    category: "Tables",
    description:
      "A minimalist writing desk with a clean design and ample workspace.",
    inStock: true,
    rating: 4.6,
    reviews: 170,
  },
  {
    id: "40",
    name: "Nesting End Tables",
    price: 6349.99,
    image: table_3,
    category: "Tables",
    description:
      "A set of two nesting end tables that save space and add style.",
    inStock: true,
    rating: 4.5,
    reviews: 130,
  },
  {
    id: "41",
    name: "Diam Vlutpat Table",
    price: 13749.99,
    image: diamVlutpat,
    category: "Tables",
    description: "An elegant table featuring a unique 'Diam Vlutpat' design.",
    inStock: true,
    rating: 4.8,
    reviews: 95,
  },
];

export const categories = [
  { name: "Chairs", icon: "Chair" },
  { name: "Storage", icon: "Package" },
  { name: "Armchairs", icon: "Armchair" },
  { name: "Sofas", icon: "Sofa" },
  { name: "Beds", icon: "Bed" },
  { name: "Tables", icon: "Table" },
];