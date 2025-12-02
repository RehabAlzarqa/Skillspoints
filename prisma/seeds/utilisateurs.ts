module.exports = async function (prisma, niveaux) {
  console.log("➡️ Seeding utilisateurs...");

  const user1 = await prisma.utilisateur.create({
    data: {
      name: "Ali",
      email: "ali@example.com",
      motDePasse: "123456",
      totalDesPoints: 50,
      niveauxRelations: {
        connect: [{ id: niveaux[0].id }], // Débutant
      },
    },
  });

  const user2 = await prisma.utilisateur.create({
    data: {
      name: "Sara",
      email: "sara@example.com",
      motDePasse: "123456",
      totalDesPoints: 120,
      niveauxRelations: {
        connect: [{ id: niveaux[1].id }], // Intermédiaire
      },
    },
  });

  console.log("✔️ Utilisateurs seeded!");

  return [user1, user2];
};
