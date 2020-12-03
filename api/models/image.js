const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  department: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", ImageSchema);
