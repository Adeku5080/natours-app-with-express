const express = require("express");
const userController = require("../controllers/userController")
const authController = require("../controllers/authController")
const router = express.Router();


router.post('/signup', authController.signup)
router.post("/login", authController.login);

router.route("/").get(userController.getAllUsers).post(userController.createAUser);

router.route("/:id").get(userController.getAUser).patch(userController.updateAUser).delete(userController.deleteAUser);

module.exports = router;
