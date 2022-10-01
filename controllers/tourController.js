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

    console.log(tours, "Ali");
    res.status(200).json({
      status: "success",
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getATour = async (req, res) => {
  try {
    // const iD = req.params.id;
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "succesful",
      data: {
        tour,
      },
    });
  }catch (err) {
     res.status(404).json({
      status : 'fail',
      message :err
     })
  }
};

exports.updateATour = async (req, res) => {
  try{
   const tour =  await Tour.findByIdAndUpdate(req.params.id,req.body,{
      new : true
    })
     res.status(200).json({
      status: "succesful",
      data: {
        tour
      }
    })
  
}catch(err){
    res.status(404).json({
      status : 'fail',
      message :err
     })
}
}


exports.deleteATour = async (req, res) => {
  try{
    await Tour.findByIdAndDelete(req.params.id)
     res.status(204).json({
       status: "succesful"
       
     });

  }catch{
     res.status(404).json({
       status: "fail",
       message: err,
     });
  }
};
