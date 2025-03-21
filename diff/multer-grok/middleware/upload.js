// Настройка хранилища
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Указываем папку для сохранения файлов
    cb(null, "uploads/avatars/");
  },
  filename: (req, file, cb) => {
    // Создаём уникальное имя файла
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname); // Расширение файла (например, .jpg)
    cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
  },
});

// Фильтр для типов файлов
const fileFilter = (req, file, cb) => {
  // Разрешаем только изображения
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // Принимаем файл
  } else {
    cb(new Error("Только изображения разрешены!"), false); // Отклоняем файл
  }
};

// Ограничения
const limits = {
  fileSize: 10 * 1024 * 1024, // Максимальный размер файла — 5MB
};

// Инициализация Multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limits,
});

export default upload;
