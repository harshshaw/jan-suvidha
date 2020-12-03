const express = require("express");
const { getAdminImages } = require("../controllers/admin");
const router = express.Router();
// const { check } = require("express-validator");

const auth = require("../middleware/auth");
// const { validate } = require("../middleware/validate");

// @route       POST api/v1/admin/getdetails
// @dsc         get admin images
// @access      Private
router.get("/getdetails", auth, getAdminImages);

module.exports = router;
