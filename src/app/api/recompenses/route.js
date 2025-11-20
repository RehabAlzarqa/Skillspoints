import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const recompense = await prisma.recompense.findMany();
    return Response.json(recompense);
  } catch (error) {
    console.log(error);
    return new Response("error", { status: 500 });
  }
}
