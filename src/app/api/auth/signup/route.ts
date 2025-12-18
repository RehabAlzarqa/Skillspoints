import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, confirmPassword } = body;

    //  validation

if (!name || !email || !password || !confirmPassword) {
  return NextResponse.json(
    { error: "all fields are required" },
    { status: 400 }
  );
}

    // confirm password
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "password do not match" },
        { status: 400 }
      );
    }
    // check if email exists
const existingUser = await prisma.utilisateur.findUnique({
  where:{email},
});
if(existingUser){
  return NextResponse.json(
    {error:"email already used"},
    {status:409}
);
}
    //  hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  save user
    const utilisateur = await prisma.utilisateur.create({
      data: {
       name,
         email,
        motDePasse: hashedPassword,
      },
    });

    //  response
    return NextResponse.json(
      {
        message: "Utilisateur créé avec succès",
        utilisateurId: utilisateur.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("SIGNUP ERROR ", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
