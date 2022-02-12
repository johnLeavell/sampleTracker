const User = require("../models/user");

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
    return res.status(200).json({ users})
  } catch (error) {
    if (error) {
      console.log("Find error", error);
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { create, findAll, findById, updateById, deleteById, findAllUserSamples };
