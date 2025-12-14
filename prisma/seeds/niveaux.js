module.exports = async function (prisma) {
  console.log("➡️ Seeding niveaux...");

  const niveauxData = [
    { nom: "Débutant", min_points: 0, max_points: 100 },
    { nom: "Intermédiaire", min_points: 101, max_points: 300 },
    { nom: "Avancé", min_points: 301, max_points: 500 },
  ];

  const niveaux = [];

  for (const n of niveauxData) {
    const niveau = await prisma.niveau.upsert({
      where: { nom: n.nom },
      update: {},
      create: n,
    });

    niveaux.push(niveau);
  }

  console.log("✔️ Niveaux seeded!");
  return niveaux;
};
