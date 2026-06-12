// require express
const express = require("express");

// create an instance of express
const app = express();

// middleare to parse JSON
app.use(express.json());

// require dotenv
require("dotenv").config();

// PORT
const PORT = process.env.PORT || 5005;

// listen on PORT
app.listen(PORT, (error) => {
  error
    ? console.log("Error starting server: ", error)
    : console.log(`⚡ ⚡ ⚡ Server is running on port http://localhost:${PORT}`);
});

// home route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// // connect to MongoDB
const connectDB = require("./config/connectDB");
connectDB();

// require scooter routes
app.use("/api/scooters", require("./routes/scooterRoutes"));

// require auth routes
app.use("/api/auth", require("./routes/authRoutes"));
