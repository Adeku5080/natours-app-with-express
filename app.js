const express = require("express");
const fs = require("fs");
const app = express();

// middleware to modify incoming data
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// get all tours
app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
});

// get a single tour
app.get("/api/v1/tours/:id", (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find((tour) => id == tour.id);

  if(!tour){
    return res.status(404).json({message : 'this doesnt exist'})
  }else{
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  }

 
});

app.listen(3001, () => {
  console.log("server is running ");
});

//create a tour
app.post("/api/v1/tours", (req, res) => {
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
});


