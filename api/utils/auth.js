const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, res, next) => {
  try {
    const data = await req.headers.authorization;
    const token = data.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "you are not authorized", error: error.message });
  }
};

const admin = async (req, res, next) => {
  try {
    const user = await req.user;
    const admin = await req.user.isAdmin;
    if (user && admin) {
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: "Not authorized as an admin" });
  }
};

module.exports = {
  protect,
  admin,
};
