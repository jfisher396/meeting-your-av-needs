const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Gears collection and inserts the items below
// mongoose.connect(
//   "mongodb://heroku_3q4q4cqn:lrb29pjj757d4ps3jv871d6if5@ds047950.mlab.com:47950/heroku_3q4q4cqn"
// );

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
    comp: "PC/Windows Laptop",
    
  },
  {
    comp: "Macbook Pro",
    
  },
  {
    screen: "5' Screen",
    
  },
  {
    screen: "7' Screen",
    
  },
  {
    screen: "10' Screen",
    
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
