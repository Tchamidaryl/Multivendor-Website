"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sorting({ title, slug }) {
  const pathname = usePathname();

  const sortingLinks = [
    {
      title: "Relevance",
      href: `/category/${slug}`,
    },
    {
      title: "Price - High to Low",
      href: `category/${slug}?sort=desc`,
    },
    {
      title: "Price - Low to High",
      href: `category/${slug}?sort=asc`,
    },
  ];
  return (
    <div className="flex items-center justify-between">
      {/* <h2 className="text-2xl">Search Results - Electronics</h2> */}
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="flex text-sm items-center gap-3">
        <p>Sort by:</p>
        <div className="flex items-center">
          {sortingLinks.map((link, i) => {
            return (
              <Link
                key={i}
                className={`${pathname === link.href ? "bg-slate-800 px-2 py-1 border border-lime-400 text-lime-400" : "border border-slate-500 px-2 py-1"}`}
                href={link.href}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
