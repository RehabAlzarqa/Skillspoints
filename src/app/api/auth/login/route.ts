import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    // 1️⃣ قراءة البيانات
    const { email, password } = await request.json();

    // 2️⃣ تحقق مبدئي
    if (!email || !password) {
      return NextResponse.json(
        { message: "معلومات ناقصة" },
        { status: 400 }
      );
    }

    // 3️⃣ جلب المستخدم
    const utilisateur = await prisma.utilisateur.findUnique({
      where: { email }
    });

    if (!utilisateur || !utilisateur.motDePasse) {
      return NextResponse.json(
        { message: "المستخدم غير موجود" },
        { status: 401 }
      );
    }

    // 4️⃣ مقارنة كلمة المرور
    const isValid = await bcrypt.compare(
      password,
      utilisateur.motDePasse
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
          id: utilisateur.id,
          name: utilisateur.name,
          email: utilisateur.email,
          totalDesPoints: utilisateur.totalDesPoints
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("LOGIN_ERROR:", error);
    return NextResponse.json(
      { message: "خطأ في السيرفر" },
      { status: 500 }
    );
  }
}
