import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    // read data
    const body =  await req.json();
    const { email, password } = await req.json();
    // read data

    // validation
    if (!email || !password) {
      return NextResponse.json(
        { message: "all fields are required" },
        { status: 400 }
      );
    }


    // create the post request
    const user = await prisma.user.findUnique({
      where: { email }
      
    });

    if (!user.email || !user.password) {
      return NextResponse.json(
        { message: "user  not exist" },
        { status: 401 }
      ); 
    }

    // 4️⃣ مقارنة كلمة المرور
    const isValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isValid) {
      return NextResponse.json(
        { message: "password not matching" },
        { status: 401 }
      );
    }

    // 5️⃣ نجاح تسجيل الدخول
    return NextResponse.json(
      {
        message: "success",
        user: {
          name: user.name,
          email: user.email,
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("LOGIN_ERROR:", error);
    return NextResponse.json(
      { message: "error " },
      { status: 500 }
    );
  }
}
