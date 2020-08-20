const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    item: { item: String }
    
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;