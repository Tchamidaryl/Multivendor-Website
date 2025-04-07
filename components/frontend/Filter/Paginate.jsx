"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

export default function Paginate({ totalPages }) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  console.log("current Page", currentPage);
  console.log("Total Pages", totalPages)
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`${currentPage === 1 ? `?${new URLSearchParams({})}` : `?${new URLSearchParams({ page: parseInt(currentPage) - 1 })}`}`}
          />
        </PaginationItem>
        {totalPages <= 3 ? (
          Array.from({ length: 3 }, (_, index) => {
            return (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={index + 1 === currentPage}
                  href={`?${new URLSearchParams({ page: index + 1 })}`}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            );
          })
        ) : (
          <>
            {Array.from({ length: 3 }, (_, index) => {
              return (
                <PaginationItem key={index}>
                  <PaginationLink href="#">{index + 1}</PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {/* <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem> */}
        <PaginationItem>
          <PaginationNext
            href={`${
              currentPage == totalPages
                ? `?${new URLSearchParams({ page: totalPages })}`
                : `?${new URLSearchParams({ page: parseInt(currentPage) + 1 })}`
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
