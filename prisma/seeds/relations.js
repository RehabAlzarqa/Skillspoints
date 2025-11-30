module.exports = async function (
  prisma,
  utilisateurs,
  microcours,
  recompenses
) {
  console.log("➡️ Seeding relations...");

  const user1 = utilisateurs[0];
  const mc1 = microcours[0];
  const rec1 = recompenses[0];

  // ربط المستخدم بالدورة
  await prisma.utilisateurMicrocours.create({
    data: {
      utilisateurId: user1.id,
      microcoursId: mc1.id,
    },
  });

  // ربط المستخدم بالمكافأة
  await prisma.utilisateurRecompense.create({
    data: {
      utilisateurId: user1.id,
      recompenseId: rec1.id,
    },
  });

  console.log("✔️ Relations seeded!");
};
