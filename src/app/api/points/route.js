export async function GET() {
  return new Response(JSON.stringify([{ id: 1, userId: 1, points: 100 }]), {
    headers: { "Content-Type": "application/json" },
  });
}
