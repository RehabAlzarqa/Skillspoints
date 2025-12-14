import { PrismaClient } from '../src/generated/prisma'; 

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Prisma seed (TS) started...");
  
 await prisma.utilisateur.create({
    data: {
      name: "Test User",
     email: "test@example.com",
      motDePasse: "hashed-password",
   },
   });

  console.log("🌱 Seed completed (no data added).");
}

main()
  .then(() => prisma.$disconnect())
  .catch((error) => {
    console.error(error);
    prisma.$disconnect();
  });
