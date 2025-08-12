import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { toast } from "sonner";
import Star from "@mui/icons-material/Star";
import StarHalf from "@mui/icons-material/StarHalf";
import StarBorder from "@mui/icons-material/StarBorder";

export function ProductCard({ product }) {
    const { addToCart } = useCart();

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
        <>
            <div className="relative overflow-hidden rounded-xl bg-white border border-gray-20 shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group">
                <Link to={`/products/${product.id}`} className="block">
                    <div className="relative overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {discountPercentage > 0 && (
                            <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full group-hover:scale-105 transition-all duration-300 ">
                                {discountPercentage}% OFF
                            </span>
                        )}
                    </div>

                    <div className="p-4 flex flex-col justify-between gap-2 ">
                        <h6 className="text-gray-500 text-sm">
                            {product.category}
                        </h6>
                        <h3 className="text-lg font-semibold">
                            {product.name}
                        </h3>
                        <div className="flex items-end gap-2">
                            <span className="text-lg font-bold text-furniture-green">
                                <span className="text-sm">EGP</span>{" "}
                                {product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                                <span className="text-sm line-through text-gray-500">
                                    <span className="text-sm">EGP </span>
                                    {product.originalPrice.toFixed(2)}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
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
                    </div>
                </Link>

                <div className="px-4 pb-4 flex flex-col items-start gap-2">
                    <button
                        onClick={handleAddToCart}
                        disabled={!product.inStock || product.stock <= 0}
                        className={`w-full font-semibold  py-3 px-4 rounded-lg transition-all duration-300 ${
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
        </>
    );
}
