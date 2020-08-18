const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const computerSchema = new Schema({
    type: { type: String, required: true },
    quantity: { type: Number, required: true },
});

const Computer = mongoose.model("Computer", computerSchema);

module.exports = Computer;