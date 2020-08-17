const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    item1: { type: String, required: true },
    quantity1: { type: Number, required: true },
    item2: { type: String },
    quantity2: { type: Number }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;