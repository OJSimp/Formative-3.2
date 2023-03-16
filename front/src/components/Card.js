import "./Card.scss"
import "../App.scss"

import { useNavigate } from "react-router-dom"

const Card = (props) => {

    const postArray = props.post

    // Delete button

    const handleDelete = (e) => {
      // delete request to server
      const cardIDToDelete = e.target.value
      const cardToDelete = e.target.parentElement.parentElement.parentElement.style.display = "none"
      
      fetch(`http://localhost:8000/posts/${cardIDToDelete}`, {method: "DELETE"})
      
      console.log(cardToDelete)
     
     }

     const navigate = useNavigate()

     const handleEditPost = (e) => {

      const postId = e.target.value

      navigate(`/editpost/${postId}`)
    
    }

     


    const cards = postArray.map((post, index) => {

    return (
      <div className="card-post" key={post._id}>
        {/* <h2>List</h2>
        <ul>{postArray.firstname}</ul>
       */}

        <img className="card__image" src={post.imageUrl} alt="" />
        <div className="card--footer">
          <div className="card__artist">
              <a href={post.portfolioUrl}><h4>{post.firstname} {post.lastname}</h4></a>
          </div>{/* ARTIST btn ENDs */}
          <div className="cards__utility">
              <button value={post._id} className="utility-button" onClick={handleEditPost}>Edit</button>
              <button value={post._id} className="utility-button" onClick={handleDelete}>Delete</button>
          </div>{/* UTILITY btns END */}
        </div> {/* card FOOTER ENDS */}
      </div> )
    });


 return (
  <div className="cards--container">
    {cards}
  </div>
  );
};

export default Card