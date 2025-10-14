export async function GET() {
  return new Response(
    JSON.stringify([{ id: 1, name: "Badge A", pointsRequired: 50 }]),
    { headers: { "Content-Type": "application/json" } }
  );
}
