import React, { useState } from "react";
import mountain1 from "../src/images/mountain1.png";
import mountain2 from "../src/images/mountain2.png";
import textimg from "./images/text.png";
import './App.css'

const App = () => {
  const [offset,setOffset] = useState() //creating offset State

  const handleScroll = ()=> setOffset(window.pageYOffset)  // creating a function to handle scroll

  window.addEventListener('scroll',handleScroll)  // adding an eventListner


  return (
    <div className="App">
      <div className="zoom">
        <img src={mountain1} alt="" id="mountain1" style={{width  :(100 + offset * 0.3)+'%'}} />  
        <img src={mountain2} alt="" id="mountain2" style={{width  :(100 + offset * 0.3)+'%'}} />
        <img src={textimg} alt="" id="text" style={{top: `-${10+offset*0.3 + '%'}`}} />
      </div>
      <div className="content">
        <h2> React Parallax </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default App;
