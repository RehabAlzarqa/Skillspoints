import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const utilisateurs = await prisma.utilisateur.findMany();
  return NextResponse.json(utilisateurs);
}

export async function POST(request: Request) {
  const { name, email } = await request.json();

  if (!name || !email) {
    return NextResponse.json({ message: "Name and email are required" }, { status: 400 });
  }
 
  const user = await prisma.utilisateur.create({
    data: {
      name,
      email,
      motDePasse: "defaultPassword", // Replace with appropriate logic to generate or retrieve a password
      totalPoints: 0, // Set an initial value for totalPoints
    },
  });

  //HERE you can add logic to save the user data to a database or perform other operations
  return NextResponse.json({ message: "User created successfully", user: { 
    name: user.name,
    email: user.email
   } });
}