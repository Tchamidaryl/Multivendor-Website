"use client";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function CartProduct({ cartItem }) {
  const dispatch = useDispatch();
  function handleCartItemDelete(cartId) {
    //Dispatch the removeFromCart reducer
    dispatch(removeFromCart(cartId));
    toast.success("Item removed Successfully!");
  }
  function handleQtyIncrement(cartId) {
    //Dispatch the incrementQty reducer
    dispatch(incrementQty(cartId));
  }
  function handleQtyDecrement(cartId) {
    //Dispatch the decrementQty reducer
    dispatch(decrementQty(cartId));
  }
  return (
    <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4">
      <div className="flex items-center gap-2">
        <Image
          src={cartItem.imageUrl}
          alt={cartItem.title}
          width={240}
          height={240}
          className="rounded-xl w-20 h-20"
        />
        <div className="flex flex-col">
          <h2 className="">{cartItem.title}</h2>
        </div>
      </div>
      <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
        <button
          onClick={() => handleQtyDecrement(cartItem.id)}
          className="border-r border-gray-400 py-2 px-4"
        >
          <Minus />
        </button>
        <p className="flex-grow py-2 px-4">{cartItem.qty}</p>
        <button
          onClick={() => handleQtyIncrement(cartItem.id)}
          className="border-l border-gray-400 py-2 px-4"
        >
          <Plus />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <h4 className="">FCFA {cartItem.salePrice}</h4>
        <button onClick={() => handleCartItemDelete(cartItem.id)} className="">
          <Trash2 className="text-red-600 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
