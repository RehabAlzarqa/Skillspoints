import { PrismaClient } from "@prisma/client";

//ex
//Response.json

//NextResponse.json

//return new Response(...)
export function GET() {
    return Response.json({ message: "ok" });
  }
  