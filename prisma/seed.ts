import 'dotenv/config'; // <-- هذا يقرأ .env تلقائياً
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // ... كود إضافة البيانات
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
