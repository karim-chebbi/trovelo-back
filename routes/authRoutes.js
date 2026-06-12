// require express
const express = require("express");
const { test, register, login } = require("../controllers/authControllers");
const { registerValidation, validator } = require("../middlewares/validator");
const isAuth = require("../middlewares/isAuth");


// require router
const router = express.Router()

// require auth test controller
router.get("/test", test)

// require register controller
router.post("/register", registerValidation(), validator, register);

// require login controller
router.post("/login", login)

// current route
router.get("/current", isAuth, (req, res) => {
    res.send({
      user: req.user,
      msg: "Current user fetched successfully",
    });
})

// export router
module.exports = router