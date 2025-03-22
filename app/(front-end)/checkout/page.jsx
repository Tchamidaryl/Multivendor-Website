import CartBanner from "@/components/Checkout/CartBanner";
import StepForm from "@/components/Checkout/StepForm";
import Steps from "@/components/Checkout/Steps";
import React from "react";

export const dynamic = "force-dynamic"; // Ensures the page is not pre-rendered

export default function page() {

  return (
    <div className="bg-slate-200 dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl my-6 mx-auto border border-slate-700 p-6 rounded-lg">
        {/* STEPS */}
        <Steps />
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          {/* Banner */}
          <CartBanner />
          {/* Form */}
          <StepForm />
        </div>
      </div>
    </div>
  );
}
