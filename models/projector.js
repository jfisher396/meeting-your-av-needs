const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projSchema = new Schema({
    model: { type: String, required: true },
    quantity: { type: Number, required: true },
});

const Proj = mongoose.model("Proj", projSchema);

module.exports = Proj;