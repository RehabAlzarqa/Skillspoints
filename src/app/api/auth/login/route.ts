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

<<<<<<< HEAD

    // create the post request
    const user = await prisma.user.findUnique({
=======
    // 3️⃣ جلب المستخدم
    const utilisateur = await prisma.user.findUnique({
>>>>>>> 8b8cf61a0fe35d4394e5c435a47f308a5fd2176a
      where: { email }
      
    });

<<<<<<< HEAD
    if (!user.email || !user.password) {
=======
    if (!utilisateur || !utilisateur.password) {
>>>>>>> 8b8cf61a0fe35d4394e5c435a47f308a5fd2176a
      return NextResponse.json(
        { message: "user  not exist" },
        { status: 401 }
      ); 
    }

    // 4️⃣ مقارنة كلمة المرور
    const isValid = await bcrypt.compare(
      password,
<<<<<<< HEAD
      user.password
=======
      utilisateur.password
>>>>>>> 8b8cf61a0fe35d4394e5c435a47f308a5fd2176a
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
<<<<<<< HEAD
          name: user.name,
          email: user.email,
=======
          id: utilisateur.id,
          name: utilisateur.name,
          email: utilisateur.email,
          totalPoints: utilisateur.totalPoints
>>>>>>> 8b8cf61a0fe35d4394e5c435a47f308a5fd2176a
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
