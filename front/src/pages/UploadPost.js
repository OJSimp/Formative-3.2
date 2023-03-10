import Nav from "../components/Nav"

import { useState } from "react"


const UploadPost = () => {

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")


  // on submit post 
  const handlePostSubmit = () => {
  console.log("submit post")
  
  }

  // set first name input
  const handleFirstName = (e) => {
  
  setFirstName(e.target.value)
  // console.log(e.target.value)
  }


  // set last name input
  const handleLastName = (e) => {
  
  console.log(e.target.value)
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
        <input type="text" placeholder="Link to your portfolio" className="input-portfolio__url" id="input-portfolio__url"/>
        <div className="input-error-message"><span></span></div>
      </div>

      <div className="input-text">
        <label htmlFor="input-img__url">Image URL</label>
        <input type="text" placeholder="Link to your image" className="iinput-img__url" id="input-img__url"/>
        <div className="input-error-message"><span></span></div>
      </div>
    
    <button className="primary-buttonn">Upload</button>
    </form>
   < Nav />
  </div>
  
  )

}

export default UploadPost