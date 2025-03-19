const cloudinary = require("../config/cloudinary.js");

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);

    return {
      url: result.url,
      publicId: result.public_id,
    };
  } catch (err) {
    console.error(err.stack);
    throw new Error("Error while uploading to cloudinary");
  }
};

module.exports = { uploadToCloudinary };
