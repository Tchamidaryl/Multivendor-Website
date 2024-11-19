import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const { farmerUniqueCode, contactPerson, contactPersonPhone, email, name, notes, phone, physicalAddress, terms} = await request.json();
        const newFarmer = await db.farmer.create({
            data:{
                farmerUniqueCode,
                contactPerson,
                contactPersonPhone,
                email,
                name,
                notes,
                phone,
                physicalAddress,
                terms,
            }
        })
        console.log(newFarmer);
        return NextResponse.json(newFarmer)
    }catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to create Farmer",
            error,
        },{ status: 500}
    )
    }
}