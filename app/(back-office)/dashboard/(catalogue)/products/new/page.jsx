import NewProductForm from '@/components/backoffice/NewProductForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function NewProduct() {
  // Categories and farmers
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title
    };
  })

  const usersData = await getData("users");
  const farmersData = usersData.filter((user) => user.role === "FARMER")
  const farmers = farmersData.map((farmer) => {
    return {
      id: farmer.id,
      title: farmer.name,
    }
  })

  return (
    <NewProductForm categories={categories} farmers={farmers} />
  )
}
