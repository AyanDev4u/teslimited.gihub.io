const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/tsl');
    console.log("Connection Successful");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  name: String,
  phone:Number,
  email: String,
  query: String
})

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;