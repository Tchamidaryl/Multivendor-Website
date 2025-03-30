"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import ArrayItemInput from "@/components/FormInputs/ArrayItemInput";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { generateUserCode } from "@/lib/generateUserCode";
import { useRouter } from "next/navigation";
import MultipleImageInput from "../FormInputs/MultipleImageInput";

export default function NewProductForm({
  categories,
  farmers,
  updateData = {},
}) {
  const initialImageUrl = updateData?.imageUrl ?? "";
  const initialTags = updateData?.tags ?? [];
  const id = updateData?.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  // TAGS
  const [tags, setTags] = useState(initialTags);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      isWholeSale: false,
      ...updateData,
    },
  });
  const isActive = watch("isActive");
  console.log(isActive);

  const isWholesale = watch("isWholesale");

  const router = useRouter();
  function redirect() {
    router.push("/dashboard/products");
  }

  const [productImages, setProductImages] = useState([])
  console.log(productImages)

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    const productCode = generateUserCode("LLP", data.title);
    data.slug = slug;
    data.productImages = productImages;
    data.tags = tags;
    data.qty = 1;
    data.productCode = productCode;
    console.log(data);
    if (id) {
      data.id = id;
      //make put request
      makePutRequest(
        setLoading,
        `api/products/${id}`,
        data,
        "Product",
        redirect
      );
      console.log("Updated Request: ", data);
    } else {
      //make post request
      makePostRequest(
        setLoading,
        "api/products",
        data,
        "Product",
        reset,
        redirect
      );
      setProductImages([]);
      setTags([]);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Product Title"
          name="title"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Product SKU"
          name="sku"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Product Barcode"
          name="barcode"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Product Price(Before Discount)"
          name="productPrice"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Product Sale Price(Discounted)"
          name="salePrice"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Product Stock"
          name="productStock"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Unit of Measurement( e.g. Kilograms)"
          name="unit"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          label="Select Category"
          name="categoryId"
          register={register}
          errors={errors}
          options={categories}
          className="w-full"
        />
        <SelectInput
          label="Select Farmer"
          name="farmerId"
          register={register}
          errors={errors}
          options={farmers}
          className="w-full"
        />
        <ToggleInput
          label="Support Wholesale Selling"
          name="isWholesale"
          trueTitle="Supported"
          falseTitle="Not Supported"
          register={register}
        />

        {isWholesale && (
          <>
            <TextInput
              label="Wholesale Price"
              name="wholesalePrice"
              type="number"
              register={register}
              errors={errors}
              className="w-full"
            />
            <TextInput
              label="Minimum Wholesale Quantity"
              name="wholesaleQty"
              type="number"
              register={register}
              errors={errors}
              className="w-full"
            />
          </>
        )}

        <MultipleImageInput
          imageUrls={productImages}
          setImageUrls={setProductImages}
          endpoint="multipleProductsUploader"
          label="Product Images"
        />

        {/* TAGS */}
        <ArrayItemInput setItems={setTags} items={tags} itemTitle="Tag" />

        <TextAreaInput
          label="Product Description"
          name="description"
          register={register}
          errors={errors}
        />

        <ToggleInput
          label="Publish your Product"
          name="isActive"
          trueTitle="Active"
          falseTitle="Inactive"
          register={register}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Product" : "Create Product"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Product please wait...`}
      />
    </form>
  );
}
