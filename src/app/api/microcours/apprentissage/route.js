// apprentissage
export async function GET() {
  return new Response(
    JSON.stringify([{ id: 2, title: "Apprendre Microcours 1" }]),
    { headers: { "Content-Type": "application/json" } }
  );
}
