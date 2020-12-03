const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Admin = require("../models/admin");

exports.login = async (req, res) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      giveToken(user, res);
    } else {
      user = new User({
        email,
      });
      await user.save();
      giveToken(user, res);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { email, department } = req.body;
    let admin = await Admin.findOne({ email });
    if (admin) {
      giveToken(admin, res);
    } else {
      admin = new Admin({
        email,
        department,
      });
      await admin.save();
      giveToken(admin, res);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

function giveToken(user, res) {
  const payload = {
    user: {
      id: user.id,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      expiresIn: 360000000,
    },
    (err, token) => {
      if (err) throw err;

      return res.status(200).json({
        success: true,
        token: token,
        userId: user.id,
      });
    }
  );
}
