const express = require('express');
const router = express.Router();
const PostUsers = require('../models/PostUsers')
const PostMessages = require('../models/PostMessages')
const bodyParser = require('body-parser');
const fs = require("fs");
const path = require('path');
const cors = require('cors')
const mongoose = require('mongoose');
// THIS WONT WORK IF YOU VPN IS ON
// Make sure the link is correct


router.get('/', async (req, res) => {
  // Be aware that the posts obejct is inside an array
  try {
    const posts: object = await PostMessages.find().limit()
    res.json(posts[0])
  } catch (err) {
    res.json({ message: err })
  }
});

router.post('/getwithfilter', cors("http://192.168.0.16:3000"), async (req, res) => {
  console.log("Get with filter")
  // Be aware that the posts obejct is inside an array
  try {
    console.log(req.body.filter)
    const filterReceiver: string = req.body.filter.receiver
    const filterSender: string = req.body.filter.sender
    console.log("Trying to get")
    const posts: object[] = await PostMessages.find({
      $or: [
        {
          sender: filterSender,
          receiver: filterReceiver
        },
        {
          sender: filterReceiver,
          receiver: filterSender
        }
      ]
    }).limit(20)
    console.log(posts)
    console.log("Got it")
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
});

router.get('/getall', async (req, res) => {
  // Be aware that the posts obejct is inside an array
  try {
    let params = new URLSearchParams("localhost:5000/?id=2");
    const filterReceiver: string = params.get('filterReceiver')
    console.log(filterReceiver)
    console.log("Trying to get")
    const posts: object[] = await PostMessages.find({ sender: "jonny" }).limit(20)
    console.log("Got it")
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
});

// Dont forget sending something back
router.post('/', cors("http://192.168.0.16:3000"), async (req, res) => {
  console.log(typeof req.body)
  console.log(req.body)
  const post = new PostMessages({
    sender: req.body.sender,
    receiver: req.body.receiver,
    textContent: req.body.textContent
  })
  console.log("New")
  console.log(post)
  try {
    const savedPost = await post.save()
    res.json(savedPost)
  }
  catch (err) {
    res.json(err)
  }
});


router.post('/getfriends', cors(), async (req, res) => {
  try {
    console.log("Trying to get")
    const posts: object = await PostUsers.findOne({ name: req.body.name })
    console.log("Got it")
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
});

router.post('/addfriend', cors("http://192.168.0.16:5000"), async (req, res) => {
  try {
    const currentData = await PostUsers.findOne({name: req.body.user})
    console.log("this is the type of the current data !!!")
    console.log(currentData)
    currentData.friends.push(req.body.newFriend) 
    console.log(currentData)
    await currentData.save()
    res.sendStatus(200)
  }
  catch (err) {
    console.log(err)
    res.json(err)
  }
});



router.post('/userexists', cors("http://192.168.0.16:5000"), async (req, res) => {
  try {
    const user = await PostUsers.findOne({name: req.body.user})
    var result: boolean
    if (user != null) {
      result = true
    } else {
      result = false
    }
    res.send(result)
  }
  catch (err) {
    console.log(err)
    res.json(err)
  }
});

router.post('/adduser', cors("http://192.168.0.16:5000"), async (req, res) => {
  try {
    console.log("Creating new user")
    console.log(req.body.name)
    const post = new PostUsers({
      name: req.body.name,
      friends: []
    })

    const savedPost = await post.save()
    res.json(savedPost)
  }
  catch (err) {
    console.log(err)
    res.json(err)
  }
});


module.exports = router;
