import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    // 1️⃣ قراءة البيانات
    const { email, password } = await req.json();

    // 2️⃣ تحقق مبدئي
    if (!email || !password) {
      return NextResponse.json(
        { message: "all fields are required" },
        { status: 400 }
      );
    }


    // 3️⃣ جلب المستخدم
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user.email || !user.password) {
      return NextResponse.json(
        { message: "المستخدم غير موجود" },
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
        { message: "كلمة المرور غير صحيحة" },
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
