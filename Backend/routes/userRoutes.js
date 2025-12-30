const express = require("express");
const { LoginUser, createUser } = require("../controller/userController.js");
const router = express.Router();
router.post("/login", LoginUser);
router.post("/users", createUser);

module.exports = router;
