import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params
  try {
    const farmer = await db.user.findUnique({
      where: {
        id,
      },
      include: {
        farmerProfile: true,
      },
    });
    return NextResponse.json(farmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get farmer",
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
    const existingUser = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }
    const deletedUser = await db.user.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete User",
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
    const farmerData = await request.json();
    const existingFarmer = await db.farmer.findUnique({
      where: {
        id,
      },
    });
    if (!existingFarmer) {
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
    const updatedFarmer = await db.farmer.update({
      where: { id },
      data: {
        farmerUniqueCode: farmerData.farmerUniqueCode,
        contactPerson: farmerData.contactPerson,
        contactPersonPhone: farmerData.contactPersonPhone,
        email: farmerData.email,
        name: farmerData.name,
        notes: farmerData.notes,
        phone: farmerData.phone,
        physicalAddress: farmerData.physicalAddress,
        terms: farmerData.terms,
        isActive: farmerData.isActive,
        farmerProfileImageUrl: farmerData.farmerProfileImageUrl,
        products: farmerData.products,
        landSize: parseFloat(farmerData.landSize),
        mainCrop: farmerData.mainCrop,
        userId: farmerData.userId,
      },
    });
    // console.log(updatedFarmer);
    return NextResponse.json(updatedFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update Farmer",
        error,
      },
      { status: 500 }
    );
  }
}
