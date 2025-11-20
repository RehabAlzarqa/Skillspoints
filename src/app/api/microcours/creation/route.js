import prisma from "@/lib/prisma";

// POST — créer un microcours + ajouter des points
export async function POST(req) {
  try {
    const { titre, niveau, duree, description, creatorId } = await req.json();

    if (!titre || !niveau || !duree || !creatorId) {
      return new Response("Champs manquants", { status: 400 });
    }

    const cours = await prisma.microCours.create({
      data: {
        titre,
        niveau,
        duree,
        description,
        creatorId,
      },
    });

    const pointsGagnes = 30;

    await prisma.points.create({
      data: {
        valeur_points: pointsGagnes,
        type_action: "COURSE_CREATED",
        date_acquisition: new Date(),
        utilisateurId: creatorId,
      },
    });

    await prisma.utilisateur.update({
      where: { id: creatorId },
      data: {
        totalDesPoints: { increment: pointsGagnes },
      },
    });

    return Response.json({
      message: "Microcours créé + points ajoutés",
      cours,
    });
  } catch (error) {
    console.error(error);
    return new Response("Erreur serveur", { status: 500 });
  }
}

// GET — récupérer tous les microcours
export async function GET() {
  try {
    const cours = await prisma.microCours.findMany({
      include: { createur: true },
    });

    return Response.json(cours);
  } catch (error) {
    console.error(error);
    return new Response("Erreur", { status: 500 });
  }
}
