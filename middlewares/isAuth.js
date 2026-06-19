const jwt = require("jsonwebtoken")
const User = require("../models/user")

const isAuth = async (req, res, next) => {
    try {
        const token = req.header("authorization")
        if (!token) {
            return res.status(401).send({errors : [{msg: "No token, authorization denied. 1"}]})
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const foundUser = await User.findOne({_id: decoded.id})

        if (!foundUser) {
            return res
              .status(401)
              .send({ errors: [{ msg: "No token, authorization denied. 2" }] });
        }
        req.user = foundUser
        next()
    } catch (error) {
        return res.status(500).send({
            errors: [{ msg: "Token is not valid" }],
          })
    }
}

module.exports = isAuth