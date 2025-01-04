import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const { title, slug, imageUrl, description, isActive } = await request.json();
        const newCategory = db.category.create({
            data: {
                title,
                slug,
                imageUrl,
                description,
                isActive
            }
        })
        console.log(newCategory);
        return NextResponse.json(newCategory)
    }catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to create Category",
            error,
        },{ status: 500}
    )
    }
}