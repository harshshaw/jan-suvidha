const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { login, loginAdmin } = require("../controllers/user");
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

// @route       POST api/v1/users/admin/login
// @dsc         login a admin
// @access      Public
router.post(
  "/admin/login",
  [
    check("email", "Please add a valid email").isEmail(),
    check("department", "Please add a valid department").notEmpty(),
  ],
  validate,
  loginAdmin
);

module.exports = router;
