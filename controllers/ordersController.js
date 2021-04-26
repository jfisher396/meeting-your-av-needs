const db = require("../models");

// Defining methods for the ordersController
module.exports = {
  findOne: function (req, res) {
    db.Order.find(req.query)
      .sort({ _id: -1 }).limit(1)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Order.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    // console.log(req.body)
    let itemsToAdd = req.body.items.flat()
    db.Order.create({items: itemsToAdd})
      .then((dbModel) => {
        console.log("order created")
        res.json(dbModel)
      }
        )
      .catch((err) => res.status(422).json(err));
  },
  addInfo: function (req,res) {
    console.log(req.params)
    db.Order.findByIdAndUpdate()
  },
  remove: function (req, res) {
    db.Order.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
