const User = require("../models/user");
const Image = require("../models/image");
const { handleError } = require("../services/error");

// upload and check image
exports.uploadImage = async (req, res) => {
  try {
    const { long, lat, department } = req.body;
    // const user = await User.findById(req.user.id);
    let image = new Image({
      user: req.user.id,
      url: "url",
      location: {
        coordinates: [long, lat],
      },
      department: department,
    });

    await image.save();

    return res.json({
      success: true,
      message: "Image uploaded successfully",
    });
  } catch (err) {
    handleError(res, 500, "Internal Server Error");
  }
};

// get all my images
exports.getMyImages = async (req, res) => {
  try {
    let images = await await Image.find({
      user: req.user.id,
    });

    return res.json({
      success: true,
      images: images,
    });
  } catch (err) {
    console.log(err);
    handleError(res, 500, "Internal Server Error");
  }
};
