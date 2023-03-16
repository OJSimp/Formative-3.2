import Header from "../components/Header"
import Nav from "../components/Nav"

import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

const EditPost = () => {
    const [_id, setId ] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [portfolioUrl, setPortfolioUrl] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const [updateDetails, setUpdateDetails] = useState({})

    const searchId = useParams().postsId


    // pull the post data from the database 

    useEffect( () => {

        const returnEditPostData = async () => {
        
            const res = await fetch(`http://localhost:8001/posts/${searchId}`, {method: "GET"})
            const resPost = await res.json()

            setId(resPost._id)
            setFirstName(resPost.firstname)
            setLastName(resPost.lastname)
            setPortfolioUrl(resPost.portfolioUrl)
            setImageUrl(resPost.imageUrl)

            setUpdateDetails(resPost)
            
        }

        returnEditPostData(searchId)  
        
    }, [])

   


    const handleEditPost = (e) => {
        
    e.preventDefault();

    const put = {_id, firstname, lastname, imageUrl, portfolioUrl}

    console.log(put)

    const PUTRequest = () => {

    fetch(`http://localhost:8001/posts/${put._id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(put),
    })
    }   

    PUTRequest(put)
    
    }
    
    return(
        <div className="edit-post-page">
            
        < Header />

        <form action="" onSubmit={handleEditPost}>

            {/* Reset first name */}
            <input value={firstname} type="text" onChange={(e) => {
            setFirstName(e.target.value)
            console.log(firstname)
            }}/>

            {/* Reset last name */}
            <input value={lastname} type="text" onChange={(e) => {
            setLastName(e.target.value)
            console.log(lastname)
            }}/>

            {/* Reset portoflio URL */}
            <input value={portfolioUrl} type="text" onChange={(e) => {
            setPortfolioUrl(e.target.value)
            console.log(portfolioUrl)
            }}/>

            {/* Reset iamge URL */}
            <input value={imageUrl} type="text" onChange={(e) => {
            setImageUrl(e.target.value)
            console.log(imageUrl)
            }}/>

            <button>Edit Post</button>

        </form>
           

        < Nav />
        </div>
    )
}

export default EditPost