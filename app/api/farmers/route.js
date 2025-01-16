import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    /*
        farmerUniqueCode,
        contactPerson,
        contactPersonPhone,
        email,
        name,
        notes,
        phone,
        physicalAddress,
        terms,
        isActive,
        farmerProfileImageUrl,
        products,
        landSize,
        mainCrop,
        userId
        */
    const farmerData = await request.json();
    const newFarmerProfile = await db.farmerProfile.create({
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
    console.log(newFarmerProfile);
    return NextResponse.json(newFarmerProfile);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Farmer",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const profiles = await db.farmerProfile.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(profiles);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get Farmer Profiles",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
