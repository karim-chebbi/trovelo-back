const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }

  return res.status(403).send({errors : [{msg: "Access denied. Admin only."}]});
};

module.exports = isAdmin;
