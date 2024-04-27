require("dotenv").config()
const mongoose = require('mongoose')
const connectToDb = async() => {

  await mongoose.connect(process.env.DB_URL);
  //ap connection to our database
  console.log("currently connect to MongoDB cluster")
}
module.exports = connectToDb