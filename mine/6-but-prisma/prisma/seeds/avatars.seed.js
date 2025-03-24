import prisma from "../../src/config/prisma.js";
import dotenv from "dotenv";
import * as fs from "fs/promises";
import * as path from "node:path";

const seedAvatars = async () => {
  dotenv.config();

  try {
    const avatarsPath = path.join(import.meta.dirname, "../../uploads/avatars");
    const avatars = await fs.readdir(avatarsPath);
    for (const avatar of avatars) {
      const relativePath = `uploads/avatars/${avatar}`;
      await prisma.avatar.upsert({
        create: {
          path: relativePath,
        },
        update: {
          path: relativePath,
        },
        where: {
          path: relativePath,
        },
      });
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

seedAvatars().then(() => {
  console.log("Avatars successfully added to database");
});
