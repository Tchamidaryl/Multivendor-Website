import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import { DataTable } from '@/components/data-table-components/DataTable';
import { getData } from '@/lib/getData';
import React from 'react'
import { columns } from './columns';

export const dynamic = "force-dynamic"; // Ensure dynamic rendering

export default async function Coupons() {
  const couponsData = await getData("coupons");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add Coupon"
      />

      {/* Table Actions */}
      {/* Export // Search // Bulk Delete */}
      <div className="py-0">
        <DataTable columns={columns} data={couponsData} />
      </div>
    </div>
  );
}
