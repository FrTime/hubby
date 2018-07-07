import React from "react";
import "./Splash.css";
import CarouselContainer from "../../components/CarouselContainer";




const Splash = () => (
  <div>
  <div>
  <header>
    <div>
      <h1 id="splashh1">hubby.</h1>
    </div>
  </header>
  </div>
  <CarouselContainer/>

  <div className= "section">
      <a href="/login"><button id="mybtn" className="btn btn-default">Get Started!</button></a>
  </div>
  <footer></footer>
  </div>
);

export default Splash;
