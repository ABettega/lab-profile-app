const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

var storage = cloudinaryStorage({
  cloudinary,
  folder: 'profile-rest-gallery',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, res, cb) {
    let name = req.user._id + res.filename;
    cb(null, name);
  }
});

const uploader = multer({ storage });

module.exports = uploader;
