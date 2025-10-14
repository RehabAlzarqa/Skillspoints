export async function GET() {
  return new Response(
    JSON.stringify([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]),
    { headers: { "Content-Type": "application/json" } }
  );
}
