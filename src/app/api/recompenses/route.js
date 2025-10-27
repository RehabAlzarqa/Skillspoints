import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const rewards = await prisma.reward.findMany();
    return new Response(JSON.stringify(rewards), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
