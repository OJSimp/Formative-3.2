// import { useState } from "react";
import './App.scss';



import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Search from "./pages/Search"
import UploadPost from "./pages/UploadPost"


function App() {
  
  return (
    <div className="App">
      < Routes >
        <Route path='/' element={< Home/>}></Route>
        <Route path='/search' element={< Search/>}></Route>
        <Route path='/post' element={< UploadPost/>}></Route>

        <Route path="/:postsId" element={ < Home />} />
      </ Routes >
    </div>
  );
}

export default App;
