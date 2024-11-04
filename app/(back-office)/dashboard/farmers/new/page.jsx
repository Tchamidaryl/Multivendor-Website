'use client'
import FormHeader from '@/components/backoffice/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest } from '@/lib/apiRequest'
import { generateUserCode } from '@/lib/generateUserCode'
import React, { useState} from 'react'
import { useForm } from 'react-hook-form'

export default function NewFarmer() {
  const [loading, setLoading] = useState(false)
  const [couponCode, setCouponCode] = useState()
  const {register, watch, reset, handleSubmit, formState:{errors}} = useForm();
  async function onSubmit(data){
    const farmerUniqueCode = generateUserCode("LFF", data.name);
    data.farmerUniqueCode = farmerUniqueCode;
    console.log(data);
    makePostRequest(setLoading, "api/farmers", data, "Farmer", reset);
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
            <TextAreaInput
              label="Farmer's Payment Terms"
              name="terms"
              register={register}
              errors={errors}
            />
            <TextAreaInput
              label="Notes"
              name="notes"
              register={register}
              errors={errors}
              isRequired = {false}
            />
          </div>
            <SubmitButton
              isLoading={loading}
              buttonTitle="Create Farmer" loadingButtonTitle="Creating Farmer please wait..."/>
        </form>
    </div>
  )
}
