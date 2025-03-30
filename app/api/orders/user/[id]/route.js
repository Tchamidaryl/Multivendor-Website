import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const order = await db.order.findUnique({
      where: {
        userId: id
      },
      include: {
        orderItems: true
      }
    });
    return NextResponse.json(order);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get order",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

