const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: false },
  userName: { type: String, required: false },
  password: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now },
  devices: [{
    name: String,
    widgets: {
      weatherAPI: {
        zipcode: Number,
        settings: {
          x: Number,
          y: Number,
          height: Number,
          Width: Number,
        },
      },
      calendar: {
        appointments: [String],
        settings: {
          x: Number,
          y: Number,
          height: Number,
          Width: Number,
        },
      }
    },
  },
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
