import BreadCrumb from "@/components/frontend/BreadCrumb";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cart() {
  return (
    <div>
      <BreadCrumb />
      <div className="grid grid-cols-12 gap-14">
        <div className="col-span-8">
          <h2 className="py-2 mb-6 text-2xl">Your Cart</h2>
          <div className="flex items-center justify-between border-b border-slate-400 text-slate-400 pb-3 font-semibold text-sm mb-4">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className="">
            {/* CART 1 */}
            <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/fish.webp"
                  alt="fish"
                  width={240}
                  height={240}
                  className="rounded-xl w-20 h-20"
                />
                <div className="flex flex-col">
                  <h2 className="">Apple Watch Series 7 - 44mm</h2>
                  <small>Golden</small>
                </div>
              </div>
              <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
                <button className="border-r border-gray-400 py-2 px-4">
                  <Minus />
                </button>
                <p className="flex-grow py-2 px-4">1</p>
                <button className="border-l border-gray-400 py-2 px-4">
                  <Plus />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="">FCFA 25900</h4>
                <button className="">
                  <Trash2 className="text-red-600 w-5 h-5" />
                </button>
              </div>
            </div>
            {/* CART 2 */}
            <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm">
              <div className="flex items-center gap-2">
                <Image
                  src="/fish.webp"
                  alt="fish"
                  width={240}
                  height={240}
                  className="rounded-xl w-20 h-20"
                />
                <div className="flex flex-col">
                  <h2 className="">Apple Watch Series 7 - 44mm</h2>
                  <small>Golden</small>
                </div>
              </div>
              <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
                <button className="border-r border-gray-400 py-2 px-4">
                  <Minus />
                </button>
                <p className="flex-grow py-2 px-4">1</p>
                <button className="border-l border-gray-400 py-2 px-4">
                  <Plus />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="">FCFA 25900</h4>
                <button className="">
                  <Trash2 className="text-red-600 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          {/* COUPON FORM */}
          <div className="flex items-center gap-2 py-8">
            <input
              type="email"
              id="email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 w-1/2"
              placeholder="Enter Coupon"
            />
            <button className="shrink-0 py-2.5 px-4 rounded-lg bg-lime-600">Apply Coupon</button>
          </div>
        </div>

        <div className="col-span-4 sm:block hidden bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 overflow-hidden p-5 dark:text-slate-100 font-bold">
          <h2 className="text-2xl pb-3">Cart Total</h2>
          <div className="flex items-center justify-between border-b border-slate-500 pb-6">
            <span className="">Subtotal</span>
            <span className="">FCFA 58900</span>
          </div>
          <div className="flex items-center justify-between pb-4 mt-2">
            <span className="">Tax</span>
            <span className="">FCFA 0</span>
          </div>
          <div className="flex items-center justify-between pb-4">
            <span className="">Shipping</span>
            <span className="">FCFA 6500</span>
          </div>
          <p className="border-b border-slate-500 pb-6 text-slate-400 font-normal">
            We only charge for shipping when you have over 2kg items
          </p>
          <div className="flex items-center justify-between py-4 font-bold">
            <span className="">Total</span>
            <span className="">FCFA 65000</span>
          </div>
          <Link
            href="#"
            className="bg-slate-200 text-slate-900 rounded-lg py-2 px-4 font-normal"
          >
            Continue to Payment
          </Link>
        </div>
      </div>
    </div>
  );
}
