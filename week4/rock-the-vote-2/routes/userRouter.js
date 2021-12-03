const express = require('express')
const UserRouter = express.Router()
const User = require('../models/user')


// post one---tested
UserRouter.route('/')
    .post((req, res, next) => {
      console.log(req.body)
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedUser)
        })

    })
      // get all --tested
       UserRouter.get("/", (req, res, next) => {
        User.find((err, user) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(200).send(user)
        })
      })

      // get one
      UserRouter.get("/:userID", (req, res, next) => {
        const userId =req.params.userID
        // const foundUser= User.find(user =>user._id === userId)
        User.findOne({ _id: userId},(err, user) => {
          if(!user){
            const error =new Error('Item with Id ${userId} was not found')
            res.status(500)
            return next(err)
          }
          return res.status(200).send(user)
        })
      })
        //put one --tested
      UserRouter.put("/:userID", (req, res, next) => {
        User.findOneAndUpdate(
          { _id: req.params.userID},
          req.body,
          {new: true},
          (err, updatedUser) => {
            if(err){
              res.status(500)
              return next(err)
            }
            return res.status(201).send(updatedUser)
          }
        )  
      })
      //  delete one
       UserRouter.delete("/:userID", (req, res, next) => {
        User.findOneAndDelete(
          {_id: req.params.user}, 
          (err, deletedItem) => {
            if(err){
              res.status(500)
              return next(err)
            }
            return res.status(200).send(`Successfully deleted item ${deletedItem.user} from the database`)
          }
        )
      })



module.exports = UserRouter