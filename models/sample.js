const mongoose = require("mongoose");

const SampleSchema = new mongoose.Schema(
  {
    manholeSiteId: ["1", "2", "3", "4", "5", "6", "7"],
    manholeIdNumber: [
      "SMH000017048", // 1
      "SMH000025183", // 2
      "SMH000062398", // 3
      "SMH000072456", // 4
      "SMH000116477", // 5
      "SMH000111150", // 6
      "MHOL23-00116", // 7
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
