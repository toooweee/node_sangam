import fs from "fs";
import path from "path";

class FileService {
  // multer сам сохраняет файл, нам остается вернуть только его путь
  getFilePath(file) {
    if (!file) {
      throw new Error("File doesn't exist");
    }

    return file.path;
  }

  // удаление файла, например, при удалении аватарки
  async deleteFile(filePath) {
    try {
      const fullPath = path.join(__dirname, "../../", filePath);
      await fs.unlink(fullPath);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export default new FileService();
