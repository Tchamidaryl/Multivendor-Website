import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },
      include: {
        products: true,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get Category",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  try {
    const existingCategory = await db.category.findUnique({
      where: {
        id,
      },
    });
    if (!existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: "Category not found",
        },
        {
          status: 404,
        }
      );
    }
    const deletedCategory = await db.category.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Category",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params }) {
  const { id } = await params;
  try {
    const { title, slug, imageUrl, description, isActive } =
      await request.json();
    const existingCategory = await db.category.findUnique({
      where: {
        id,
      },
    });
    if (!existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: "Not Found",
        },
        {
          status: 404,
        }
      );
    }
    const updatedCategory = await db.category.update({
      where: { id },
      data: {
        title,
        slug,
        imageUrl,
        description,
        isActive,
      },
    });
    // console.log(updatedCategory);
    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update Category",
        error,
      },
      { status: 500 }
    );
  }
}
