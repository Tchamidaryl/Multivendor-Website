import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params; // Await params first
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      select: {
        email: true,
        name: true,
        id: true,
        role: true,
        createdAt: true,
        profile: true,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
