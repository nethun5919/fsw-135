import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

const app = express();

//app.use('/', express.json())
//app.use(app.router)
//routes.initialize(app)

mongoose.connect('mongodb://localhost:27017/inventorydb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

// Route
app.use('/inventory', require('./routes/router'))

app.listen(9000,() => {
 console.log("server listenting on port 9000.")
})