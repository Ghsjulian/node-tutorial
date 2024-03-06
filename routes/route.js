const express = require("express");
const user = require("../controllers/userController.js");
const router = express.Router();

router.post("/signup", user.register);
router.post("/login", user.login);
// router.get("/registration", userController.register);
// router.post("/is-user", userController.isExistUser);
//
module.exports = router;
