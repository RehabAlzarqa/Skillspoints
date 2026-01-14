import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

import { date } from "yup";


export async function POST(request:NextRequest) {
    const body = await request.json();
// validation here 
    if (!body.name || !body.email || !body.password || !body.confirmpassword) {
        return NextResponse.json(
            {error:"all field are requiresd "},
            {status:400}
        );
    }
    if (body.password !== body.confirmpassword) {
        return NextResponse.json(
          { error: "Passwords do not match" },
          { status: 400 }
        );
      }
      const hashedPassword = await bcrypt.hash(body.password, 10);
      await prisma.utilisateur.create({
        data: {
            name: body.nome,
            email: body.email,
            motDePasse: hashedPassword,
          }
          
      });
      return NextResponse.json(
        { message: "User created successfully" },
        { status: 201 }
      );
            
    }