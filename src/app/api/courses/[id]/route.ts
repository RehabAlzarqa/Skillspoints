import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {

  const course = await prisma.microCourse.findUnique({
    where: {
      idMicroCourse: Number(params.id)
    }
  });

  return NextResponse.json(course);

}