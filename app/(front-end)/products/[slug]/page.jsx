import AddToCartButton from "@/components/frontend/AddToCartButton";
import BreadCrumb from "@/components/frontend/BreadCrumb";
import CategoryCarousel from "@/components/frontend/CategoryCarousel";
import { getData } from "@/lib/getData";
import { BaggageClaim, Minus, Plus, Send, Share2, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = await getData(`products/product/${slug}`);
  const catId = product.categoryId;
  const category = await getData(`/categories/${catId}`)
  const categoryProducts = category.products;
  return (
    <div>
      <BreadCrumb />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={240}
            height={240}
            className="w-full"
          />
        </div>
        <div className="col-span-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-3xl font-semibold">
              {product.title}
            </h2>
            <button className="">
              <Share2 />
            </button>
          </div>
          <div className="border-b border-gray-500">
            <p className="py-2">
              {product.description}
            </p>
            <div className="flex items-center gap-8 mb-4">
              <p className="">SKU: {product.sku}</p>
              <p className="bg-lime-200 py-1.5 px-4 rounded-full text-slate-900">
                <b>Stock</b>: {product.productStock}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 pt-4 border-b border-gray-500 pb-4">
            <div className="flex items-center gap-4">
              <h4 className="text-2xl">FCFA {product.salePrice}</h4>
              <del className="text-slate-400 text-sm">FCFA {product.productPrice}</del>
            </div>
            <p className="flex items-center">
              <Tag className="w-5 h-5 text-slate-400 me-2" />
              <span className="">Save 50% right now</span>
            </p>
          </div>
          <div className="flex justify-between items-center py-6">
            <AddToCartButton product={product}/>
          </div>
        </div>
        <div className="col-span-3 sm:block hidden bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
          <h2 className="bg-slate-100 dark:bg-slate-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100">
            DELIVERY & RETURNS
          </h2>

          <div className="p-4">
            <div className="flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3">
              <span className="">Limi Express</span>
              <Send />
            </div>
            <div className="py-3 text-slate-900 dark:text-slate-100 border-b border-gray-500">
              Eligible for Free Delivery.
              <Link href="#">View Details</Link>
            </div>
            <h2 className="text-slate-900 dark:text-slate-200 py-2">Choose your Location</h2>

            <div className="pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-700 my-8 rounded-xl p-4">
        <h2 className="mb-4 text-xl font-semibold text-slate-400 ml-3">
          Similar Products
        </h2>
        <CategoryCarousel products={categoryProducts} />
      </div>
    </div>
  );
}
