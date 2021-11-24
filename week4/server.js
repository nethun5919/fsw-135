const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/rock-the-vote',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

// Routes
app.use('/users', require('./routes/authRouter'))

app.listen(9000,() => {
 console.log("server listenting on port 9000.")
})