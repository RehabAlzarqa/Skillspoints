import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.utilisateur.findMany();
    return Response.json(users);
  } catch (error) {
    console.error(error);
    return new Response("Erreur", { status: 500 });
  }
}
