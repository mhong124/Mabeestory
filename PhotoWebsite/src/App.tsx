import "./App.css";

import {Route, Routes} from "react-router-dom";

import Home from "./routes/Home";
import Nature from "./routes/Nature";
import People from "./routes/People";
import Food from "./routes/Food";
import Misc from "./routes/Misc";
import Places from "./routes/Places"

import ScrollToTop from "./scroll";

export default function App() {
  return (
    <div className = "App">
      <ScrollToTop />
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/nature" element = {<Nature/>}/>
        <Route path = "/people" element = {<People/>}/>
        <Route path = "/food" element = {<Food/>}/>
        <Route path = "/misc" element = {<Misc/>}/>
        <Route path = "/places" element = {<Places/>}/>
      </Routes>
    </div>
  );
}