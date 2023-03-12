import Nav from "../components/Nav"

import { Link } from "react-router-dom"

import { useEffect, useState, useParams } from "react"


const Search = () => {

const [searchValue, setSearchValue] = useState("")



const handleSearch = (e) => {
  
  setSearchValue(e.target.value)
}


 return(
  <div className="search-page">

    <input type="text" placeholder="First name" className="input-name__first" id="input-name__first" onChange={handleSearch}/>
   < Link to={`/${searchValue}`}> 
      <span>Search</span>
    </Link>


   < Nav />
  </div>
  
  )

}

export default Search