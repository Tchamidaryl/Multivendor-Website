'use client'
import FormHeader from '@/components/backoffice/FormHeader'
import ImageInput from '@/components/FormInputs/ImageInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import ToggleInput from '@/components/FormInputs/ToggleInput'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewBanner() {
  const [logoUrl, setLogoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const {register, reset, watch, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      isActive:true
    }
  });
  const isActive = watch("isActive")

  async function onSubmit(data){
    {
      /*
      -id => auto()
      -title
      -slug => auto()
      -logo
      -description
      */
    }
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = logoUrl;
    console.log(data);
    makePostRequest(setLoading, "api/markets", data, "Market", reset);
    setLogoUrl("");
  }

  return (
    <div>
        <FormHeader title="New Market"/>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              label="Market Title"
              name="title"
              register={register}
              errors={errors}
            />
            {/* Configure this endpoint in the core.js */}
            <ImageInput
              imageUrl={logoUrl}
              setImageUrl={setLogoUrl}
              endpoint='marketLogoUploader'
              label="Market Logo"
            />
            <TextAreaInput
              label="Market Description"
              name="description"
              register={register}
              errors={errors}
            />
            <ToggleInput
              label="Market Status"
              name="isActive"
              trueTitle="Active"
              falseTitle="Inactive"
              register={register}
            />
          </div>
            <SubmitButton isLoading={false} buttonTitle="Create Market" loadingButtonTitle="Creating Market please wait..."/>
        </form>
    </div>
  )
}
