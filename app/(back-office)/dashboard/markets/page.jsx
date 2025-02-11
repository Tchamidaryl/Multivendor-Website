import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import { DataTable } from '@/components/data-table-components/DataTable';
import React from 'react'
import { columns } from './columns';
import { getData } from '@/lib/getData';

export default async function page() {
  const markets = await getData("markets");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Markets"
        href="/dashboard/markets/new"
        linkTitle="Add Market"
      />

      {/* Table Actions */}
      {/* Export // Search // Bulk Delete */}
      <div className="py-0">
        <DataTable columns={columns} data={markets} />
      </div>
    </div>
  );
}
