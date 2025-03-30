import React from "react";

export default function PriceFilter() {
  const priceRanges = [
    {
      display: "under 20000",
      max: 20000,
    },
    {
      display: "between 20000 and 40000",
      max: 40000,
      min: 20000,
    },
    {
      display: "between 50000 and 70000",
      max: 70000,
      min: 50000,
    },
  ];
  return (
   <div>
    <div className="flex">
     <h2>Price</h2>
     <button></button>

     {/* Filters */}
    </div>
    </div>
  );
}
