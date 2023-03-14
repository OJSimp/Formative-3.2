import "./Search.scss"

import Nav from "../components/Nav"

import { Link } from "react-router-dom"

import { useState } from "react"

const Search = () => {

const [searchValue, setSearchValue] = useState("")

const handleSearchInput = (e) => {
e.preventDefault()

console.log(searchValue)
}

 const handleSearchValue = (e) => [

 setSearchValue(e.target.value)

]

 return(
  <div className="search-page">
    <div className="search-header">
      <form action="" className="search-from" onSubmit={handleSearchInput}>
        <input type="text" className="search-input" placeholder="search here for" onChange={handleSearchValue}/>
        <Link to={`/${searchValue}`} className="primary-button">Search</Link>
      </form>
    </div>
   < Nav />
  </div>
  
  )

}

export default Search