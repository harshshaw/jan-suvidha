const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const auth = require("../middleware/auth");
const { uploadImage, getMyImages } = require("../controllers/image");
const { validate } = require("../middleware/validate");
const { upload } = require("../services/image_upload");

// @route       POST api/v1/image/upload
// @dsc         upload a image
// @access      Private
router.post("/upload", auth, upload.single("file"), uploadImage);

// @route       GET api/v1/image/getmyimages
// @dsc         get images by me
// @access      Private
router.get("/getmyimages", auth, validate, getMyImages);

module.exports = router;
