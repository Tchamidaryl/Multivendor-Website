"use client";
import TextInput from "@/components/FormInputs/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateOnboardingFormData,
} from "@/redux/slices/onboardingSlice";
import ImageInput from "@/components/FormInputs/ImageInput";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";

export default function AdditionalInformationForm() {
  const dispatch = useDispatch();
  const [farmerProfileImageUrl, setFarmerProfileImageUrl] = useState("");
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
    data.farmerProfileImageUrl = farmerProfileImageUrl;
    //Update the checkout data
    dispatch(updateOnboardingFormData(data));
    //Update the current step
    dispatch(setCurrentStep(currentStep + 1));
  }

  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">
        Additional Information
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <ImageInput
          imageUrl={farmerProfileImageUrl}
          setImageUrl={setFarmerProfileImageUrl}
          endpoint="farmerProfileUploader"
          label="Farmer Profile Image"
        />
        <TextAreaInput
          label="Farmer's Payment Terms"
          name="terms"
          register={register}
          errors={errors}
          isRequired={false}
        />
        <TextAreaInput
        label="Notes"
        name="notes"
        register={register}
        errors={errors}
        isRequired={false}
        />
      </div>
      <NavButtons />
    </form>
  );
}
