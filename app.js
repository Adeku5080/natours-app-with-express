const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// middlewares
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan("dev")); 
}

app.use(express.json());
app.use(express.static("/home/ali/projects/Nodejs/natours/public"));

app.use((req, res, next) => {
  console.log("hello from the middleware");
  next();
});

//mounting our routers
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
