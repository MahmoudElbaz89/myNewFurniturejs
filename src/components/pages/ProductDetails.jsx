import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";
import { products } from "../data/products";

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

    const discountPercentage = product.originalPrice
        ? Math.round(
              ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
          )
        : 0;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col gap-4">
                <h6 className="text-gray-500 text-sm uppercase">
                    {product.category}
                </h6>
                <h1 className="text-3xl font-bold">{product.name}</h1>

                {/* Rating and Reviews with MUI Icons */}

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
                        ({product.reviews} review{product.reviews !== 1 && "s"})
                    </span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                    {product.description ||
                        "This product does not have a description yet."}
                </p>

                <button
                    onClick={() => addToCart(product)}
                    className="mt-6 w-full md:w-auto bg-furniture-warm hover:bg-[#2D6450] hover:text-white font-semibold text-sm py-3 px-6 rounded-lg transition-all duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
