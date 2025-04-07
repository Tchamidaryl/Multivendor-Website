import FilterComponent from "@/components/frontend/Filter/FilterComponent";
import { getData } from "@/lib/getData";
import React from "react";

export const dynamic = "force-dynamic"; // Ensure dynamic rendering

export default async function Search({ searchParams }) {
  const { sort, min, max, search, page = 1 } = await searchParams;
  // const page = searchParams.page || 1;
  // console.log(sort);
  let products;
  if (search) {
    products = await getData(`products?search=${search}`);
  } else {
    products = await getData(`products?search=""`);
  }

  const category = {
    title: search,
    slug: "",
    products,
    isSearch: true
  };
  //const { products } = categories;
  // console.log(products)
  return (
    <div>
      <FilterComponent
        category={category}
        products={products}
      />
    </div>
  );
}
