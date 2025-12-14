const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seedNiveaux = require("./seeds/niveaux");
const seedUtilisateurs = require("./seeds/utilisateurs");
const seedMicrocours = require("./seeds/microcours");
const seedPoints = require("./seeds/points");
const seedRecompenses = require("./seeds/recompenses");
const seedRelations = require("./seeds/relations");

async function main() {
  console.log("🌱 Seeding started...");

  const niveaux = await seedNiveaux(prisma);
  const utilisateurs = await seedUtilisateurs(prisma, niveaux);
  const microcours = await seedMicrocours(prisma, utilisateurs);
  await seedPoints(prisma, utilisateurs);
  const recompenses = await seedRecompenses(prisma, utilisateurs, niveaux);
  await seedRelations(prisma, utilisateurs, microcours, recompenses);

  console.log("🌱 Seeding finished successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
