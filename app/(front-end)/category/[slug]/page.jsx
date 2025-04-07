import FilterComponent from "@/components/frontend/Filter/FilterComponent";
import React from "react";
import { getData } from "@/lib/getData";

export default async function page({ params, searchParams }) {
  const { slug } = await params;
  const { sort, min, max } = await searchParams;
  const page = searchParams.page || 1;
  // console.log(sort);
  const category = await getData(`categories/filter/${slug}`);
  let products;
  if (page) {
    products = await getData(`products?catId=${category.id}&page=${page}`);
  } else if (max && min) {
    products = await getData(
      `products?catId=${category.id}&sort=asc&max=${max}&min=${min}`
    );
  } else if (min) {
    products = await getData(
      `products?catId=${category.id}&sort=asc&min=${min}`
    );
  } else if (max) {
    products = await getData(
      `products?catId=${category.id}&sort=asc&max=${max}`
    );
  } else if (sort) {
    products = await getData(`products?catId=${category.id}&sort=${sort}`);
  } else {
    products = await getData(`products?catId=${category.id}`);
  }
  //const { products } = categories;
  // console.log(products)
  return (
    <div>
      <FilterComponent category={category} products={products} />
    </div>
  );
}
