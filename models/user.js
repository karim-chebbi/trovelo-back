// require mongoose
const mongoose = require("mongoose");

// require Schema
const Schema = mongoose.Schema;

// create user schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, {timestamps: true, collection: "users"})

// create user model
module.exports = User = mongoose.model("User", userSchema)