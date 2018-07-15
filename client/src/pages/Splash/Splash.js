import React from "react";
import "./Splash.css";
import CarouselContainer from "../../components/CarouselContainer";
import logo from "./logo.png";

const Splash = () => (
  <div>
    <div>
      <header>
        <div className="section">
          <a href="/login">
            <button id="mybtn" className="btn btn-default">
              Get Started!
            </button>
          </a>
        </div>
        <img className='myimg' src={logo} alt='logo goes here' width='225' height='225'/>
      </header>
    </div>

    <CarouselContainer />
  
    <footer className="groupCopyright">
            <small>
                    <i>Copyright &copy; 2018 Janet Warren Charles Gilker Tim Mace Franklin Antonio</i>
            </small>
    </footer>
 
  </div>
);

export default Splash;
