const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    items: []
    
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;