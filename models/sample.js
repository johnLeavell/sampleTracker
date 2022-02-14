const mongoose = require("mongoose");

const SampleSchema = new mongoose.Schema(
  {
    manholeIdNumber: [
      "SMH000017048",
      "SMH000025183",
      "SMH000062398",
      "SMH000072456",
      "SMH000116477",
      "SMH000111150",
      "MHOL23-00116",
    ],
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
