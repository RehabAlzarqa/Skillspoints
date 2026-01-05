import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

export async function POST(request: Request) {
  try {
    // 1️⃣ قراءة البيانات (مرة وحدة فقط)
    const { email, password } = await request.json()

    // 2️⃣ التحقق من البيانات
    if (!email || !password) {
      return NextResponse.json(
        { message: "معلومات ناقصة" },
        { status: 400 }
      )
    }

    // 3️⃣ البحث عن المستخدم
    const utilisateur = await prisma.utilisateur.findUnique({
      where: { email }
    })

    if (!utilisateur) {
      return NextResponse.json(
        { message: "المستخدم غير موجود" },
        { status: 401 }
      )
    }

    // 4️⃣ مقارنة كلمة المرور
    const isValid = await bcrypt.compare(
      password,
      utilisateur.motDePasse
    )

    if (!isValid) {
      return NextResponse.json(
        { message: "كلمة المرور غير صحيحة" },
        { status: 401 }
      )
    }

    // 5️⃣ نجاح تسجيل الدخول
    return NextResponse.json(
      {
        message: "success",
        userId: utilisateur.id
      },
      { status: 200 }
    )

  } catch (error) {
    return NextResponse.json(
      { message: "خطأ في السيرفر" },
      { status: 500 }
    )
  }
}
