import PageHeader from "@/components/backoffice/PageHeader";
import { DataTable } from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import React from "react";
import { columns } from "./columns";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export const dynamic = "force-dynamic"; // Ensure dynamic rendering

export default async function Coupons() {
  const session = await getServerSession(authOptions);
  const id = session?.user?.id;
  console.log(id);
  const role = session?.user?.role;
  const allSales = await getData("sales");

  //Fetch all the sales
  //Filter by vendorId => to get sales for this vendor
  //Fetch Order by Id
  //Customer Name, email, phone number, order Number
  const farmerSales = allSales.filter((sale) => sale.vendorId === id);
  return (
    <div>
      {/* Header */}
      {/* <PageHeader
        heading="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add Coupon"
      /> */}

      {/* Table Actions */}
      {/* Export // Search // Bulk Delete */}
      <div className="py-0">
        {role === "ADMIN" ? (
          <DataTable columns={columns} data={allSales} />
        ) : (
          <DataTable columns={columns} data={farmerSales} />
        )}
      </div>
    </div>
  );
}
