"use client";
import TextInput from "@/components/FormInputs/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { Circle, Truck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateOnboardingFormData,
} from "@/redux/slices/onboardingSlice";
import ArrayItemInput from "@/components/FormInputs/ArrayItemInput";

export default function FarmDetailsForm() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const existingFormData = useSelector(
    (store) => store.onboarding.onboardingFormData
  );

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  });

  async function processData(data) {
    data.products = products;
    console.log(data);
    //Update the checkout data
    dispatch(updateOnboardingFormData(data));
    //Update the current step
    dispatch(setCurrentStep(currentStep + 1));
  }

  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">
        Farm Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="What is the Size of Your Land in Meters"
          name="landSize"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="What is your main Crop that you Cultivate"
          name="mainCrop"
          register={register}
          errors={errors}
          className="w-full"
        />
        <ArrayItemInput
          setItems={setProducts}
          items={products}
          itemTitle="Product"
        />
      </div>
      <NavButtons />
    </form>
  );
}
