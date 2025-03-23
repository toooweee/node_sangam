import fs from "fs/promises";
import * as path from "node:path";
import avatarRepository from "../models/avatar.js";
import connectToDatabase from "../config/database.js";
import dotenv from "dotenv";

const uploadAvatars = async () => {
  dotenv.config();
  await connectToDatabase();

  const avatarsPath = path.join(import.meta.dirname, "../uploads/avatars");

  try {
    const avatars = await fs.readdir(avatarsPath);
    for (const avatar of avatars) {
      const relativePath = `uploads/${avatar}`;
      await avatarRepository.updateOne(
        {
          url: relativePath,
        },
        { $setOnInsert: { url: relativePath } },
        { upsert: true },
      );
    }
  } catch (e) {
    throw new Error(e);
  }
};

uploadAvatars().then(() =>
  console.log("Avatars succefully upserted in Database"),
);
