const express = require("express");
const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

const router = express.Router();

const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
};

const getATour = (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find((tour) => id == tour.id);

  if (!tour) {
    return res.status(404).json({ message: "this doesnt exist" });
  } else {
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  }
};

const createATour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = {
    ...req.body,
    id: newId,
  };
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const updateATour = (req, res) => {
  const id = req.params.id * 1;

  if (id > tours.length) {
    return res.status(404).json({
      status: " fail",
      message: "invalid Id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour: "< updated tour here...>",
    },
  });
};

const deleteATour = (req, res) => {
  const id = req.params.id * 1;
  console.log("ali");

  newTours = tours.filter((tour) => id !== tour.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
};

router.route("/").get(getAllTours).post(createATour);
router.route("/:id").get(getATour).patch(updateATour).delete(deleteATour);

module.exports = router;
