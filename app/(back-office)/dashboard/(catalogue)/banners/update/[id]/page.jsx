import FormHeader from "@/components/backoffice/FormHeader";
import BannerForm from "@/components/backoffice/Forms/BannerForm";
import { getData } from "@/lib/getData";

export const dynamic = "force-dynamic"; // Ensure dynamic rendering

export default async function UpdateBanner({ params: { id } }) {
  const banner = await getData(`banners/${id}`);
  console.log(banner)
  return (
    <div>
      <FormHeader title="Update Banner" />

      <BannerForm updateData={banner} />
    </div>
  );
}
