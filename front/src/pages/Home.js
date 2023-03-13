import Nav from "../components/Nav"

// import Card from "../components/Card"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Home = () => {

  const [postArray, setPostArray] = useState(null)

  // const [searchValue, setSearchValue] = useState(null)
  const searchId = useParams().postsId

    useEffect( () => {

    if (searchId != null){

    // Run Amy's code here!!!! 
    
    const returnPostData = async () => {

      const res = await fetch(`http://localhost:8004/posts/${searchId}`, {method: "GET"})
      const resPost = await res.json()
      const array = resPost
      
      setPostArray(array)
      console.log("post array", postArray) 
    }

    returnPostData()

    } else {

      // run my code
    
      const returnPostData = async () => {

      const res = await fetch(`http://localhost:8004/posts/`, {method: "GET"})
      const resPost = await res.json()
      const array = resPost
      
      setPostArray(array)
      
    }

    returnPostData()
    
    }
    
  }, [])
  

 return(
  <div className="home-page">

    {/* conditional rendering the cards with teranry opperator because the GET function is async cannot send a null value to*/}
    {/* { postArray ? < Card post={postArray} /> : null } */}
    
   < Nav />
  </div>
  
  )

}

export default Home