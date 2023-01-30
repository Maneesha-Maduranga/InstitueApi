const User = require("../models/User");

//Option For The CookieParser
const option = {
  expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  httpOnly: true,
};

const registerUser = async (req, res) => {
  const { name, email, role, password } = req.body;

  const user = await User.create({
    name,
    email,
    role,
    password,
  });

  let token = user.generateToken();

  res.status(201).cookie("Token", token, option).json({
    sucess: true,
    token,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email: email });

  if (!user) {
    return res.status(401).json({
      sucess: false,
      err: "InValid Credenitial",
    });
  }

  let login = await user.comparePassword(password);

  if (!login) {
    return res.status(401).json({
      sucess: false,
      err: "Invalid credential",
    });
  }

  let token = user.generateToken();

  res.status(200).cookie("Token", token, option).json({
    sucess: true,
    token,
  });
};


//Get User
const getUser = async(req,res) => {

    



}

module.exports = {
  registerUser,
  loginUser,
  getUser
};
