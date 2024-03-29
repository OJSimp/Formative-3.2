import Header from "../components/Header";
import Nav from "../components/Nav";
import "./UploadPost.scss";
import { useState } from "react";

import { useParams, useNavigate} from "react-router-dom"

const UploadPost = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [creationDate, setCreationDate] = useState("")


  // array construction for database

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastname(e.target.value);
  };

  const handlePortfolio = (e) => {
    setPortfolioUrl(e.target.value);
  };

  const handleImageUrl = (e) => {

    setimageUrl(e.target.value);
  };


  // posting data to mongoDb

  const navigate = useNavigate()

  const handlePostSubmit = (e) => {
    e.preventDefault();

    let today = new Date()
    setCreationDate(today)

    const post = { firstname, lastname, imageUrl, portfolioUrl, creationDate };
    console.log(post);

    const POSTPost = () => {
      fetch("http://localhost:8001/posts/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(post),
      })
    }
    POSTPost(post);

    navigate("/")
    
  };

  return (
    // import header here
     
      <div className="upload-post-page">
       < Header />
        <form className="form-create-post" onSubmit={handlePostSubmit}>
          <h3>Create New</h3>
          <div className="input-text">
              {/* <label htmlFor="input-name_first">First name:</label> */}
              <input
                type="text"
                placeholder="First name"
                className=" input-name__first"
                id="input-name__first"
                onChange={handleFirstName}
              />
              <div className="input-error-message">
                <span></span>
              </div>
            </div>

            <div className="input-text">
              {/* <label htmlFor="input-name_last">Last name:</label> */}
              <input
                type="text"
                placeholder="Last name"
                className=" input-name__last"
                id="input-name__last"
                onChange={handleLastName}
              />
              <div className="input-error-message">
                <span></span>
              </div>
            </div>

            <div className="input-text">
              {/* <label htmlFor="input-portfolio_url">Portfolio Url:</label> */}
              <input
                type="text"
                placeholder="Link to your portfolio"
                className=" input-portfolio__url"
                id="input-portfolio__url"
                onChange={handlePortfolio}
              />
              <div className="input-error-message">
                <span></span>
              </div>
            </div>

            <div className="input-text">
              {/* <label htmlFor="input-img_url">Image URL:</label> */}
              <input
                type="text"
                placeholder="Image URL"
                className="input-img__url"
                id="input-img__url"
                onChange={handleImageUrl}
              />
              <div className="input-error-message">
                <span></span>
              </div>
            </div>
              <img className="image-preview" src={imageUrl} alt="" />
              <button className="submit-button">Save</button>
        </form>
        <Nav />
      </div>
  );
};

export default UploadPost;
