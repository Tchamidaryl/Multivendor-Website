"use client";

import { Checkbox } from "@/components/ui/checkbox";
import DateColumn from "@/components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "productImage",
    header: "Product Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="productImage" />,
  },
  {
    accessorKey: "productTitle",
    header: ({ column }) => (
      <SortableColumn column={column} title="Product Title" />
    ),
  },
  {
    accessorKey: "productPrice",
    header: "Price",
  },
  {
    accessorKey: "productQty",
    header: "Qty",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const coupon = row.original;
  //     return (
  //       <ActionColumn
  //         row={row}
  //         title="Coupon"
  //         editEndpoint={`coupons/update/${coupon.id}`}
  //         endpoint={`coupons/${coupon.id}`}
  //       />
  //     );
  //   },
  // },
];
