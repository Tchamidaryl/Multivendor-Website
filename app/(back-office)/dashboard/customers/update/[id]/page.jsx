import FormHeader from "@/components/backoffice/FormHeader";
import CustomerForm from "@/components/backoffice/Form/CustomerForm";
import { getData } from "@/lib/getData";

export const dynamic = "force-dynamic"; // Ensure dynamic rendering

export default async function UpdateCustomer({ params }) {
  const { id } = await params;
  const user = await getData(`users/${id}`);
  return (
    <div>
      <FormHeader title="Update Customer" />

      <CustomerForm updateData={user} />
    </div>
  );
}
