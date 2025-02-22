"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
// import QuillEditor from '@/components/FormInputs/QuillEditor'
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const QuillEditor = dynamic(
  () => import("@/components/FormInputs/QuillEditor"),
  {
    ssr: false,
  }
);
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewTrainingForm({ categories, updateData = {} }) {
  const initialImageUrl = updateData?.imageUrl ?? "";
  const id = updateData?.id ?? "";
  const initialContent = updateData?.content ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
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
      ...updateData,
    },
  });

  //Quill Editor
  const [content, setContent] = useState(initialContent);
  //Quill Editor End

  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/community");
  }

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    console.log(data);
    if (id) {
      data.id = id;
      //make put request
      makePutRequest(
        setLoading,
        `api/trainings/${id}`,
        data,
        "Training",
        redirect
      );
      console.log("Updated training: ", data);
    } else {
      makePostRequest(
        setLoading,
        "api/trainings",
        data,
        "Training",
        reset,
        redirect
      );
      setImageUrl("");
      setContent("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Training Title"
          name="title"
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
        <TextAreaInput
          label="Training Description"
          name="description"
          register={register}
          errors={errors}
        />
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="trainingImageUploader"
          label="Training Thumbnail"
        />
        {/* content */}
        <QuillEditor
          label="Training Content"
          value={content}
          onChange={setContent}
        />
        {/* content end */}
        <ToggleInput
          label="Publish your Training"
          name="isActive"
          trueTitle="Active"
          falseTitle="Inactive"
          register={register}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Training" : "Create Training"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Training please wait...`}
      />
    </form>
  );
}
