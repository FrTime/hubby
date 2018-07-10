const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
weatherAPIWidth: {type: Number},
weatherAPIHeight: {type: Number},
});

const Device = mongoose.model("Device", deviceSchema);

module.exports = Device;