### tropo tropo trpipi

Этот проект содержит в себе использование пакета `multer`.

`Multer` - это мощный инструмент для обработки загрузки файлов в expressjs

### Основные концепции `multer`:
1. `Storage` (хранилище) - определяет куда и как сохранять файлы на сервере
2. `File filter` - позволяет проверять 
3. `Методы загрузки`:
   - `single(fieldname)` - загружает один файл с указанным именем поля
   - `array(fieldname, maxCount)` - загружает массив файлов
   - `fields(fields)` - загружает несколько файлов с разными именами полей

#### Настройка multer

Создадим файл `middleware/upload.js` для настройки multer:
```javascript
import multer from "multer";
import path from "path"

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
     // указываем папку для сохранения файлов
      cb(null, "uploads/avatars/")
   },
   filename: (req, file, cb) => {
     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
     const extension = path.extname(file.originalname);
     cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
   }
})

const fileFilter = (req, file, cb) => {
  if(file.mimetype.startsWith('image/')) {
    cb(null, true)
  } else {
    cb (new Error('Invalid file type'), false)
  }
}

const limits = {
  fileSize: 10 * 1024 * 1024
};

const upload = multer({
   storage: storage,
   fileFilter: fileFilter,
   limits: limits
})

export default upload;
```

Объяснение:
- `destination`: Указывает, в какую папку сохранять файлы. Здесь — uploads/avatars/. Убедись, что эта папка создана (Multer не создаёт её автоматически)
- `filename`: Генерирует уникальное имя файла, чтобы избежать перезаписи. Используем timestamp и случайное число.
- `fileFilter`: Проверяет MIME-тип файла. Если это не изображение (например, image/jpeg, image/png), загрузка отклоняется
- `limits`: Ограничивает размер файла до 5MB. Если файл больше, Multer выбросит ошибку

Как использовать `multer` в маршрутах:
- Для загрузки одного файла: `upload.single("avatar")` - ожидает поле `avatar` в форме.
- После успешной загрузки информация о файле доступна в запросе (`req.file`):
  1. `req.file.path` - путь к файлу
  2. `req.file.filename` - имя файла на сервере
  3. `req.file.originalName` - оригинальное имя

No __filename or __dirname#
These CommonJS variables are not available in ES modules.

__filename and __dirname use cases can be replicated via import.meta.filename and import.meta.dirname.  