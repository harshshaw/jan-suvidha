const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
