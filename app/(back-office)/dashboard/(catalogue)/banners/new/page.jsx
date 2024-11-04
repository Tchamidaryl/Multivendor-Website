'use client'
import FormHeader from '@/components/backoffice/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { generateSlug } from '@/lib/generateSlug'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function NewBanner() {
  const {register, handleSubmit, formState:{errors}} = useForm();

  async function onSubmit(data){
    {
      /*
      -id => auto()
      -title
      -link
      -image
      */
    }

    const slug = generateSlug(data.title)
    data.slug = slug
    console.log(data);
  }

  return (
    <div>
        <FormHeader title="New Banner"/>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              label="Banner Title"
              name="title"
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextAreaInput
              label="Category Description"
              name="description"
              register={register}
              errors={errors}
            />
          </div>
            <SubmitButton isLoading={false} buttonTitle="Create Category" loadingButtonTitle="Creating Category please wait..."/>
        </form>
    </div>
  )
}
