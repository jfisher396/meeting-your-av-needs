const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Gears collection and inserts the items below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/avrentals"
);

const gearSeed = [
  {
    proj: "3000 Lumen WXGA",
    quantity: 100,
  },
  {
    proj: "6000 Lumen HD",
    quantity: 100,
  },
  {
    proj: "10000 Lumen HD",
    quantity: 100,
  },
  {
    comp: "PC/Windows",
    quantity: 100,
  },
  {
    comp: "Macbook",
    quantity: 100,
  },
  {
    screen: "5'x 5'",
    quantity: 100,
  },
  {
    screen: "7'x 7'",
    quantity: 100,
  },
  {
    screen: "10'x 10'",
    quantity: 100,
  },
];

db.Gear
    .remove({})
    .then(() => db.Gear.collection.insertMany(gearSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });