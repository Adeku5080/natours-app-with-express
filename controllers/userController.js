const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createAUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route isnt defined yet",
  });
};

exports.getAUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route isnt defined yet",
  });
};

exports.updateAUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route isnt defined yet",
  });
};

exports.deleteAUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route isnt defined yet",
  });
};
