import FormHeader from "@/components/backoffice/FormHeader";
import NewFarmerForm from "@/components/backoffice/NewFarmerForm";
import { getData } from "@/lib/getData";

export default async function UpdateFarmer({ params: { id } }) {
  const farmer = await getData(`farmers/${id}`);
  return (
    <div>
      <FormHeader title="Update Farmer" />

      <NewFarmerForm />
    </div>
  );
}
