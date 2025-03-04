import db from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import base64url from "base64url";
import { Resend} from "resend"
import { EmailTemplate } from "@/components/email-template"

export async function POST(request) {
  try {
    // Extract the credentials
    const { name, email, password, role } = await request.json();

    //Check if the user already exists in the database
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User Already exists",
        },
        {
          status: 409,
        }
      );
    }
    //Encrypt the password => bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //Create a User in the DB
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
    console.log(newUser);
    //SEND THE EMAIL IF USER ROLE == FARMER
    if (role === "FARMER") {
      
    }
    return NextResponse.json(
      {
        data: newUser,
        message: "User Created Successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Server Error: Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get Users",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
