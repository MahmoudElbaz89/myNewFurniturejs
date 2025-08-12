import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCart } from "../../contexts/CartContext";

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
    hidePostalCode: true,
};

const Payment = ({ shippingInfo, onSuccess, onBack }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { cart, getCartTotal } = useCart();

    const [error, setError] = useState("");
    const [processing, setProcessing] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleChange = (event) => {
        setDisabled(!event.complete);
        setError(event.error?.message || "");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            setError(
                "Payment system is not ready. Please try again in a moment."
            );
            return;
        }

        if (disabled) {
            return;
        }

        setProcessing(true);
        setError("");

        try {
            // UPDATE STOCK in localStorage (same logic as before)
            const savedProducts =
                JSON.parse(localStorage.getItem("products")) || [];
            const updatedProducts = savedProducts.map((product) => {
                const cartItem = cart.find(
                    (item) => item.product.id === product.id
                );
                if (cartItem) {
                    return {
                        ...product,
                        stock: Math.max(product.stock - cartItem.quantity, 0),
                    };
                }
                return product;
            });
            localStorage.setItem("products", JSON.stringify(updatedProducts));

            onSuccess();
        } catch (err) {
            setError(
                "An error occurred while processing the payment. Please try again."
            );
        } finally {
            setProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <h2 className="text-xl font-semibold mb-4">
                    Payment Information
                </h2>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <CardElement
                        options={CARD_ELEMENT_OPTIONS}
                        onChange={handleChange}
                    />
                </div>

                {error && (
                    <div className="mt-2 text-red-600 text-sm">{error}</div>
                )}
            </div>

            <div className="flex justify-between mt-8">
                <button
                    type="button"
                    onClick={onBack}
                    disabled={processing}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-furniture-green"
                >
                    Back
                </button>

                <button
                    type="submit"
                    disabled={processing || disabled || !stripe || !elements}
                    className="px-6 py-2 bg-furniture-green hover:bg-furniture-green-dark text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-furniture-green disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {processing
                        ? "Processing..."
                        : `Pay EGP ${(getCartTotal() * 1.1).toFixed(2)}`}
                </button>
            </div>
        </form>
    );
};

export default Payment;
