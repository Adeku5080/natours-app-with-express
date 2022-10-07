const User = require("../models/userModel");

exports.signup = async (req, res, next) => {
  //   if (req.body.password !== req.body.passwordConfirm) {
  //     return res.status(401).json({ status: "passwords do not match" });
  //   }
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
  }

  next();
};
