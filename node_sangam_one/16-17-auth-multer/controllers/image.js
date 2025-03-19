const imageRepository = require("../models/image.js");
const { uploadToCloudinary } = require("../helpers/cloudinary.helper.js");

class Image {
  uploadImage = async (req, res, next) => {
    try {
      if (!req.file) {
        return res
          .status(400)
          .json({ success: false, message: "File is required" });
      }

      // upload to cloudinary
      const { url, publicId } = await uploadToCloudinary(req.file.path);

      // store the image url and the public id in database
      const newlyUploadedImage = await imageRepository.create({
        url,
        publicId,
        uploadedBy: req.userInfo.userId,
      });

      res.status(201).json({
        success: true,
        message: "Image uploaded successfully",
        image: newlyUploadedImage,
      });
    } catch (e) {
      next(e);
    }
  };
}

module.exports = new Image();
