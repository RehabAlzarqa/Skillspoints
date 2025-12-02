module.exports = async function (prisma, utilisateurs) {
  console.log("➡️ Seeding microcours...");

  const user1 = utilisateurs[0];

  const mc1 = await prisma.microCours.create({
    data: {
      titre: "HTML de base",
      niveau: "Débutant",
      duree: 15,
      description: "Introduction au HTML",
      creatorId: user1.id,
    },
  });

  const mc2 = await prisma.microCours.create({
    data: {
      titre: "CSS de base",
      niveau: "Débutant",
      duree: 20,
      description: "Introduction au CSS",
      creatorId: user1.id,
    },
  });

  console.log("✔️ Microcours seeded!");

  return [mc1, mc2];
};
