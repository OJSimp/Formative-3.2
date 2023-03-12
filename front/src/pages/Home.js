import Nav from "../components/Nav"

import Card from "../components/Card"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Home = () => {

  const [postArray, setPostArray] = useState(null)
  // const [searchValue, setSearchValue] = useState(null)

  // const postSearch = useParams().postsId

    useEffect( () => {

    const returnPostData = async () => {

      const res = await fetch(`http://localhost:8000/posts/`, {method: "GET"})
      const resPost = await res.json()
      const array = resPost
      
      setPostArray(array)
      
    }

    returnPostData()
    console.log("post array", postArray) 
  
  }, [])
  

 return(
  <div className="home-page">

    {/* conditional rendering the cards with teranry opperator because the GET function is async cannot send a null value to*/}
    { postArray ? < Card post={postArray} /> : null }

   < Nav />
  </div>
  
  )

}

export default Home