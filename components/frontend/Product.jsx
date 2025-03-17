"use client";
import { addToCart } from "@/redux/slices/cartSlice";
import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Product({ product }) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    //Dispatch the reducer
    dispatch(addToCart(product));
    toast.success("Item Added Successfully");
  }
  return (
    <div className="rounded-lg overflow-hidden mr-3 bg-white dark:bg-slate-900 border shadow">
      <Link href={`/products/${product.slug}`} className="">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={240}
          height={240}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="px-4">
        <Link href={`/products/${product.slug}`} className="">
          <h2 className="text-center dark:text-slate-200 text-slate-800 my-2 font-semibold">
            {product.title}
          </h2>
        </Link>
        <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
          <p className="">FCFA {product.salePrice}</p>
          <button
            onClick={() => handleAddToCart()}
            className="flex items-center space-x-2 bg-lime-600 hover:bg-lime-800 duration-300 transition-all px-4 py-2 rounded-md text-white"
          >
            <BaggageClaim />
            <span className="">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
