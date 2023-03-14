import './Card.scss'
import '../App'
import './Nav.js'

import { Link } from "react-router-dom"

const Card = () => {

    return(
    <Card>
     <div className="card--widget" id="tag_type">
        <img className="card__image" src="" alt="" />
        <h2 className="card__artist">Artist Name</h2>
        <button className="card__change">Edit | Delete</button>
    
     </div>
     </Card>
     )
   
   }
   
   export default Card
   

// BEM Block is the div that holds the elements.
// Naming convention for this is: thing thing—element

// Elements are the items within the div; images, text and links etc
// Naming convention for these are: name__element
// The elements use double underscores and denotes changes within the block

// Modifer is the part that changes the whole thing and sits outside the elements, alongside the Block: thing thing—element
// The modifier uses double hyphens and denotes changes to the block.

// Layout examples:
// <div class="thing thing--light">
//     <img className="card__image" src="" alt="" />
//     <h2 className="card__artist">Artist Name</h2>
//      <button className="card__edit">Edit | Delete</button>
// </div>

