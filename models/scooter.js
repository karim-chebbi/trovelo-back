// require mongoose
const mongoose = require("mongoose");

// require Schema
const Schema = mongoose.Schema;

// create scooter schema
const scooterSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      required: true,
    },
    maxSpeed: {
      type: Number, // km/h
      required: true,
    },
    range: {
      type: Number, // km per charge
      required: true,
    },
    battery: {
      type: String, // e.g. "36V 10.4Ah"
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
    collection: "scooters",
  }
);

// create scooter model
module.exports = mongoose.model("Scooter", scooterSchema);
