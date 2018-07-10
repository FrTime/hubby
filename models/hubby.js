const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: false },
  userName: { type: String, required: false },
  password: { type: String, required: false },
  email: { type: String, required: false },
  date: { type: Date, default: Date.now },

  weatherAPIWidth: {type: Number},
  weatherAPIHeight: {type: Number},
  weatherAPIX: {type: Number},
  weatherAPIY: {type: Number},
  calendarWidth: {type: Number},
  calendarHeight: {type: Number},
  calendarX: {type: Number},
  calendarY: {type: Number},

});

const User = mongoose.model("User", userSchema);

module.exports = User;