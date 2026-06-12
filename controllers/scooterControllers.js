const Scooter = require("../models/scooter")

// test scooter controller
exports.test = async (req, res) => {
    try {
        res.status(200).send("Scooter controller test is working")
    } catch (error) {
        res.status(500).send({errors : [{msg: "Server error"}]})
    }
}

// add scooter controller
exports.addScooter = async (req, res) => {
    try {
        const newScooter = new Scooter(req.body)
        await newScooter.save()
        res
          .status(201)
          .send({
            success: [{ msg: "Scooter added successfully" }],
            scooter: newScooter,
          });
    } catch (error) {
        res
          .status(500)
          .send({ errors: [{ msg: "Server error adding Scooter" }] });
    }
}

// get all Scooters controller
exports.getAllScooters = async (req, res) => {
  try {
        const { brand } = req.query;

        const filter = {};

        if (brand) {
          filter.brand = {
            $regex: brand,
            $options: "i",
          };
        }
        
    const foundScooters = await Scooter.find();
    res.status(200).send({
      success: [{ msg: "Scooters retrieved successfully" }],
      count: foundScooters.length,
      Scooters: foundScooters,
    });
  } catch (error) {
    res
      .status(500)
      .send({ errors: [{ msg: "Server error getting all Scooters" }] });
  }
};

// get Scooter by id controller
exports.getScooterById = async (req, res) => {
    try {
        const id = req.params.id
        const foundScooter = await Scooter.findById(id)
        if (!foundScooter) {
            return res.status(404).send({errors : [{msg: "Scooter not found"}]})
        }
        res.status(200).send({
          success: [{ msg: "Scooter retrieved successfully" }],
          Scooter: foundScooter,
        });
    } catch (error) {
        res.status(500).send({errors : [{msg: "Server error getting Scooter by id"}]})
    }
}

// update Scooter by id controller
exports.editScooterById = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body
        const updatedScooter = await Scooter.findByIdAndUpdate(id, newData, {new: true})
        if (!updatedScooter) {
            return res.status(404).send({errors : [{msg: "Scooter not found"}]})
        }
        res.status(200).send({success: [{msg: "Scooter updated successfully"}], Scooter: updatedScooter})
    } catch (error) {
        res.status(500).send({errors : [{msg: "Server error updating Scooter by id"}]})
    }
}

// delete Scooter by id controller
exports.deleteScooterById = async (req, res) => {
    try {
        const id = req.params.id
        const deletedScooter = await Scooter.findByIdAndDelete(id)
        if (!deletedScooter) {
            return res.status(404).send({errors : [{msg: "Scooter not found"}]})
        }
        res.status(200).send({success: [{msg: "Scooter deleted successfully", Scooter: deletedScooter}]})
    } catch (error) {
        res.status(500).send({errors : [{msg: "Server error deleting Scooter by id"}]})
    }
}