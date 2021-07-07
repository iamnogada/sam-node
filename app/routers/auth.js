// Get router oject from express
const router = require("express").Router();

// import controllers
const authController = require("controllers/auth.controller");

// public routers without login
// must locate before router required login
router.post("/login", authController.login);
// api router requiring loggin token

module.exports = router;
