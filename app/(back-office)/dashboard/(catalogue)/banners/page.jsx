import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { getData } from "@/lib/getData";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table-components/DataTable";

export default async function page() {
  const bannersData = await getData("banners");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Banners"
        href="/dashboard/banners/new"
        linkTitle="Add Banner"
      />

      {/* Table Actions */}
      {/* Export // Search // Bulk Delete */}
      {/* <TableActions/> */}

      <div className="py-0">
        <DataTable columns={columns} data={bannersData} />
      </div>
    </div>
  );
}
