import Nav from "../components/Nav"

import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"


const EditPost = () => {

 const [firstname, setFirstName] = useState("")
 const [lastname, setLastName] = useState("")
 const [portfolioUrl, setPortfolioUrl] = useState("")
 const [imageUrl, setimageUrl] = useState("")

 const [postArray, setPostArray] = useState([])

 // const [postId, setPostId] = useState("")

 const urlId = useParams().postsId


 useEffect( () => {

  const returnPostData = async () => {

     const res = await fetch(`http://localhost:8000/posts/${urlId}`, {method: "GET"})
     const resPost = await res.json()
     const array = resPost
      
     setPostArray(array)
     console.log(array)
      
    }

    returnPostData(urlId)
  
  }, [])

 // set first name input
  const handleFirstName = (e) => {
  
  setFirstName(e.target.value)
  }

  // set last name input
  const handleLastName = (e) => {

  setLastName(e.target.value)
  }

  // set portfoilo url
  const handlePortfolioUrl = (e) => {

  setPortfolioUrl(e.target.value)
  }

  // set image url
  const handleIamgeUrl = (e) => {

  setimageUrl(e.target.value)
  }

   // on submit post 
  const handlePostEdit = (e) => {
  e.preventDefault()

  // uploading post to the mongoDB database
  const put = {firstname, lastname, imageUrl, portfolioUrl}
  // const postJson = JSON.stringify(post)
  console.log(put)

  const PUTPost = () => {

  fetch("http://localhost:8000/posts/", {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(put)
  })

  }
  PUTPost(put)
  
  }

 return(
  <div className="edit-post-page">
    <form className="form-edit-post" onSubmit={handlePostEdit}>
      
      <div className="input-text">
        <label htmlFor="input-name_first">First name</label>
        <input value={postArray.firstname} type="text" placeholder="First name" className="input-name__first" id="input-name__first" onChange={handleFirstName}/>
        <div className="input-error-message"><span></span></div>
      </div>

      <div className="input-text">
        <label htmlFor="input-name_last">Last name</label>
        <input value={postArray.lastname} type="text" placeholder="Last name" className="input-name_last" id="input-name_last" onChange={handleLastName}/>
        <div className="input-error-message"><span></span></div>
      </div>

      <div className="input-text">
        <label htmlFor="input-portfolio__url">Portfolio Url</label>
        <input value={postArray.portfolioUrl} type="text" placeholder="Link to your portfolio" className="input-portfolio__url" id="input-portfolio__url" onChange={handlePortfolioUrl}/>
        <div className="input-error-message"><span></span></div>
      </div>

      <div className="input">
        <label htmlFor="input-img__url">Image URL</label>
        <input value={postArray.imageUrl} type="text" placeholder="Link to your image" className="iinput-img__url" id="input-img__url" onChange={handleIamgeUrl}/>
        <div className="input-error-message"><span></span></div>
      </div>
    
    <button className="primary-buttonn">Edit</button>
    </form>
   < Nav />
  </div>
  
  )
}


export default EditPost