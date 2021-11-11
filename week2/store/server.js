
const express = require('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
​
mongoose.connect('mongodb://localhost:27017/inventorydb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)
​
// Route
app.use('/inventory', require('./routes/router'))
​
app.listen(9000,() => {
 console.log("server listenting on port 9000.")
})