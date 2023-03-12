import "./Card.scss"

import { Link } from "react-router-dom"

import EditPost from "../pages/EditPost"


const Card = (props) => {

 const postArray = props.post

 const handleDelete = (e) => {
  // delete request to server
  const cardIDToDelete = e.target.value
  const cardToDelete = e.target.parentElement.parentElement.parentElement.style.display = "none"
  
  fetch(`http://localhost:8000/posts/${cardIDToDelete}`, {method: "DELETE"})
  
  console.log(cardToDelete)
 
 }

  const handleEdit = (e) => {
 
  // go to edit page
  const editId = e.target.value
  console.log(editId)

  // return < EditPost editId = {editId}/>
  
 }


 const cards = postArray.map((post, index) => {
 
 return (
  <div className="card-post" key={post._id}>
    <img className="card-img" src={post.imageUrl} alt="" />
   <div className="card-content">
    <a href={post.portfolioUrl}>{post.firstname} {post.lastname}</a>
   <div className="card-utility">
    <button value={post._id} className="utility-button" onClick={handleDelete}>Delete</button>
    < Link to={`/editpost/${post._id}`} className="utility-button" onClick={handleEdit}>Edit</Link>
    </div>
   </div>
  </div>
  )
 })

 return(
 <div className="display-card">
  <div className="card-grid">
   {cards}
  </div>
 </div>
  )

}

export default Card