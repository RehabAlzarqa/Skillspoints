// creation
export async function GET() {
  return new Response(
    JSON.stringify([{ id: 1, title: "Créer Microcours 1" }]),
    { headers: { "Content-Type": "application/json" } }
  );
}
