const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    samples: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Sample",
      },
    ],
  },
  { timestamps: true }
);

UserSchema.methods.matchPassword = async function match(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", UserSchema);
