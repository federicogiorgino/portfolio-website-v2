import React from "react";
import "./Hero.css";
import CV from "./cv.txt";

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className='info-panel'>
        <p className='title'>Hello my name is</p>
        <p className='name'>
          <span className='name-2'>Federico</span> Giorgino
        </p>
        <p className='description'>I am a full stack Web Developer based in Basel, Switzerland</p>
        <button class='btn '>
          <a href={CV} download>
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
