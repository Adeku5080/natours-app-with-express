const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});

const app = require("./app");

console.log(process.env);

port = process.env.PORT || 3001;
app.listen(3001, () => {
  console.log("server is running ");
});
