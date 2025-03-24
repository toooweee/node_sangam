import multer from "multer";
import path from "path";
import * as uuid from "uuid";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/avatars");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = uuid.v4();
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

const limits = {
  fileSize: 10 * 1024 * 1024,
};

const upload = multer({
  storage,
  fileFilter,
  limits,
});

export default upload;
