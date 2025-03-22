"use client"
import React from "react";
import PersonalDetailsForm from "./StepForms/PersonalDetailsForm";
import PaymentMethodForm from "./StepForms/PaymentMethodForm";
import OrderSummary from "./StepForms/OrderSummary";
import ShippingDetailsForm from "./StepForms/ShippingDetailsForm";
import { useSelector } from "react-redux";

export const dynamic = "force-dynamic"; // Ensures the page is not pre-rendered

export default function StepForm() {
  const currentStep = useSelector((store) => store.checkout.currentStep);
  function renderFormByStep(step) {
    if (step === 1) {
      return <PersonalDetailsForm />;
    } else if (step === 2) {
      return <ShippingDetailsForm />;
    } else if (step === 3) {
      return <PaymentMethodForm />;
    } else if (step === 4) {
      return <OrderSummary />;
    }
  }
  return <div>{renderFormByStep(currentStep)}</div>;
}
