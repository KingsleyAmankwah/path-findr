import React from 'react';
//import './HeroSection.css';
import './App.css'

function HeroSection() {
  return (
    <div className="wrapper home-hero">
      <div className="hero-left">
        <h1 className="hero-heading">
          A community for <span className="marker-highlight">inner explorers</span> and life designers
        </h1>
        <p className="hero-text large">
          We provide a safe space for you to explore your inner world, clarify what matters most,
          and use that knowledge to chart your path from a place of alignment and integrity.<br />
        </p>
        <a href="https://omniform1.com/forms/v1/landingPage/63d391a8c50e47b6cbcdace7/641f3174b09e89c71966c672" target="_blank" className="button w-button">
          join our community
        </a>
      </div>
      <div className="right-contain hero">
        <div className="post-its-div">
          <a href="/course" className="w-inline-block">
            <div className="post-it-div">
              <div className="post-it-graphic yellow">
                <img
                  src="https://assets-global.website-files.com/62c552286d4c061ef5420485/633b3072dcf84f0cf446daa8_Group.png"
                  loading="lazy"
                  alt=""
                  width="33"
                />
                <div className="hero-post-it-text">
                  <span className="hero-post-it-text">life design courses</span>
                </div>
                
              </div>
            </div>
          </a>
          <a href="/mentorship" className="w-inline-block">
            <div className="post-it-div">
              <div className="post-it-graphic blue-post-it">
                <img
                  src="https://assets-global.website-files.com/62c552286d4c061ef5420485/633b307205d69324fa86175d_Group%20349.png"
                  loading="lazy"
                  width="35"
                  alt=""
                />
                <div className="hero-post-it-text">Life Design mentorship</div>
                
              </div>
            </div>
          </a>
          <a href="/life-compass" className="w-inline-block">
            <div className="post-it-div">
              <div className="post-it-graphic purple">
                <img
                  src="https://assets-global.website-files.com/62c552286d4c061ef5420485/6434696e79ec0c7662ded570_Sketch-annotation-element-brush-pen-icon-pin.png"
                  loading="lazy"
                  width="35"
                  alt=""
                />
                <div className="hero-post-it-text nop">The Life Compass</div>
                
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
