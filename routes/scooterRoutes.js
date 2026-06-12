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

// require router
const router = express.Router()

// require test controller
router.get("/test", test)

// require add scooter controller
router.post("/", addScooter);

// require get all scooters controller
router.get("/", getAllScooters);

// require get scooter by id controller
router.get("/:id", getScooterById);

// require update scooter by id controller
router.put("/:id", editScooterById);

// require delete scooter by id controller
router.delete("/:id", deleteScooterById);

// export router
module.exports = router