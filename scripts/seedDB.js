const mongoose = require("mongoose");
const db = require("../models");
const env = require('dotenv').config();

// This file empties the Gears collection and inserts the items below
const dataBaseConnection = process.env.DATABASE_CONNECT;

mongoose.connect(dataBaseConnection);

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
    comp: "MacBook Pro Laptop",
    
  },
  {
    screen: "5' Screen",
    
  },
  {
    screen: "6' Screen",
    
  },
  {
    screen: "8' Screen",
    
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
