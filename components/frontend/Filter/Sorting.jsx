import Link from 'next/link';
import React from 'react'

export default function Sorting() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl">Search Results - Electronic</h2>
      <div className="flex text-sm items-center gap-3">
        <p>Sort by:</p>
        <div className="flex items-center">
          <Link className="border border-slate-500 px-2 py-1" href="#">
            Relevance
          </Link>
          <Link className="border border-slate-500 px-2 py-1" href="#">
            Price - High to Low
          </Link>
          <Link className="border border-slate-500 px-2 py-1" href="#">
            Price - Low to High
          </Link>
        </div>
      </div>
    </div>
  );
}
