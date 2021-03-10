const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    items: [],

    orderCreated: {
        type: Date,
        default: Date.now
    }
    
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;