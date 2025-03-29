"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateUserCode";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CustomerForm({ user, updateData = {} }) {
  const initialImageUrl = updateData?.customerProfileImageUrl ?? "";
  const id = updateData?.id ?? "";
  const [loading, setLoading] = useState(false);
  const [customerProfileImageUrl, setCustomerProfileImageUrl] =
    useState(initialImageUrl);
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...updateData,
    },
  });

  const router = useRouter();
  function redirect() {
    router.push("/dashboard/customers");
  }
  async function onSubmit(data) {
    data.userId = user.id;
    data.customerProfileImageUrl = customerProfileImageUrl;
    console.log(data);
    makePutRequest(
      setLoading,
      `api/customers/${user.id}`,
      data,
      "Customer Profile",
      reset,
      redirect
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">
        Personal Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 border-b border-gray-700 pb-10">
        <TextInput
          label="Full Name"
          name="name"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Username"
          name="userName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Last Name"
          name="lastName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Phone Number"
          name="phone"
          register={register}
          errors={errors}
          className="w-full"
        />
        <ImageInput
          imageUrl={customerProfileImageUrl}
          setImageUrl={setCustomerProfileImageUrl}
          endpoint="customerProfileUploader"
          label="Customer Profile Image"
        />
      </div>

      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400 pt-10">
        Shipping Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Street Address"
          name="streetAddress"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="City"
          name="city"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Country"
          name="country"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="District"
          name="district"
          register={register}
          errors={errors}
          className="w-full"
        />
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Customer" : "Create Customer"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Customer please wait...`}
      />
    </form>
  );
}
