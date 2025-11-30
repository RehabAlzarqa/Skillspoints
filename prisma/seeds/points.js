module.exports = async function (prisma, utilisateurs) {
  console.log("➡️ Seeding points...");

  for (const user of utilisateurs) {
    await prisma.points.create({
      data: {
        valeur_points: user.totalDesPoints,
        type_action: "Initial seed",
        date_acquisition: new Date(),
        utilisateurId: user.id,
      },
    });
  }

  console.log("✔️ Points seeded!");
};
