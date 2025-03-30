import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";

export default function Filters() {
  return (
    <div className="bg-green-500">
      <PriceFilter />
      <BrandFilter />
    </div>
  );
}
