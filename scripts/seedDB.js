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
    
  },
  {
    proj: "6000 Lumen HD",
    
  },
  {
    proj: "10000 Lumen HD",
    
  },
  {
    comp: "PC/Windows",
    
  },
  {
    comp: "Macbook",
    
  },
  {
    screen: "5'x 5'",
    
  },
  {
    screen: "7'x 7'",
    
  },
  {
    screen: "10'x 10'",
    
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