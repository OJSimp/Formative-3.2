const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors');

//models
const Post = require("./models/post")

// create servers
const app = express()
app.use(express.json())
app.use(cors());

//middlewares


//routes

 // Post: Create a new post

  app.post("/posts/", async(req, res) => {

   const newPost = await Post.create(req.body)
   res.json(newPost)

   console.log("POST CREATED", newPost)

 })



 // Delete: Delete a post by ID

 app.delete("/posts/:postId", async(req, res) => {

  const deletePost = await Post.findByIdAndDelete(req.params.postId)
  res.json(deletePost)

  console.log("POST DELETED", deletePost)

})


 // Put: Update post

 app.put("/posts/:postId", async(req, res) => {

  const upadatePost = await Post.findById(req.params.postId)

  upadatePost.firstname = req.body.firstname
  upadatePost.lastname = req.body.lastname
  upadatePost.imageUrl = req.body.imageUrl
  upadatePost.portfolioUrl = req.body.portfolioUrl

  const updatedPost = await upadatePost.save()
  res.json(updatedPost)

  console.log("POST UPDATED", updatedPost)

})


 // Get: View all posts 

 app.get("/posts/", async (req, res) => {

  const viewposts = await Post.find({})

  console.log(viewposts)

  res.json(viewposts)


});

 // Get: Get post by id

 app.get("/posts/:postId", async (req, res) => {

  const requestedpost = await Post.findById(req.params.postId)

  console.log(requestedpost)

  res.json(requestedpost)

});



 // Get: View post by location




 
//connection middlewares

mongoose.connect(process.env.MONGODBKEY).catch((error) => {
console.log(error)
})

mongoose.connection.on('connected', () => {

 app.listen(process.env.PORT, () => {
 console.log("app active:", process.env.PORT)
 })
 
 console.log("connection active")})


mongoose.connection.on('error', () => {console.log("error")})

