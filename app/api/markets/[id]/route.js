import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}) {
  try {
    const market = await db.market.findUnique({
      where: {
        id
      },
    });
    return NextResponse.json(market);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get market",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request, {params:{id}}) {
  try {
    const existingMarket = await db.market.findUnique({
      where: {
        id
      },
    });
    if (!existingMarket) {
      return NextResponse.json({
        data: null,
        message: "Market not found",
      },
        {
        status: 404,
      })
    }
    const deletedMarket = await db.market.delete({
        where: {
          id,
        }
      })
    return NextResponse.json(deletedMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Market",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const { categoryIds, title, slug, logoUrl, description, isActive } =
      await request.json();
    const existingMarket = await db.market.findUnique({
      where: {
        id,
      },
    });
    if (!existingMarket) {
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
    const updatedMarket = await db.market.update({
      where: { id },
      data: {
        categoryIds,
        title,
        slug,
        logoUrl,
        description,
        isActive,
      },
    });
    // console.log(updatedMarket);
    return NextResponse.json(updatedMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update Market",
        error,
      },
      { status: 500 }
    );
  }
}
