import Hero from "@/components/frontend/Hero";
import CategoryList from "@/components/frontend/CategoryList";
import CommunityTrainings from "@/components/frontend/CommunityTrainings";
import MarketList from "@/components/frontend/MarketList";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/lib/getData";

export default async function Home() {
  const categories = await getData("categories");
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketList />
      {
        categories.map((category, i) => {
          return (
            <div className="py-8" key={i}>
              <CategoryList category={category} />
            </div>
          );
        })
      }
      {/* <div className="py-8">
        <CategoryList />
      </div>
      <div className="py-8">
        <CategoryList />
      </div> */}
      <CommunityTrainings />
      <h2 className="text-4xl">WELCOME TO E-COMMERCE</h2>

      <Link className="my-4 underline" href="/register-farmer">
        Become a farmer/ Vendor/ Supplier
      </Link>
    </div>
  );
}
