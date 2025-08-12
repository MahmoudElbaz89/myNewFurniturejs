import {
    Remove as MinusIcon,
    Add as PlusIcon,
    DeleteOutline as TrashIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const formatCurrency = (value) => `EGP ${value.toFixed(0)}`;


const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    const { product, quantity } = item;
    const outOfStock = quantity >= product.stock;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <Link to={`/products/${product.id}`} className="self-center sm:self-start">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-[150px] h-[150px] object-cover rounded-lg "
                    />
                    </Link>

                    <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                            <div>
                                <Link to={`/products/${product.id}`}>
                                    <h3 className="text-lg font-semibold">
                                        {product.name}
                                    </h3>
                                </Link>
                                <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-furniture-green/10 text-furniture-green rounded-full">
                                    {product.category}
                                </span>
                            </div>
                            <button
                                onClick={() =>
                                    onRemove(product.id, product.name)
                                }
                                className="text-red-500 hover:text-red-700 p-1"
                                aria-label={`Remove ${product.name}`}
                            >
                                <TrashIcon />
                            </button>
                        </div>

                        <p className="text-gray-600 text-sm mt-2">
                            {product.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                            {/* Quantity controls */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() =>
                                        onUpdateQuantity(
                                            product.id,
                                            quantity - 1
                                        )
                                    }
                                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50"
                                    disabled={quantity <= 1}
                                    aria-label="Decrease quantity"
                                >
                                    <MinusIcon className="w-4 h-4" />
                                </button>
                                <span className="w-8 text-center">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() =>
                                        onUpdateQuantity(
                                            product.id,
                                            quantity + 1
                                        )
                                    }
                                    className={`w-8 h-8 flex items-center justify-center border rounded-md ${
                                        outOfStock
                                            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                                            : "border-gray-300 hover:bg-gray-50"
                                    }`}
                                    disabled={outOfStock}
                                    aria-label="Increase quantity"
                                >
                                    <PlusIcon className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Price info */}
                            <div className="text-right">
                                <p className="text-lg font-semibold text-furniture-green">
                                    {formatCurrency(product.price * quantity)}
                                </p>
                                {quantity > 1 && (
                                    <p className="text-sm text-gray-500">
                                        {formatCurrency(product.price)} each
                                    </p>
                                )}
                                {outOfStock && (
                                    <p className="text-xs text-red-500 mt-1">
                                        No More Stock Available
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;