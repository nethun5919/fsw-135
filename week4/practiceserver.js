const express = require('express')
const app = express()
const mongoose = require('mongoose')

const expressJwt = require('express-jwt')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/rock-the-vote');
  console.log("Connected to the DB")
}

app.use(express.json());

// Routes
app.use('/users', require('./routes/userhRouter'))

app.listen(9000,() => {
 console.log("server listenting on port 9000.")
})




app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['RS256'] }))
// app.use('/api/todo)

if(err.name === 'Unauthorized Error'){
   res.status(err.status)
}