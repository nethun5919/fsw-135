const express = require('express')
const router = express.Router()
const Inventory = require('../models/inventory.js')
​
    router.get("/", (req, res, next) => {
      Inventory.find((err, inventory) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(inventory)
    })
  })
​
​
  router.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedInventory)
    })
  })
​
​
  router.put("/:InventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
      { _id: req.params.inventoryID},
      req.body,
      {new: true},
      (err, updatedInventory) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedInventory)
      }
    )  
  })
​
​
  router.delete("/:InventoryId", (req, res, next) => {
    Inventory.findOneAndDelete(
      {_id: req.params.InventoryId}, 
      (err, deletedItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted item`)
      }
    )
  })
​
  module.exports = router