import Nav from "../components/Nav";

import { useState } from "react";

const UploadPost = () => {
  const [fristname, setFristName] = useState("");
  const [lastname, setLastname] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [creationDate, setCreationDate] = useState("");

  const handleFristName = (e) => {
    setFristName(e.target.value);
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

  const handlePostSubmit = (e) => {
    e.preventDefault();

    // let today = new Date()
    // setCreationDate(today)

    const post = {fristname, lastname, imageUrl, portfolioUrl};
    console.log(post);

    const POSTPost = () => {

    fetch("http://localhost:8000/posts/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(post)
    })

    }
    POSTPost(post)
  };

  return (
    <div className="postContainer">
      <div className="upload-post-page">
        <form className="form-create-post" onSubmit={handlePostSubmit}>
          <div className="inputsAndButtonContainer">
            <div className="input-text">
              <label htmlFor="input-name_frist">Frist name:</label>
              <input
                type="text"
                placeholder="Frist name"
                className=" input-name__frist"
                id="input-name__frist"
                onChange={handleFristName}
              />
              <div className="input-error-message">
                <span></span>
              </div>
            </div>

            <div className="input-text">
              <label htmlFor="input-name_last">Last name:</label>
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
              <label htmlFor="input-portfolio_url">Portfolio Url:</label>
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
              <label htmlFor="input-img_url">Image URL:</label>
              <input
                type="text"
                placeholder="Link to your image"
                className="input-img__url"
                id="input-img__url"
                onChange={handleImageUrl}
              />
              <div className="input-error-message">
                <span></span>
              </div>
            </div>
            <div className="buttonContainer">
              <button className="submitButton">Submit:</button>
            </div>
          </div>
        </form>
        <Nav />
      </div>
    </div>
  );
};

export default UploadPost;
