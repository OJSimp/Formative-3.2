import Header from "../components/Header"
import Nav from "../components/Nav"

import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

const EditPost = () => {

    const [firstname, setFristName] = useState("")
    const [lastname, setLastName] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [portfolioUrl, setPortfolioUrl] = useState()

    const [postArray, setPostArray] = useState({})

    const searchId = useParams().postsId


    // pull the post data from the database 

    useEffect( () => {

        const returnEditPostData = async () => {
        
            const res = await fetch(`http://localhost:8001/posts/${searchId}`, {method: "GET"})
            const resPost = await res.json()

            setPostArray(resPost)
            
        }

        returnEditPostData(searchId)

        const first = postArray.firstname
        const last = postArray.lastname
        const image = postArray.imageUrl
        const portfolio = postArray.portfolioUrl
            
        setFristName(first)
        setLastName(last) 
        setImageUrl(image)
        setPortfolioUrl(portfolio)

        console.log(postArray)
        
    }, [])


    return(
        <div className="edit-post-page">
            
        < Header />
            {/* Reset first name */}
            <input value={firstname} type="text" onChange={(e) => {
            setFristName(e.target.value)
            console.log(firstname)
            }}/>

            {/* Reset last name */}
            <input value={lastname} type="text" onChange={(e) => {
            setLastName(e.target.value)
            console.log(lastname)
            }}/>

            {/* Reset author website URL */}
            <input value={portfolioUrl} type="text" onChange={(e) => {
            setPortfolioUrl(e.target.value)
            console.log(portfolioUrl)
            }}/>

            {/* Reset Image Url */}
            <input value={imageUrl} type="text" onChange={(e) => {
            setImageUrl(e.target.value)
            console.log(imageUrl)
            }}/>


        < Nav />
        </div>
    )
}

export default EditPost