import { useCart } from "../../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CartItem from "./CartItem.jsx";
// format prices
const formatCurrency = (value) => `EGP ${value.toFixed(0)}`;

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } =
        useCart();
    const navigate = useNavigate();

    const handleUpdateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            toast.success("Item removed from cart");
        } else {
            updateQuantity(productId, newQuantity);
        }
    };

    const handleRemoveItem = (productId, productName) => {
        removeFromCart(productId);
        toast.warning(`${productName} removed from cart`);
    };

    const handleCheckout = (e) => {
        e?.preventDefault();
        const isLoggedIn =
            localStorage.getItem("userEmail") ||
            sessionStorage.getItem("userEmail");
        if (!isLoggedIn) {
            navigate("/login", { state: { from: "/checkout" } });
            return;
        }
        navigate("/checkout");
    };

    if (cart.length === 0) {
        return (
            <div className="flex-1 py-16 flex flex-col justify-center items-center bg-gradient-to-r from-furniture-cream to-furniture-warm">
                <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
                <p className="text-gray-600">Your cart is empty</p>
                <div className="mt-8">
                    <Link to="/shop">
                        <button className="bg-furniture-green hover:scale-105 transition-all duration-300 text-white font-bold py-2 px-6 rounded-lg normal-case">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="py-16 text-center bg-gradient-to-r from-furniture-cream to-furniture-warm">
                <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
                <p className="text-gray-600">
                    {cart.length} {cart.length === 1 ? "item" : "items"} in your
                    cart
                </p>
            </div>

            {/* Content */}
            <div className="container px-4 flex flex-col lg:flex-row gap-8 py-12">
                {/* Cart Items */}
                <div className="lg:w-2/3">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">Cart Items</h2>
                        <button
                            onClick={() => {
                                clearCart();
                                toast.warning("Cart cleared");
                            }}
                            className="text-red-600 hover:bg-red-50 px-3 py-1 rounded-md text-sm font-medium normal-case"
                        >
                            Clear Cart
                        </button>
                    </div>

                    <div className="space-y-6">
                        {cart.map((item) => (
                            <CartItem
                                key={item.product.id}
                                item={item}
                                onUpdateQuantity={handleUpdateQuantity}
                                onRemove={handleRemoveItem}
                            />
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-36">
                        <h2 className="text-xl font-semibold mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="font-semibold">Subtotal</span>
                                <span>{formatCurrency(getCartTotal())}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Shipping</span>
                                <span className="text-furniture">Free</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Tax (10%)</span>
                                <span className="text-gray-600">
                                    {formatCurrency(getCartTotal() * 0.1)}
                                </span>
                            </div>
                            <div className="border-t border-gray-200 my-4"></div>
                            <div className="flex justify-between text-lg font-semibold">
                                <p className="font-bold text-lg">Total</p>
                                <span className="text-furniture-green">
                                    {formatCurrency(getCartTotal() * 1.1)}
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <button
                                onClick={handleCheckout}
                                className="bg-furniture-green hover:scale-105 transition-all duration-300 text-white font-bold py-3 w-full rounded-lg"
                            >
                                Proceed to Checkout
                            </button>

                            <Link to="/shop" className="block">
                                <button className="bg-furniture-warm hover:scale-105 transition-all duration-300 text-black font-bold py-3 w-full rounded-lg">
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
