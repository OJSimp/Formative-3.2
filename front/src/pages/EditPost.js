import Header from "../components/Header"
import Nav from "../components/Nav"

import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

const EditPost = () => {

    const [firstname, setFristName] = useState()
    const [lastname, setLastname] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [portfolioUrl, setPortfolioUrl] = useState()

    const [postArray, setPostArray] = useState({})

    const searchId = useParams().postsId


    // pull the data from the database 

    useEffect( () => {

        const returnEditPostData = async () => {
        
            const res = await fetch(`http://localhost:8001/posts/${searchId}`, {method: "GET"})
            const resPost = await res.json()

            setPostArray(resPost)
            
        }

        returnEditPostData()

        const first = postArray.firstname
        const last = postArray.lastname
        const image = postArray.imageUrl
        const portfolio = postArray.portfolioUrl
            
        setFristName(first)
        setLastname(last) 
        setImageUrl(image)
        setPortfolioUrl(portfolio)

        console.log(firstname)
        console.log(lastname)
        console.log(imageUrl)
        console.log(portfolioUrl)
        
    }, [])


    return(
        <div className="edit-post-page">
        


        < Header />
        < Nav />
        </div>
    )
}

export default EditPost