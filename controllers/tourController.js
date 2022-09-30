const Tour = require("../models/tourModel");

exports.createATour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "invalid data sent",
    });
  }
};

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(201).json({
      status: "success",
      data: {
        tours,
      },
      message: "data fetched successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getATour = (req, res) => {
  const id = req.params.id * 1;
};

exports.updateATour = (req, res) => {};

exports.deleteATour = (req, res) => {};
