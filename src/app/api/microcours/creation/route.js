import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const creation = await prisma.microcours.findMany({
      where: { type: "creation" }, // افتراض أن لديك حقل type لتحديد النوع
    });
    return new Response(JSON.stringify(creation), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
