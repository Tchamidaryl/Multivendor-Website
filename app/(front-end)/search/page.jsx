import FilterComponent from "@/components/frontend/Filter/FilterComponent";
import React from "react";

export const dynamic = "force-dynamic"; // Ensure dynamic rendering

export default function Search() {
  return (
    <div>
      <FilterComponent />
    </div>
  );
}
