"use client";
import BreadCrumb from "@/components/frontend/BreadCrumb";
import CartItems from "@/components/frontend/CartItems";
import CartSubTotalCart from "@/components/frontend/CartSubTotalCart";
import EmptyCart from "@/components/frontend/EmptyCart";
import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart);
  const subTotal =
    cartItems
      .reduce((acc, currentItem) => {
        return acc + currentItem.salePrice * currentItem.qty;
      }, 0)
      .toFixed(2) ?? 0;

  console.log(subTotal);
  return (
    <div>
      <BreadCrumb />
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-12 gap-6 md:gap-14">
          <CartItems cartItems={cartItems} />
          <CartSubTotalCart subTotal={subTotal} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
