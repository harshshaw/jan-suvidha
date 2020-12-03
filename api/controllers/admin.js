const Admin = require("../models/admin");
const Image = require("../models/image");
const { handleError } = require("../services/error");

// get all my images
exports.getAdminImages = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id);
    let images = await Image.find({
      department: admin.department,
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

// resolve issue
exports.resolveIssue = async (req, res) => {
  try {
    const { imageId } = req.body;
    let image = await Image.findById(imageId);
    image.resolved = true;

    await image.save();

    return res.json({
      success: true,
      message: "issue resolved",
      image: image,
    });
  } catch (err) {
    console.log(err);
    handleError(res, 500, "Internal Server Error");
  }
};
