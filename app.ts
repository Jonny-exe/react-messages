//
// dependency: typescript compiler
// install tsc: sudo npm install --global typescript
// to compiler:
// ts-compile.sh
// to run:
// npm start
//
const cors = require('cors')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const Post = require('./models/Post')
const homeRoutes = require('./routes/posts')
const bodyParser = require('body-parser');
const port: string = "5000"
const path = require('path');
console.log("hi")
            

// This wont work either if you have node_modules backups
// If you get error this port is already in use.
// do: sudo killall -9 node command
// if that doesnt work
// do: sudo kill -9 <nodeprocessid>
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));
// You need to use this to allow something
app.use(cors("http://192.168.0.16:5000"))
app.use('/', homeRoutes)
console.log("Connecting to db ...")
try {
    mongoose.connect(process.env.DB_CONNECTION,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, () => {
        console.log("Connected method returned (unknown success)")
      })
} catch (err) {
  console.log("db connect failed." + err)
}

// This would tell you right away if the password is wrong
// or of there were any other db connection issues. It will NOT hang,
// because on error it will quit!
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function (callback) { console.log("Connection successful!") });

// Get is called when the code above is uncommendted

var find = async () => {
  console.log("Find called")
  const post = await Post.find()
  console.log("Find found")
  console.log(post)
}
// find()

app.listen(port, (err) => {
  if (err) console.log(err)
  console.log("This is on port " + port)
})

exports.module = app;
