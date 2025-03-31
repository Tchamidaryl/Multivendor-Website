import FilterComponent from "@/components/frontend/Filter/FilterComponent";
import React from "react";
import { getData } from "@/lib/getData"

export default async function page({ params }) {
 const { slug } = await params;
 const category = await getData(`categories/filter/${slug}`)
 // const { products } = categories;
 // console.log(products)
  return (
   <div>
    <h2>Slug: {slug}</h2>
      <FilterComponent category={category} />
    </div>
  );
}
