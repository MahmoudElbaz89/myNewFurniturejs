import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCart } from "../../contexts/CartContext";

const CheckoutForm = ({ shippingInfo, onSuccess, onBack }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { getCartTotal, clearCart } = useCart();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(true);

  // Handle real-time validation errors from the Card Element
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(!event.complete || event.empty);
    setError(event.error ? event.error.message : "");

    // Reset processing and succeeded states if the user edits card details
    if (processing) {
      setProcessing(false);
    }
    if (succeeded) {
      setSucceeded(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      setProcessing(false);
      return;
    }

    try {
      // For demo purposes, we'll simulate a successful payment
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo, just call onSuccess
      setSucceeded(true);
      clearCart();
      onSuccess();
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Payment error:", err);
      setProcessing(false);
    }
  };

  const cardStyle = {
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
  };

  if (succeeded) {
    return (
      <div className="text-center py-8">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">Thank you for your purchase.</p>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-furniture-green hover:bg-furniture-green-dark text-white font-bold py-2 px-6 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <CardElement
            options={{
              style: cardStyle,
              hidePostalCode: true,
            }}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-md"
          />
        </div>
        {error && <div className="mt-2 text-red-600 text-sm">{error}</div>}
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
          disabled={processing || disabled}
          className="px-6 py-2 bg-furniture-green hover:bg-furniture-green-dark text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-furniture-green disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {processing
            ? "Processing..."
            : `Pay $${(getCartTotal() * 1.1).toFixed(2)}`}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;