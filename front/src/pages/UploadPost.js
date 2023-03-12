import Nav from "../components/Nav"

import { useState } from "react"



const UploadPost = () => {

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [portfolioUrl, setPortfolioUrl] = useState("")
  const [imageUrl, setimageUrl] = useState("")
  // const [tags, setTags] = useState("")
  // const [createdDate, setCreatedDate] = useState("")

  // const [postArray, setPostArray] = ({})

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
  const handlePostSubmit = (e) => {
  e.preventDefault()
  
  // setting the creation date of the post
  // const creationDate = console.log()
  // setCreatedDate(creationDate)

  // uploading post to the mongoDB database
  const post = {firstname, lastname, imageUrl, portfolioUrl}
  // const postJson = JSON.stringify(post)
  console.log(post)

  const POSTPost = () => {

  fetch("http://localhost:8000/posts/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(post)
  })

  }
  POSTPost(post)
  }


 return(
  <div className="upload-post-page">
    <form className="form-create-post" onSubmit={handlePostSubmit}>
      
      <div className="input-text">
        <label htmlFor="input-name_first">First name</label>
        <input type="text" placeholder="First name" className="input-name__first" id="input-name__first" onChange={handleFirstName}/>
        <div className="input-error-message"><span></span></div>
      </div>

      <div className="input-text">
        <label htmlFor="input-name_last">Last name</label>
        <input type="text" placeholder="Last name" className="input-name_last" id="input-name_last" onChange={handleLastName}/>
        <div className="input-error-message"><span></span></div>
      </div>

      <div className="input-text">
        <label htmlFor="input-portfolio__url">Portfolio Url</label>
        <input type="text" placeholder="Link to your portfolio" className="input-portfolio__url" id="input-portfolio__url" onChange={handlePortfolioUrl}/>
        <div className="input-error-message"><span></span></div>
      </div>

      <div className="input">
        <label htmlFor="input-img__url">Image URL</label>
        <input type="text" placeholder="Link to your image" className="iinput-img__url" id="input-img__url" onChange={handleIamgeUrl}/>
        <div className="input-error-message"><span></span></div>
        <div className="preview-image">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    
    <button className="primary-buttonn">Upload</button>
    </form>
   < Nav />
  </div>
  )

}

export default UploadPost