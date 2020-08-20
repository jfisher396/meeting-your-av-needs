const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gearSchema = new Schema({
    model: { type: String },
    quantity: { type: Number }
});

const Gear = mongoose.model("Gear", gearSchema);

module.exports = Gear;