import FilterComponent from "@/components/frontend/Filter/FilterComponent";
import React from "react";

export default async function page({ params }) {
  const { slug } = await params;
  return (
    <div>
      <FilterComponent />
    </div>
  );
}
