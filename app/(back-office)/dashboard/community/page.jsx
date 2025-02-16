import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import { DataTable } from '@/components/data-table-components/DataTable';
import React from 'react'
import { columns } from './columns';
import { getData } from '@/lib/getData';

export default async function page() {
  const trainingsData = await getData("trainings");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Limi Community Training"
        href="/dashboard/community/new"
        linkTitle="Add Training"
      />

      {/* Table Actions */}
      {/* Export // Search // Bulk Delete */}
      <div className="py-0">
        <DataTable columns={columns} data={trainingsData} />
      </div>
    </div>
  );
}
