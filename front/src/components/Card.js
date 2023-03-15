import "./Card.scss"

const Card = (props) => {

 console.log(props.post)

 return(
  <div className="card-post">
    <img className="card__image" src="" alt="" />
    <div className="card--footer">
      <div className="card__artist">
        <h2>Artists Name</h2>
        <img src="" alt="right__arrow__button" />
      </div>
      <div className="card__edit"></div>
      <div className="card__delete"></div>
    </div>
  </div>
  )
}

export default Card