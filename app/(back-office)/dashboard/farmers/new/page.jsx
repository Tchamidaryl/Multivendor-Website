'use client'
import FormHeader from '@/components/backoffice/FormHeader'
import ImageInput from '@/components/FormInputs/ImageInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import ToggleInput from '@/components/FormInputs/ToggleInput'
import { makePostRequest } from '@/lib/apiRequest'
import { generateUserCode } from '@/lib/generateUserCode'
import { useRouter } from 'next/navigation'
import React, { useState} from 'react'
import { useForm } from 'react-hook-form'

export default function NewFarmer() {
  const [loading, setLoading] = useState(false)
  const [farmerProfileImageUrl, setFarmerProfileImageUrl] = useState("");
  const [couponCode, setCouponCode] = useState()
  const {register, watch, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      isActive:true
    }
  });
  const isActive = watch("isActive")
  const router = useRouter();
  function redirect(){
    router.push("/dashboard/banners");
  }
  async function onSubmit(data){
    const farmerUniqueCode = generateUserCode("LFF", data.name);
    data.farmerUniqueCode = farmerUniqueCode;
    data.farmerProfileImageUrl = farmerProfileImageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/farmers", data, "Farmer", reset, redirect);
  }

  return (
    <div>
        <FormHeader title="New Farmer"/>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              label="Farmer's Full Name"
              name="name"
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Farmer's Phone"
              name="phone"
              type='tel'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Farmer's E-mail Address"
              name="email"
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Farmer's Physical Address"
              name="physicalAddress"
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Farmer's Contact Person"
              name="contactPerson"
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Farmer's Contact Person Phone"
              name="contactPersonPhone"
              type='tel'
              register={register}
              errors={errors}
              className='w-full'
            />
            <ImageInput
              imageUrl={farmerProfileImageUrl}
              setImageUrl={setFarmerProfileImageUrl}
              endpoint='farmerProfileUploader'
              label="Farmer Profile Image"
            />
            <TextAreaInput
              label="Farmer's Payment Terms"
              name="terms"
              register={register}
              errors={errors}
              isRequired = {false}
            />
            <TextAreaInput
              label="Notes"
              name="notes"
              register={register}
              errors={errors}
              isRequired = {false}
            />
            <ToggleInput
              label="Farmer Status"
              name="isActive"
              trueTitle="Active"
              falseTitle="Inactive"
              register={register}
            />
          </div>
            <SubmitButton
              isLoading={loading}
              buttonTitle="Create Farmer" loadingButtonTitle="Creating Farmer please wait..."
            />
        </form>
    </div>
  )
}
