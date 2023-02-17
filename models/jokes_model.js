const mongoose = require("mongoose");

const Jokes_Schema = new mongoose.Schema({
  setup: { type: String },
  punchiline: { type: String },
});

const Jokes = mongoose.model("Jokes", Jokes_Schema);

module.exports = Jokes;
