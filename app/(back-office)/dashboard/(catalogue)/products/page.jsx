import PageHeader from "@/components/backoffice/PageHeader";
import { DataTable } from "@/components/data-table-components/DataTable";
import React from "react";
import { columns } from "./columns";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export const dynamic = "force-dynamic"; // Ensure dynamic rendering

export default async function page() {
  const session =await getServerSession(authOptions);
  if (!session) {
    return null;
  }
  const role = session?.user?.role;
  const id = session?.user?.id;
  console.log(id);
  const allProducts = await getData("products");
  const farmerProducts = allProducts.filter((product) => product.userId === id);
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Products"
        href="/dashboard/products/new"
        linkTitle="Add Product"
      />

      {/* Table Actions */}
      {/* Export // Search // Bulk Delete */}
      <div className="py-0">
        {role === "ADMIN" ? (
          <DataTable columns={columns} data={allProducts} />
        ) : (
          <DataTable columns={columns} data={farmerProducts} />
        )}
      </div>
    </div>
  );
}
