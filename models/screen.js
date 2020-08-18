const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const screenSchema = new Schema({
    size: { type: String, required: true },
    quantity: { type: Number, required: true },
});

const Screen = mongoose.model("Screen", screenSchema);

module.exports = Screen;