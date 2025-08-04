import { useCart } from "../../contexts/CartContext";
import { Button, Container } from "@mui/material";
import {
  Remove as MinusIcon,
  Add as PlusIcon,
  DeleteOutline as TrashIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } =
    useCart();

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
    toast.success(`${productName} removed from cart`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="py-16 text-center bg-gradient-to-r from-orange-50 to-amber-50">
          <Container maxWidth="lg">
            <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
            <p className="text-gray-600">Your cart is empty</p>
            <div className="mt-8">
              <Link to="/shop">
                <Button
                  variant="contained"
                  className="bg-furniture-green hover:bg-furniture-green/90 text-white font-bold py-2 px-6 rounded-lg normal-case"
                >
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="py-16 text-center bg-gradient-to-r from-orange-50 to-amber-50">
        <Container maxWidth="lg">
          <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-gray-600">
            {cart.length} item{cart.length !== 1 ? "s" : ""} in your cart
          </p>
        </Container>
      </div>

      <Container maxWidth="lg" className="py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Cart Items</h2>
              <Button
                onClick={handleClearCart}
                className="text-red-600 hover:bg-red-50 px-3 py-1 rounded-md text-sm font-medium normal-case"
              >
                Clear Cart
              </Button>
            </div>

            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Product Image */}
                      <div className="md:w-1/3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold">
                              {item.product.name}
                            </h3>
                            <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-furniture-green/10 text-furniture-green rounded-full">
                              {item.product.category}
                            </span>
                          </div>
                          <button
                            onClick={() =>
                              handleRemoveItem(
                                item.product.id,
                                item.product.name
                              )
                            }
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <TrashIcon />
                          </button>
                        </div>

                        <p className="text-gray-600 text-sm mt-2">
                          {item.product.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() =>
                                handleUpdateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                              <MinusIcon className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleUpdateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                              <PlusIcon className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-lg font-semibold">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-sm text-gray-500">
                                ${item.product.price} each
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 my-4"></div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${(getCartTotal() * 1.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Link to="/checkout" className="block">
                  <Button
                    fullWidth
                    variant="contained"
                    className="bg-furniture hover:bg-furniture-green/90 text-white font-bold py-3 rounded-lg normal-case"
                  >
                    Proceed to Checkout
                  </Button>
                </Link>

                <Link to="/shop" className="block">
                  <Button
                    fullWidth
                    variant="outlined"
                    className="border-furniture text-furniture-green hover:bg-furniture-green/5 font-medium py-3 rounded-lg normal-case"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
