import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      barcode,
      categoryId,
      description,
      farmerId,
      productImages,
      isActive,
      isWholesale,
      productCode,
      productPrice,
      salePrice,
      sku,
      slug,
      tags,
      title,
      unit,
      wholesalePrice,
      wholesaleQty,
      productStock,
      qty,
    } = await request.json();
    // Check if the product already exists in the db
    const existingProduct = await db.product.findUnique({
      where: {
        slug,
      },
    });
    if (existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Product already exists",
        },
        { status: 409 }
      );
    }
    const newProduct = await db.product.create({
      data: {
        barcode,
        category: { connect: { id: categoryId } },
        description,
        user: { connect: { id: farmerId } },
        productImages,
        imageUrl: productImages[0],
        isActive,
        isWholesale,
        productCode,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        sku,
        slug,
        tags,
        title,
        unit,
        wholesalePrice: parseFloat(wholesalePrice),
        wholesaleQty: parseInt(wholesaleQty),
        productStock: parseInt(productStock),
        qty: parseInt(qty),
      },
    });

    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Product",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get Product",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
