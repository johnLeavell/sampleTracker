const mongoose = require("mongoose");

const SampleSchema = new mongoose.Schema(
  {
    manholeIdNumber: { type: String, required: true },
    dateCollected: { type: String, required: true },
    timeCollected: { type: String, required: true },
    sampleVolume: { type: String, required: true },
    sampleTemperature: { type: String, required: true },
    samplePh: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sample", SampleSchema);
