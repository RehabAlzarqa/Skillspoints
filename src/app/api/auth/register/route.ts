import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, confirmPassword } = await request.json();

    // Validation
    if (!email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Confirm password
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    // Check if email exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already used" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const newUser = await prisma.user.create({
      data: {
<<<<<<< HEAD:src/app/api/auth/register/route.ts
        name: name || "", // أو بدون || إذا متأكدة
=======
        name: name || "",
>>>>>>> 8b8cf61a0fe35d4394e5c435a47f308a5fd2176a:src/app/api/auth/signup/route.ts
        email,
        password: hashedPassword,
        totalPoints: 0,
      },
    });

    // Response
    return NextResponse.json(
      {
        message: "User created successfully",
        userId: newUser.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("SIGNUP ERROR", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

