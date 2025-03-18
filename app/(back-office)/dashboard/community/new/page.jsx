import FormHeader from "@/components/backoffice/FormHeader";
import NewTrainingForm from "@/components/backoffice/NewTrainingForm";
import { getData } from "@/lib/getData";
import React from "react";

export const dynamic = "force-dynamic"; // Ensure dynamic rendering

export default async function NewTraining() {
  // Categories
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <div className="">
      <FormHeader title="New Training" />
      <NewTrainingForm categories={categories} />
    </div>
  );
}
