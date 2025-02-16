import FormHeader from "@/components/backoffice/FormHeader";
import NewProductForm from "@/components/backoffice/NewProductForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateProduct({ params: { id } }) {
  const product = await getData(`products/${id}`);
  // Categories and farmers
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  const usersData = await getData("users");
  const farmersData = usersData.filter((user) => user.role === "FARMER");
  const farmers = farmersData.map((farmer) => {
    return {
      id: farmer.id,
      title: farmer.name,
    };
  });

  return (
    <div className="">
      <FormHeader title="Update Product" />
      <NewProductForm
        categories={categories}
        farmers={farmers}
        updateData={product}
      />
    </div>
  );
}
