import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import { getData } from '@/lib/getData';
import React from 'react'
import { columns } from './columns'
import { DataTable } from '@/components/data-table-components/DataTable';

export default async function page() {
  const categories = await getData("categories");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
      />

      {/* Table Actions */}
      {/* Export // Search // Bulk Delete */}
      {/* <TableActions /> */}

      <div className="py-0">
        <DataTable columns={columns} data={categories} />
      </div>
    </div>
  );
}
