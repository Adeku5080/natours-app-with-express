const express = require("express");

const router = express.Router();

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route isnt defined yet",
  });
};

const createAUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route isnt defined yet",
  });
};

const getAUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route isnt defined yet",
  });
};

const updateAUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route isnt defined yet",
  });
};

const deleteAUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route isnt defined yet",
  });
};

router.route("/").get(getAllUsers).post(createAUser);

router.route("/:id").get(getAUser).patch(updateAUser).delete(deleteAUser);

module.exports = router;
