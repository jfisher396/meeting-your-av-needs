const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Gears collection and inserts the items below
mongoose.connect(
  "mongodb+srv://heroku_3q4q4cqn:MongoMigration2020@cluster-3q4q4cqn.byeb2.mongodb.net/heroku_3q4q4cqn?retryWrites=true&w=majority"
);

const gearSeed = [
  {
    proj: "1000 Lumen Projector",
    
  },
  {
    proj: "3000 Lumen Projector",
    
  },
  {
    proj: "5000 Lumen Projector",
    
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
