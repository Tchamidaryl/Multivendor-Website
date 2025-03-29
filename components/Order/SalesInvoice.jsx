"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useReactToPrint } from "react-to-print";
import logo from "../../public/tdLogo.webp";
import { convertIsoDateToNormal } from "@/lib/convertIsoDateToNormal";

export default function SalesInvoice({ order }) {
  const contentRef = useRef(null);

  const invoiceDate = convertIsoDateToNormal(order.createdAt);

  const subTotal = order.orderItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  const tax = 2000;
  const total = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2);

  const handlePrint = useReactToPrint({ contentRef });

  return (
    <div className="flex flex-col">
      {/* PRINT BUTTON */}
      <div className="flex justify-end mb-8">
        <button
          type="button"
          onClick={() => handlePrint()}
          className="px-4 py-3 text-xs font-bold bg-slate-800 text-slate-200 dark:bg-gray-100 dark:text-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Download/Print Invoice
        </button>
      </div>

      {/* INVOICE CONTENT */}
      <div ref={contentRef}>
        <div className="max-w-4xl mx-auto border border-gray-500 p-8 rounded-sm text-slate-900 dark:text-slate-200 ">
          {/* Header */}
          <div className="flex justify-between border-b border-gray-500 pb-8">
            <div className="flex flex-col">
              <h2>Bill From:</h2>
              <p>Shoppify Hardware Store</p>
              <p>150 Eleign Street</p>
              <p>Canada</p>
              <p>shopiifystore@gmail.com</p>
            </div>
            <Image
              src={logo}
              alt="limifood logo"
              className="w-20 h-20 rounded"
            />
          </div>
          {/* Header End */}
          <div className="flex justify-between border-b border-gray-500 py-8">
            <div className="flex flex-col">
              <h2>Bill To:</h2>
              <p>
                {order.firstName} {order.lastName}
              </p>
              <p>
                {order.streetAddress}, {order.city}, {order.district}
              </p>
              <p>{order.country}</p>
              <p>{order.email}</p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p>Invoice #</p>
                <p>{order.orderNumber}</p>
              </div>
              <div className="flex justify-between gap-4">
                <p>Invoice Date</p>
                <p>{invoiceDate}</p>
              </div>
              <div className="flex justify-between gap-4">
                <p>Amount Due</p>
                <p>FCFA {subTotal}</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Item
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Item Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit Cost
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Line Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems.map((item, i) => {
                  const itemSubTotal = (item.quantity * item.price).toFixed(2);
                  return (
                    <tr
                      key={i}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.title}
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">{item.quantity}</td>
                      <td className="px-6 py-4">FCFA {item.price}</td>
                      <td className="px-6 py-4">FCFA {itemSubTotal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between border-b border-gray-500 py-8">
            <div className="flex flex-col">
              <h2>NOTES</h2>
              <p>Free Shipping for 30 Days Money back guarantee</p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between gap-4">
                <p>SubTotal</p>
                <p>FCFA {subTotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Tax</p>
                <p>FCFA {tax}</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p>FCFA {total}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-8">
            <Image
              src={logo}
              alt="limifood logo"
              className="w-20 h-20 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
