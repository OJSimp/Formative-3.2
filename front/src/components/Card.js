import './Card.scss'

// import { Link } from "react-router-dom"

const Card = () => {

    return(
     <Card className="card--page">
     <div className="card--widget" id="tag_type">
        <img className="card__image" src="https://i.ibb.co/D9k8Jyy/6841904-6841904-R1-053-25.jpg" alt="" />
            <div className="card__actions">
                <h2 className="card__artist">Artist Name</h2>
                <ul >
                <li className="card__edit"><h2>Edit</h2></li>
                <li><h2>&ensp;|&ensp;</h2></li>
                <li className="card__delete"><h2>Delete</h2></li>
                </ul>
            </div>
     </div>
     </Card>
     )
   
   }
   
   export default Card