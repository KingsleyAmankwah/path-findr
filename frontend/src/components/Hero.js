import React from "react";
import "../App.css";
import hero from "../images/hero.png";

const Hero = () => {
  return (
    <div>
      <header className="section-home-header">
        <div className="page-padding">
          <div className="padding-vertical padding-xhuge">
            <div className="container-medium">
              <div className="home-header_component">
                <div
                  id="w-node-_0c0bc286-180e-ebe4-42b6-078eec31a71a-cb3341c1"
                  className="home-header_content-wrapper"
                >
                  <h1 className="text-2xl lg:text-4xl">
                    {" "}
                    Empower your future – connect with mentors dedicated to
                    helping you grow and thrive
                  </h1>
                  <div className="margin-top margin-medium">
                    <p>
                      Unlock Your Potential: Navigate your career journey with
                      our personalized survey and discover tailored mentorship
                      to guide you towards success
                    </p>
                  </div>
                  <div className="margin-top margin-medium">
                    <a href="/register" className="start-free-btn w-button">
                      Get Started
                    </a>
                  </div>
                </div>
                <div className="home-header_image-wrapper">
                  <img
                    src={hero}
                    loading="lazy"
                    className="w-full"
                    // width="543"
                    // sizes="(max-width: 767px) 92vw, (max-width: 991px) 46vw, 41vw"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section-home-stats w-full">
        <div className="page-padding">
          <div className="padding-vertical padding-xlarge">
            <div className="container-medium">
              <div className="home-stats_component">
                <div className="home-stats_number-wrapper">
                  <div className="home-stats_number">
                    <span className="home-stats_green-span">30+</span> Careers
                  </div>
                </div>
                <div className="home-stats_number-wrapper">
                  <div className="home-stats_number">
                    <span className="home-stats_red-span">20+</span> Students
                  </div>
                </div>
                <div className="home-stats_number-wrapper">
                  <div className="home-stats_number">
                    <span className="home-stats_yellow-span">5+</span> Mentors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
