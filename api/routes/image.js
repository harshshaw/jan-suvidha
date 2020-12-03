const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const auth = require("../middleware/auth");
const { uploadImage } = require("../controllers/image");
const { validate } = require("../middleware/validate");
const { upload } = require("../services/image_upload");

// @route       POST api/v1/image/upload
// @dsc         upload a image
// @access      Private
router.post("/upload", auth, upload.single("file"), validate, uploadImage);

module.exports = router;
