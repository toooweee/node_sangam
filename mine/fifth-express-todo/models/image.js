const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true },
    path: { type: String, required: true },
    mimetype: { type: String, required: true },
    size: { type: Number },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Images", imageSchema);
