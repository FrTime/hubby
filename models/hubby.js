const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

  password: { type: String, required: false },
  email: { type: String, required: false },
  date: { type: Date, default: Date.now },
  activeWidgetsString: {type: Array},
  weatherAPIWidth: {type: Number},
  weatherAPIHeight: {type: Number},
  weatherAPIX: {type: Number},
  weatherAPIY: {type: Number},
  twitterWidth: {type: Number},
  twitterHeight: {type: Number},
  twitterX: {type: Number},
  twitterY: {type: Number},
  calendarWidth: {type: Number},
  calendarHeight: {type: Number},
  calendarX: {type: Number},
  calendarY: {type: Number},
  worldClockWidth: {type: Number},
  worldClockHeight: {type: Number},
  worldClockX: {type: Number},
  worldClockY: {type: Number},
  trafficReportWidth: {type: Number},
  trafficReportHeight: {type: Number},
  trafficReportX: {type: Number},
  trafficReportY: {type: Number},
});

const User = mongoose.model("User", userSchema);

module.exports = User;