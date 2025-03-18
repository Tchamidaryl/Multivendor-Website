import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import { DataTable } from '@/components/data-table-components/DataTable'
import React from 'react'
import { columns } from './columns'
import { getData } from '@/lib/getData'

export const dynamic = "force-dynamic"; // Ensure dynamic rendering

export default async function Farmers() {
  const farmersData = await getData("farmers");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Farmers"
        href="/dashboard/farmers/new"
        linkTitle="Add Farmer"
      />

      {/* Table Actions */}
      {/* Export // Search // Bulk Delete */}
      <div className="py-0">
        <DataTable columns={columns} data={farmersData} filterKeys={["name"]} />
      </div>
    </div>
  )
}
