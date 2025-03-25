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
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;
      const skip = (page - 1) * limit;

      const sortBy = req.query.sortBy || "createdAt";
      const sortOrder = req.query.sortOrder === "asc" ? 1 : -1;
      const totalImages = await imageRepository.countDocuments();
      const totalPages = Math.ceil(totalImages / limit);
      const sortObject = {};
      sortObject[sortBy] = sortOrder;
      const images = await imageRepository
        .find()
        .sort(sortObject)
        .skip(skip)
        .limit(limit);

      if (images) {
        return res.status(200).json({
          currentPage: page,
          totalPages: totalPages,
          totalImages: totalImages,
          data: images,
        });
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
