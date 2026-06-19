const User = require("../models/user");
// require bcrypt
const bcrypt = require("bcrypt")

// require jwt
const jwt = require("jsonwebtoken");

exports.test = async (req, res) => {
    try {
        res.status(200).send("Auth controller test is working")
    } catch (error) {
        res.status(500).send({errors : [{msg: "Server error"}]})
    }
}

// register controller
exports.register = async (req, res) => {
    try {
      const { email, password } = req.body;
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Email already exists" }] });
      }

      const newUser = new User(req.body);
      // hash password
      const salt = 10;
      const hashedPassword = await bcrypt.hash(password, salt);
      newUser.password = hashedPassword;

      await newUser.save();

      // Generate JWT token
      const token = jwt.sign(
        {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          phone: newUser.phone,
        },
        process.env.SECRET_KEY,
        { expiresIn: "7d" }
      );

      res.status(201).send({
        success: [{ msg: "User registered successfully" }],
        user: newUser,
        token: token,
      });
    } catch (error) {
        res.status(500).send({errors : [{msg: "Server error registering user"}]})
    }
}

// login controller
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({ email });
      if (!foundUser) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Bad credentials email not found" }] });
      }

      // Check password
      const hashedPassword = await bcrypt.compare(password, foundUser.password);

      if (!hashedPassword) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Bad credentials Password incorrect" }] });
      }
      
      const token = jwt.sign(
        {
          id: foundUser._id,
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          email: foundUser.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "7d" }
      );
      res
        .status(200)
        .send({
          success: [{ msg: `Hello ${foundUser.firstName}, Welcome back!` }],
          user: foundUser,
          token: token,
        });
    } catch (error) {
        res.status(500).send({errors : [{msg: "Server error logging in user"}]})
    }
}