'use client'
import FormHeader from '@/components/backoffice/FormHeader'
import NewFarmerForm from '@/components/backoffice/NewFarmerForm'
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

  return (
    <div>
      <FormHeader title="New Farmer" />

      <NewFarmerForm/>
    </div>
  )
}
