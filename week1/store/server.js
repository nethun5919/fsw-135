  import express from 'express'
  import morgan from 'morgan'
  import mongoose from 'mongoose'

// const express = require("express");
// const morgan = require('morgan');
// const mongoose = require('mongoose');
 const app =express();

 mongoose.connect('mongodb://localhost:27017/inventorydb',
 {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false
 },
 () => console.log("Connected to the DB")
)



app.listen(9000,() => {
   console.log("server listenting on port 9000.")
})



