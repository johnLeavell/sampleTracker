const Sample = require("../models/sample");
const User = require("../models/user");

const create = async (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields" });
  }
  try {
    const sample = await Sample.create({
      manholeIdNumber: req.body.manholeIdNumber,
      dateCollected: req.body.dateCollected,
      timeCollected: req.body.timeCollected,
      sampleVolume: req.body.sampleVolume,
      samplePh: req.body.samplePh,
      user: req.body.user,
      manholeSiteId: req.body.manholeSiteId,
      manHoleIdNumber: req.body.manHoleIdNumber,
      sampleTemperature: req.body.sampleTemperature,
    });

    await User.findByIdAndUpdate(
      { _id: sample.user },
      { $push: { samples: sample._id } }
    );
    return res.status(200).json({ sample });
  } catch (error) {
    if (error) {
      console.log("creation error", error);
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const sampleList = await Sample.find();
    return res.status(200).json({ sampleList });
  } catch (error) {
    if (error) {
      console.log("something went wrong", error);
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
};

const findById = async (req, res) => {
    if (!req.params.id) {
      return res
        .status(400)
        .send({ message: "Sample not found with id" + req.params.id });
    }
    try {
      const sample = await Sample.findById(req.params.id);
      return res.status(200).json(sample);
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res
          .status(404)
          .send({ message: "sample not found with id" + req.params.id });
      }
      return res
        .status(500)
        .json({ message: "Error getting sample with id" + req.params.id });
    }
  };
  
  const updateById = async (req, res) => {
    if (!req.body) {
      return res
        .status(400)
        .json({ message: "Please enter all required fields" });
    }
    try {
      const sample = await Sample.findByIdAndUpdate(
        req.params.id,
        {
          manholeSiteId: req.body.manholeSiteId,
          manholeIdNumber: req.body.manholeIdNumber,
          dateCollected: req.body.dateCollected,
          timeCollected: req.body.timeCollected,
          sampleVolume: req.body.sampleVolume,
          sampleTemperature: req.body.sampleTemperature,
          samplePh: req.body.samplePh,
          user: req.body.user,
        },
        { new: true }
      );
  
      if (!sample) {
        return res
          .status(404)
          .json({ message: "Sample not found with id " + req.params.id });
      }
      res.send(sample);
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res
          .status(404)
          .json({ message: "Sample not found with id " + req.params.id });
      }
      return res
        .status(500)
        .json({ message: "Error updating sample with id" + req.params.id });
    }
  };
  
  const deleteById = async (req, res) => {
    if (!req.params.id) {
      return res
        .status(404)
        .json({ message: "Sample not found with id " + req.params.id });
    }
    try {
      const sample = await Sample.findByIdAndRemove(req.params.id);
      res.send({ message: "Sample deleted successfully!" });
    } catch (error) {
      if (error.kind === "ObjectId" || error.name === "NotFound") {
        return res
          .status(404)
          .json({ message: "Sample not found with id " + req.params.id });
      }
      return res
        .status(500)
        .json({ message: "Error deleting sample with id " + req.params.id });
    }
  };
  

module.exports = { create, findAll, findById, updateById, deleteById};
