import Hero from "@/components/FormInputs/Hero";
import CategoryList from "@/components/frontend/CategoryList";
import CommunityTrainings from "@/components/frontend/CommunityTrainings";
import MarketList from "@/components/frontend/MarketList";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketList />
      <div className="py-8">
        <CategoryList />
      </div>
      <div className="py-8">
        <CategoryList />
      </div>
      <div className="py-8">
        <CategoryList />
      </div>
      <CommunityTrainings/>
      <h2 className="text-4xl">WELCOME TO E-COMMERCE</h2>

      <Link className="my-4 underline" href="/register-farmer">
        Become a farmer/ Vendor/ Supplier
      </Link>
    </div>
  );
}
