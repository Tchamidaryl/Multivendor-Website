import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import { DataTable } from '@/components/data-table-components/DataTable';
import React from 'react'
import { columns } from './columns';
import { getData } from '@/lib/getData';

export default async function page() {
  const products = await getData("products")
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
        <DataTable columns={columns} data={products} />
      </div>
    </div>
  );
}
