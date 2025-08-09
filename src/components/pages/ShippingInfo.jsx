import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

// Replace with your publishable key
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_51RtBVYFdpTDDRKF9c98ISBfOC2xXL75D37DMBzjkB6kcJ7SNSuZlAie8HMhMHss2V9RQYQyff8ADKDQxw6Naz4rr00l2qRZbBb"
);

function StripeElementsWrapper({ children }) {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        appearance: {
          theme: "stripe",
        },
      }}
    >
      {children}
    </Elements>
  );
}

const Checkout = () => {
  const {
    cart: cartItems = [],
    getCartTotal,
    clearCart,
    getCartItemsCount,
  } = useCart();
  const [clientSecret, setClientSecret] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [orderComplete, setOrderComplete] = useState(false);
  const navigate = useNavigate();

  console.log("Checkout - Cart Items:", cartItems);
  console.log("Checkout - Cart Items Count:", cartItems.length);

  // Redirect to cart if empty
  useEffect(() => {
    if (cartItems.length === 0 && !orderComplete) {
      console.log("Redirecting to cart - cart is empty");
      navigate("/cart");
    }
  }, [cartItems, orderComplete, navigate]);

  // Track cart loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Calculate total with 10% tax
  const total = (getCartTotal() * 1.1).toFixed(2);

  // Handle payment intent creation
  useEffect(() => {
    // Only proceed if we have items in the cart
    if (!cartItems || cartItems.length === 0) {
      setIsLoading(false);
      return;
    }

    const createPaymentIntent = async () => {
      try {
        setIsLoading(true);

        // For demo, we'll just set a dummy secret
        setClientSecret("dummy_client_secret_for_demo");
      } catch (error) {
        console.error("Error creating payment intent:", error);
      } finally {
        setIsLoading(false);
      }
    };

    createPaymentIntent();
  }, [cartItems, getCartTotal]);

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSuccess = () => {
    setOrderComplete(true);
    clearCart();
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-furniture-green mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading your cart...</p>
        </div>
      </div>
    );
  }

  // Show empty cart message
  if ((!cartItems || cartItems.length === 0) && !orderComplete) {
    return (
      <div className="min-h-screen bg-white">
        <div className="py-16 text-center bg-gradient-to-r from-furniture-cream to-furniture-warm">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Redirecting you back to your cart...
            </p>
            <Link
              to="/shop"
              className="bg-furniture-green hover:scale-105 transition-all duration-300 text-white font-bold py-2 px-6 rounded-lg inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Show order complete message
  if (orderComplete) {
    return (
        <div className="min-h-96 flex flex-col justify-center items-center  bg-gradient-to-r from-furniture-cream to-furniture-warm">
            
                <div className="max-w-4xl text-center m-8">
                    <div className="bg-white p-10 rounded-lg shadow-lg max-w-xl">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg
                                className="w-12 h-12 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            Order Confirmed!
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Thank you for your purchase. A confirmation email
                            has been sent to{" "}
                            {shippingInfo.email || "your email"}.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/"
                                className="bg-furniture-green hover:bg-furniture-green-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                            >
                                Back to Home
                            </Link>
                            <Link
                                to="/shop"
                                className="border-2 border-furniture-green text-furniture-green hover:bg-gray-50 font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
  }

  // Main checkout form
  return (
    <StripeElementsWrapper>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {step === 1 ? "Shipping Information" : "Payment Details"}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              {step === 1
                ? "Please enter your shipping details to continue"
                : "Complete your purchase with secure payment"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {/* Progress steps */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center ${
                    step >= 1 ? "text-furniture-green" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 1
                        ? "bg-furniture-green text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    1
                  </div>
                  <span className="ml-2 font-medium">Shipping</span>
                </div>
                <div className="flex-1 h-1 mx-4 bg-gray-200">
                  <div
                    className={`h-1 transition-all duration-300 ${
                      step >= 2 ? "bg-furniture-green w-full" : "w-0"
                    }`}
                  ></div>
                </div>
                <div
                  className={`flex items-center ${
                    step >= 2 ? "text-furniture-green" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 2
                        ? "bg-furniture-green text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    2
                  </div>
                  <span className="ml-2 font-medium">Payment</span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {step === 1 ? (
                <form onSubmit={handleShippingSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Contact Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={shippingInfo.name}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              name: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-furniture-green focus:border-furniture-green"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={shippingInfo.email}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              email: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-furniture-green focus:border-furniture-green"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Shipping Address
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Street Address *
                        </label>
                        <input
                          type="text"
                          id="address"
                          required
                          value={shippingInfo.address}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              address: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-furniture-green focus:border-furniture-green"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            City *
                          </label>
                          <input
                            type="text"
                            id="city"
                            required
                            value={shippingInfo.city}
                            onChange={(e) =>
                              setShippingInfo({
                                ...shippingInfo,
                                city: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-furniture-green focus:border-furniture-green"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="postalCode"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Postal Code *
                          </label>
                          <input
                            type="text"
                            id="postalCode"
                            required
                            value={shippingInfo.postalCode}
                            onChange={(e) =>
                              setShippingInfo({
                                ...shippingInfo,
                                postalCode: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-furniture-green focus:border-furniture-green"
                          />
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-furniture-green hover:bg-furniture-green-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Order Summary
                    </h3>
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex justify-between items-center"
                        >
                          <div className="flex items-center">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-16 h-16 object-cover rounded-md"
                            />
                            <div className="ml-4">
                              <h4 className="text-sm font-medium text-gray-900">
                                {item.product.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                          <span className="text-sm font-medium">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${getCartTotal().toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mt-1">
                        <p>Shipping</p>
                        <p>Free</p>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mt-1">
                        <p>Tax (10%)</p>
                        <p>${(getCartTotal() * 0.1).toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-gray-900 mt-4 pt-4 border-t border-gray-200">
                        <p>Total</p>
                        <p>${total}</p>
                      </div>
                    </div>
                  </div>

                  {clientSecret && (
                    <CheckoutForm
                      shippingInfo={shippingInfo}
                      onSuccess={handlePaymentSuccess}
                      onBack={() => setStep(1)}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </StripeElementsWrapper>
  );
};

export default Checkout;
