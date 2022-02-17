const User = require("../models/user");
const { generateToken } = require("../utils/generateJwtToken");

const create = async (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Please fill in all required fields." });
  }
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      samples: req.body.samples,
    });
    return res.status(200).json(user);
  } catch (error) {
    if (error) {
      console.info("400 at POST /user", error);
      return res.status(400).send(error.message);
    }
    console.error("500 error at POST /user", error);
    return res.status(500).send("Something went wrong. Please try again");
  }
};

const findAll = async (req, res) => {
  try {
    const user = await User.find();

    return res.status(200).json({ user: [...user], success: true });
  } catch (error) {
    if (error) {
      console.log("Find error", error);
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
};

const findById = async (req, res) => {
  if (!req.params.id) {
    return res
      .status(400)
      .send({ message: "User not found with id" + req.params.id });
  }
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res
        .status(404)
        .send({ message: "user not found with id" + req.params.id });
    }
    return res
      .status(500)
      .json({ message: "Error getting user with id" + req.params.id });
  }
};

const updateById = async (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ message: "Please enter all required fields" });
  }
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        samples: req.body.samples,
      },
      { new: true }
    );

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found with id " + req.params.id });
    }
    res.send(user);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res
        .status(404)
        .json({ message: "User not found with id " + req.params.id });
    }
    return res
      .status(500)
      .json({ message: "Error updating user with id" + req.params.id });
  }
};

const deleteById = async (req, res) => {
  if (!req.params.id) {
    return res
      .status(404)
      .json({ message: "User not found with id " + req.params.id });
  }
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    res.send({ message: "User deleted successfully!" });
  } catch (error) {
    if (error.kind === "ObjectId" || error.name === "NotFound") {
      return res
        .status(404)
        .json({ message: "User not found with id " + req.params.id });
    }
    return res
      .status(500)
      .json({ message: "Error deleting user with id " + req.params.id });
  }
};

const findAllUserSamples = async (req, res) => {
  try {
    const users = await User.find().populate("samples", "_id ");
    console.log(users);
    return res.status(200).json({ users });
  } catch (error) {
    if (error) {
      console.log("Find error", error);
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
};

const userAuth = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const authUser = await user.matchPassword(password);

    return res.status(200).json({
      authUser,
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } catch (error) {
    if (error) {
      console.log("Auth error", error);
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
};

const userProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    } else {
      return res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        isAdmin: user.isAdmin,
      });
    }
  } catch (error) {
    if (error) {
      console.log("Profile error", error);
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    if (user) {
      return res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    if (error) {
      console.log("Creation error", error);
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    if(user) {
      user.firstName = req.body.firstName || user.firstName
      user.lastName = req.body.lastName || user.lastName
      user.email = req.body.email || user.email
      if(req.body.password) {
        user.password = req.body.password
      }
    const updatedUser = await user.save()
    return res.json({updatedUser})
    }

  } catch (error) {
    if (error) {
      console.log("Update error", error);
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
  findAllUserSamples,
  userAuth,
  userProfile,
  registerUser,
  updateUserProfile
};
