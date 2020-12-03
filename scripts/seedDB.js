const mongoose = require("mongoose");
const db = require("../models");


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
