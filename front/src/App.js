import './App.scss';

import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Search from "./pages/Search"
import UploadPost from "./pages/UploadPost"

import EditPost from "./pages/EditPost"


function App() {
  return (
    <div className="App">
      < Routes >
        <Route path='/' element={< Home/>}></Route>
        <Route path='/search' element={< Search/>}></Route>
        <Route path='/post' element={< UploadPost/>}></Route>

        <Route path="/:postsId" element={ < Home />} />

        {/* <Route path="/editpost/:postsId" element={ < EditPost />} /> */}
      </ Routes >
    </div>
  );
}

export default App;
