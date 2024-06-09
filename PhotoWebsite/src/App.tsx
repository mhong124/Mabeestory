import "./App.css";
import Navbar from "./components/navbar/Navbar";

import {Route, Routes} from "react-router-dom";

import Home from "./routes/Home";
import Nature from "./routes/Nature";
import People from "./routes/People";
import Food from "./routes/Food";
import Misc from "./routes/Misc";

export default function App() {
  return (
    <div className = "App">
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/nature" element = {<Nature/>}/>
        <Route path = "/people" element = {<People/>}/>
        <Route path = "/food" element = {<Food/>}/>
        <Route path = "/misc" element = {<Misc/>}/>
      </Routes>
      <Navbar/>
    </div>
  );
}