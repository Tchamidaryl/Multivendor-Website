'use client'
import FormHeader from '@/components/backoffice/FormHeader'
import ImageInput from '@/components/FormInputs/ImageInput'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState} from 'react'
import { useForm } from 'react-hook-form'

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    {
      id: 1,
      title: "Category 1"
    },
    {
      id: 2,
      title: "Category 2"
    },
    {
      id: 3,
      title: "Category 3"
    },
  ];
  const farmers = [
    {
      id: 1,
      title: "Farmer 1"
    },
    {
      id: 2,
      title: "Farmer 2"
    },
    {
      id: 3,
      title: "Farmer 3"
    },
  ];
  const [loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}} = useForm();

  async function onSubmit(data){
    {
      /*
      -id => auto()
      -title
      -slug => auto()
      -description
      -image/images[]
      -sku
      -barcode
      -productPrice
      -salePrice
      -category
      -Farmer
      -tags[]
      */
    }
    const slug = generateSlug(data.title)
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/products", data, "Product", reset);
    setImageUrl("")
  }

  return (
    <div>
        <FormHeader title="New Product"/>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
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
              className='w-full'
            />
            <TextInput
              label="Product Barcode"
              name="barcode"
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Product Price(Before Discount)"
              name="productPrice"
              type='number'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Product Sale Price(Discounted)"
              name="salePrice"
              type='number'
              register={register}
              errors={errors}
              className='w-full'
            />
            <SelectInput
              label="Select Category"
              name="categoryId"
              register={register}
              errors={errors}
              options={categories}
              className='w-full'
            />
            <SelectInput
              label="Select Farmer"
              name="farmerId"
              register={register}
              errors={errors}
              options={farmers}
              className='w-full'
            />
            {/* TAGS */}

            <ImageInput
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint='productImageUploader'
              label="Product Image"
            />
            <TextAreaInput
              label="Product Description"
              name="description"
              register={register}
              errors={errors}
            />
          </div>
            <SubmitButton
              isLoading={loading}
              buttonTitle="Create Product" loadingButtonTitle="Creating product please wait..."/>
        </form>
    </div>
  )
}
