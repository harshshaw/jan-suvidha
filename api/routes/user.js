const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { login } = require("../controllers/user");
const { validate } = require("../middleware/validate");

// @route       POST api/v1/users/login
// @dsc         login a user
// @access      Public
router.post(
  "/login",
  [check("email", "Please add a valid email").isEmail()],
  validate,
  login
);

module.exports = router;
