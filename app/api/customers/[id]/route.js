import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = await params;
  try {
    const {
      name,
      userName,
      dateOfBirth,
      firstName,
      lastName,
      email,
      phone,
      customerProfileImageUrl,
      streetAddress,
      city,
      country,
      district,
    } = await request.json();
    const existingUser = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (!existingUser) {
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
    const updatedUser = await db.userProfile.update({
      where: { id },
      data: {
        name,
        userName,
        dateOfBirth,
        firstName,
        lastName,
        email,
        phone,
        customerProfileImageUrl,
        streetAddress,
        city,
        country,
        district,
      },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update User",
        error,
      },
      { status: 500 }
    );
  }
}
