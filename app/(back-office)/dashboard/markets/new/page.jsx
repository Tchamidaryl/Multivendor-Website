import NewMarketForm from '@/components/backoffice/NewMarketForm'
import { getData } from '@/lib/getData';
import React from 'react'

export const dynamic = "force-dynamic"; // Ensure dynamic rendering

export default async function NewMarket() {
  // Categories
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title
    };
  })
  return (
    <NewMarketForm categories={categories} />
  )
}
