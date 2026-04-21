import { get } from "http";
import { projectUpdate } from "next/dist/build/swc/generated-native";
import { Crushed } from "next/font/google";
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  return NextResponse.json({ message: "API route is ready" });
}


export const POST = async (request: NextRequest) => {
  // take microcours info from request body
  // validate the microcours info
  // check if the microcours already exist
  // if microcours doesn't exist, create it
  // return the created

  
  // const body: { titre: string, description: string } = await request.json();
  // // const body = await request.json();
  // const { titre, description } = body;

  // take microcours info from request body
  const {titre, description} = await request.json();

  // validate the microcours info
  if (!titre || !description) {
    return NextResponse.json({
     msg: 'All feilds are required!'
   })
  }

  // check if the microcours already exist
  const courseAlreadyExist = await prisma.microCourse.findUnique({ where: { title: titre } });
  
  
}











// GET
// POST
// DELETE
// UPDATE: UPDATE SOMTHING 
// PUT
// CRUD