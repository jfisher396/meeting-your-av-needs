const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/avrentals"
);

const projSeed = [
    {
        model: "3000 Lumen WXGA",
        quantity: 100
    },
    {
        model: "6000 Lumen HD",
        quantity: 100
    },
    {
        model: "10000 Lumen HD",
        quantity: 100
    }
];

db.Proj
    .remove({})
    .then(() => db.Proj.collection.insertMany(projSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });