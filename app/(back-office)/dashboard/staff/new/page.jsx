'use client'
import FormHeader from '@/components/backoffice/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import ToggleInput from '@/components/FormInputs/ToggleInput'
import { makePostRequest } from '@/lib/apiRequest'
import { generateUserCode } from '@/lib/generateUserCode'
import React, { useState} from 'react'
import { useForm } from 'react-hook-form'

export default function NewStaff() {
  const [loading, setLoading] = useState(false)
  const [couponCode, setCouponCode] = useState()
  const {register, watch, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      isActive:true
    }
  });
  const isActive = watch("isActive")
  async function onSubmit(data){
    /*
    -name
    -password
    -email
    -phone
    -physicalAddress
    -NIN
    -DOB
    -notes
    -isActive
    */
    const code = generateUserCode("LSM", data.name);
    data.code = code;
    console.log(data);
    makePostRequest(setLoading, "api/staffs", data, " Staff", reset);
  }

  return (
    <div>
        <FormHeader title="New Staff"/>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              label="Staff Full Name"
              name="name"
              register={register}
              errors={errors}
            />
            <TextInput
              label="NIN(Id Number)"
              name="nin"
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Date of Birth"
              name="dob"
              type='date'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Password"
              name="password"
              type='password'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Staff's E-mail Address"
              name="email"
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Staff's Phone"
              name="phone"
              type='tel'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label="Staff's Physical Address"
              name="physicalAddress"
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextAreaInput
              label="Notes"
              name="notes"
              register={register}
              errors={errors}
              isRequired = {false}
            />
            <ToggleInput
            label="Staff Member Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Inactive"
            register={register}
            />
          </div>
            <SubmitButton
              isLoading={loading}
              buttonTitle="Create staff" loadingButtonTitle="Creating staff please wait..."/>
        </form>
    </div>
  )
}
