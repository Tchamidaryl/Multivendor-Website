import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const training = await db.training.findUnique({
      where: {
        id
      },
    });
    return NextResponse.json(training);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get training",
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
    const existingTraining = await db.training.findUnique({
      where: {
        id
      },
    });
    if (!existingTraining) {
      return NextResponse.json({
        data: null,
        message: "Training not found",
      },
        {
        status: 404,
      })
    }
    const deletedTraining = await db.training.delete({
        where: {
          id,
        }
      })
    return NextResponse.json(deletedTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Training",
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
    const {
      title,
      slug,
      categoryId,
      imageUrl,
      description,
      isActive,
      content,
    } = await request.json();
    const existingTraining = await db.training.findUnique({
      where: {
        id,
      },
    });
    if (!existingTraining) {
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
    const updatedTraining = await db.training.update({
      where: { id },
      data: {
        title,
        slug,
        categoryId,
        imageUrl,
        description,
        isActive,
        content,
      },
    });
    // console.log(updatedTraining);
    return NextResponse.json(updatedTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update Training",
        error,
      },
      { status: 500 }
    );
  }
}
