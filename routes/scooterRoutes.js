// require express
const express = require("express")
const {
  test,
  addScooter,
  getAllScooters,
  getScooterById,
  editScooterById,
  deleteScooterById,
} = require("../controllers/scooterControllers");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");

// require router
const router = express.Router()

// require test controller
router.get("/test", test)

// require add scooter controller
router.post("/", addScooter);

// require get all scooters controller
router.get("/", getAllScooters);

// require get scooter by id controller
router.get("/:id", isAuth, isAdmin, getScooterById);

// require update scooter by id controller
router.put("/:id", isAuth, isAdmin, editScooterById);

// require delete scooter by id controller
router.delete("/:id", isAuth, isAdmin, deleteScooterById);

// export router
module.exports = router