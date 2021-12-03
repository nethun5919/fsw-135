const express = require('express')
const app = express()
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
//  mongoose.connect('mongodb://localhost:27017/rock-the-vote',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     },
//     () => console.log("Connected to the DB")
// )

app.use(express.json());
require("dotenv").config();
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/rock-the-vote');
  console.log("Connected to the DB")
}

// Routes
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['RS256'] }))
app.use('/api/users', require('./routes/userRouter'))
app.use('/api/issues', require('./routes/issueRouter.js'))
app.use('/api/comments', require('./routes/commentRouter.js'))





app.listen(9000,() => {
 console.log("server listenting on port 9000.")
})