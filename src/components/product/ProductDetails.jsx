import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import avatar from "../../assets/avatar.jpeg";
// MUI Icons
import Star from "@mui/icons-material/Star";
import StarHalf from "@mui/icons-material/StarHalf";
import StarBorder from "@mui/icons-material/StarBorder";

export default function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const found = products.find((item) => item.id.toString() === id);
        setProduct(found || null);
    }, [id]);

    if (!product) {
        return (
            <div className="text-center mt-10 text-xl text-gray-600">
                Product not found.
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    const discountPercentage = product.originalPrice
        ? Math.round(
              ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
          )
        : 0;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-16 ">
            <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <h6 className="text-gray-500 text-sm uppercase">
                        {product.category}
                    </h6>
                    <h1 className="text-3xl font-bold">{product.name}</h1>

                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-furniture-green">
                            <span className="text-sm">EGP</span>{" "}
                            {product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                            <span className="text-base line-through text-gray-500">
                                <span className="text-sm">EGP</span>{" "}
                                {product.originalPrice.toFixed(2)}
                            </span>
                        )}
                        {discountPercentage > 0 && (
                            <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                {discountPercentage}% OFF
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold text-gray-600">
                            {product.rating}
                        </span>
                        <div className="flex text-yellow-500 text-sm">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>
                                    {product.rating >= i + 1 ? (
                                        <Star fontSize="small" />
                                    ) : product.rating >= i + 0.5 ? (
                                        <StarHalf fontSize="small" />
                                    ) : (
                                        <StarBorder fontSize="small" />
                                    )}
                                </span>
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">
                            ({product.reviews} review
                            {product.reviews !== 1 && "s"})
                        </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        {product.description ||
                            "This product does not have a description yet."}
                    </p>
                    <div className="mt-3 border-t pt-4">
                        <h2 className="text-xl font-semibold mb-3">
                            Customer Reviews
                        </h2>

                        <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm">
                            <img
                                src={avatar}
                                alt="Reviewer"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">
                                        John Doe
                                    </span>
                                    <div className="flex text-yellow-500">
                                        <Star fontSize="small" />
                                        <Star fontSize="small" />
                                        <Star fontSize="small" />
                                        <Star fontSize="small" />
                                        <StarHalf fontSize="small" />
                                    </div>
                                </div>
                                <p className="text-gray-700 mt-1">
                                    Great quality product! Really happy with my
                                    purchase. Will definitely recommend to
                                    friends.
                                </p>
                                <span className="text-xs text-gray-500 mt-1">
                                    Posted on Aug 1, 2025
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock || product.stock <= 0}
                    className={`w-full font-semibold text-lg mt-6 py-3 px-4  rounded-lg transition-all duration-300 ${
                        !product.inStock || product.stock <= 0
                            ? "bg-gray-300  cursor-not-allowed"
                            : "bg-furniture-warm hover:bg-[#2D6450] hover:text-white"
                    }`}
                >
                    {!product.inStock || product.stock <= 0
                        ? "Out of Stock"
                        : "Add to Cart"}
                </button>
            </div>
        </div>
    );
}
