const imageRepository = require("../models/image.js");
const userRepository = require("../models/user.js");
const { uploadToCloudinary } = require("../helpers/cloudinary.helper.js");
const cloudinary = require("../config/cloudinary");

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

  fetchImages = async (req, res, next) => {
    try {
      const images = await imageRepository.find({});

      if (images) {
        return res.status(200).json(images);
      }
    } catch (e) {
      next(e);
    }
  };

  deleteImage = async (req, res, next) => {
    try {
      const imageId = req.params.id;
      const userId = req.userInfo.userId;

      const image = await imageRepository.findById(imageId);

      if (!image) {
        return res.status(401).json({ message: "Invalid Image" });
      }

      const isValidUserDeleting = image.uploadedBy.toString() === userId;

      if (!isValidUserDeleting) {
        return res.status(403).json({ message: "Access denied" });
      }
    } catch (e) {
      next(e);
    }
  };
}

module.exports = new Image();
