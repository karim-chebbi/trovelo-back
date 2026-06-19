// require express
const express = require("express");

// require cors
const cors = require("cors")

// create an instance of express
const app = express();

// middleare to parse JSON
app.use(express.json());

// cors middleware
app.use(
  cors({
    origin: ["https://trovelo-front.vercel.app"],
    credentials: true,
  }),
);

// require dotenv
require("dotenv").config();

// PORT
const PORT = process.env.PORT || 5005;

// listen on PORT
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, (error) => {
    error ? console.log("Error starting server: ", error)
    : console.log(`⚡ ⚡ ⚡ Server is running on port http://localhost:${PORT}`);
  });
}



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


module.exports = app;