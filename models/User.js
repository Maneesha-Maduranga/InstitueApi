const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["user", "publisher"],
    default: "user",
  },
  password: {
    type: String,
    required: true,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

//Hash Password Using bcrypt
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//Generate Json Token
UserSchema.methods.generateToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "15d",
  });

  return token;
};

//Compare Enter Password
UserSchema.methods.comparePassword = async function(passwords) {
 
    let result = await bcrypt.compare(passwords,this.password)

    return result;
 
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
