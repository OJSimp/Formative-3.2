// import {useState} from "react";
import Header from "../components/Header"
import Nav from "../components/Nav"
import Card from "../components/Card"


import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Card from "../components/Card"

const Home = () => {

  const [postArray, setPostArray] = useState(null)

  const searchId = useParams().postsId


  useEffect( () => {

    if (searchId != null){
    const returnPostData = async () => {

      const res = await fetch(`http://localhost:8001/posts/${searchId}`, {method: "GET"})
      const resPost = await res.json()
      const array = resPost
      
      setPostArray(array)
      console.log("post array", postArray) 
    }

    returnPostData()

    } else {
    
      const returnPostData = async () => {

      const res = await fetch(`http://localhost:8001/posts/`, {method: "GET"})
      const resPost = await res.json()
      const array = resPost
      
      setPostArray(array)
      
    }

    returnPostData()
    
    }
    
  }, [])

  
  
 return(

    <div className="home-page">
      < Header />
      < Card />
      < Nav />
    </div>

  )
}

export default Home