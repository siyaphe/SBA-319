const mongoose = require("mongoose")

const drinkSchema = new mongoose.Schema({
  title: String,
  body: String
})

const Drink = mongoose.model("Drink", drinkSchema)

module.exports = Drink