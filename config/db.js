const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URL);
    console.log("Connect TO The Database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;