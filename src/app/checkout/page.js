"use client";

import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import Loader from "../_components/Loader";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
  const searchParams = useSearchParams();
  const clientSecret = searchParams.get("clientSecret");

  return (
    <div className="max-w-md mx-auto my-7 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      ) : (
        <div className="flex justify-center py-6">
          <Loader />
        </div>
      )}
    </div>
  );
}

function CheckoutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.error(submitError.message);
      return;
    }

    setLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/sucess`, // fixed typo: "sucess"
      },
    });

    if (result.error) {
      console.error(result.error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-primary text-white py-2 rounded-lg flex items-center justify-center"
      >
        {loading ? (
          <>
            <Loader />
            <span className="ml-2">Processing...</span>
          </>
        ) : (
          "Pay Now"
        )}
      </button>
    </form>
  );
}
