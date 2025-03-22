import Link from "next/link";
import React from "react";

export default function CartSubTotalCart({ subTotal }) {
  const shipping = 6500.0;
  const tax = 0.0;
  const totalPrice = (
    Number(subTotal) +
    Number(shipping) +
    Number(tax)
  ).toFixed(2);
  return (
    <div className="md:col-span-4 col-span-full sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 overflow-hidden p-5 dark:text-slate-100 font-bold">
      <h2 className="text-2xl pb-3">Cart Total</h2>
      <div className="flex items-center justify-between border-b border-slate-500 pb-6">
        <span className="">Subtotal</span>
        <span className="">FCFA {subTotal}</span>
      </div>
      <div className="flex items-center justify-between pb-4 mt-2">
        <span className="">Tax</span>
        <span className="">FCFA {tax}</span>
      </div>
      <div className="flex items-center justify-between pb-4">
        <span className="">Shipping</span>
        <span className="">FCFA {shipping}</span>
      </div>
      <p className="border-b border-slate-500 pb-6 text-slate-400 font-normal">
        We only charge for shipping when you have over 2kg items
      </p>
      <div className="flex items-center justify-between py-4 font-bold">
        <span className="">Total</span>
        <span className="">FCFA {totalPrice}</span>
      </div>
      <div className="mt-8">
        <Link
          href="/checkout"
          className="text-slate-50 rounded-lg py-3 px-6 font-normal bg-slate-900 dark:bg-lime-600"
        >
          Continue to Checkout
        </Link>
      </div>
    </div>
  );
}
