import woodenChairImg from "../../assets/wooden-chair.jpg";
import blueArmchairImg from "../../assets/blue-armchair.jpg";
import diningTableImg from "../../assets/dining-table.jpg";
import storageCabinetImg from "../../assets/storage-cabinet.jpg";
import greySofaImg from "../../assets/grey-sofa.jpg";
import platformBedImg from "../../assets/platform-bed.jpg";

export const products = [
  {
    id: "1",
    name: "Wooden Chair",
    price: 149.99,
    originalPrice: 199.99,
    image: woodenChairImg,
    category: "Chairs",
    description: "Elegant wooden chair with modern design and comfortable seating.",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Pretium Elite",
    price: 349.99,
    originalPrice: 449.99,
    image: blueArmchairImg,
    category: "Armchairs",
    description: "Premium blue velvet armchair with exceptional comfort.",
    inStock: true,
    featured: true,
    discount: 100,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "3",
    name: "Aliquam Dining Table",
    price: 599.99,
    image: diningTableImg,
    category: "Tables",
    description: "Modern dining table perfect for contemporary homes.",
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 67,
  },
  {
    id: "4",
    name: "Storage Elite",
    price: 279.99,
    image: storageCabinetImg,
    category: "Storage",
    description: "Spacious storage cabinet with sleek design.",
    inStock: true,
    rating: 4.5,
    reviews: 42,
  },
  {
    id: "5",
    name: "Contemporary Sofa",
    price: 899.99,
    originalPrice: 1099.99,
    image: greySofaImg,
    category: "Sofas",
    description: "Comfortable grey sofa for modern living spaces.",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "6",
    name: "Platform Bed",
    price: 749.99,
    image: platformBedImg,
    category: "Beds",
    description: "Minimalist platform bed with natural wood finish.",
    inStock: true,
    rating: 4.6,
    reviews: 78,
  },
];

export const categories = [
  { name: "Chairs", icon: "Chair" },
  { name: "Storage", icon: "Package" },
  { name: "Armchairs", icon: "Armchair" },
  { name: "Sofas", icon: "Sofa" },
  { name: "Beds", icon: "Bed" },
  { name: "Tables", icon: "Table" },
  { name: "Decor", icon: "Home" },
];