import Steps from "@/components/Onboarding/Steps";
import React from "react";
import StepForm from "@/components/Onboarding/StepForm";

export const dynamic = "force-dynamic"; // Ensures the page is not pre-rendered

export default async function page({params}) {
  const { id } = await params;
  return (
    <div className="bg-slate-200 dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl my-6 mx-auto border border-slate-700 p-6 rounded-lg">
        {/* STEPS */}
        <Steps/>
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          {/* Form */}
          <StepForm farmerId={id} />
        </div>
      </div>
    </div>
  );
}
