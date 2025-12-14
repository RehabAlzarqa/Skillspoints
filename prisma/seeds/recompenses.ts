module.exports = async function (prisma, utilisateurs, niveaux) {
  console.log("➡️ Seeding recompenses...");

  const user1 = utilisateurs[0];

  const rec1 = await prisma.recompense.create({
    data: {
      nom: "Badge Débutant",
      type: "Badge",
      points_requis: 30,
      etat_disponible: true,
      utilisateurId: user1.id,
      levelId: niveaux[0].id,
    },
  });

  const rec2 = await prisma.recompense.create({
    data: {
      nom: "Badge Intermédiaire",
      type: "Badge",
      points_requis: 80,
      etat_disponible: true,
      levelId: niveaux[1].id,
    },
  });

  console.log("✔️ Recompenses seeded!");

  return [rec1, rec2];
};
