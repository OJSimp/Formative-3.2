const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

//models
const Post = require("./models/post")

// create servers
const app = express()
app.use(express.json())

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



 // Get: View all posts 

 app.get("/posts/", async (req, res) => {


});


 // Get: View post by location


 // Get: Get post by id






 
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

