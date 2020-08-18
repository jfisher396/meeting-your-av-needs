const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gearSchema = new Schema({
    model: { type: String, required: true },
    quantity: { type: Number, required: true },
});

const Gear = mongoose.model("Gear", gearSchema);

module.exports = Gear;