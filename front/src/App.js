import './App.scss';

import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
// import Card from "./components/Card"
import Search from "./pages/Search"
import UploadPost from "./pages/UploadPost"
import EditPost from "./pages/EditPost"


function App() {
  return (
    <div className="app"> 
      < Routes >
        <Route path='/' element={< Home/>}></Route>
        <Route path='/search' element={< Search/>}></Route>
        <Route path='/post' element={< UploadPost/>}></Route>
        <Route path='/editpost/:postsId' element={< EditPost/>}></Route>

        <Route path="/:postsId" element={ < Home />} />
      </ Routes >
    </div>
  );
}

export default App;
