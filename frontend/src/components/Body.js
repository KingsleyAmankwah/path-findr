import React from "react";
import "../App.css";
import mentor from "../images/mentor1.png";
import trophy from "../images/trophy.svg";
import arrow1 from "../images/arrow1.svg";
import arrow2 from "../images/arrow2.svg";
import meetarrow from "../images/meetarrow.svg";
const Body = () => {
  return (
    <div>
      <div className="section-container-master white-bg">
        <div className="people-block no-margin-top">
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="hero-header-block w-dyn-item">
                <div className="meet-team-member-flex">
                  <div
                    style={{
                      backgroundImage: `url(${mentor})`,
                    }}
                    className="meet-left"
                  >
                    <div className="elements-block">
                      <div
                        className="row _2"
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <div className="meet-block">
                          <div className="meet-flex">
                            <div className="meet-arrow">
                              <img src={meetarrow} alt="David Warrilow"></img>
                            </div>
                            <div
                              className="meet-text"
                              style={{ fontSize: "8" }}
                            >
                              <div>Meet Amankwaah</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="row _4"
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <a href="/login" className="short-bio w-inline-block">
                          <div className="block"></div>
                          <div className="text-wrap">
                            <div>
                              <p className="gibson-special">
                                Meet Amankwaah, a seasoned professional with a
                                wealth of experience in psychology, committed to
                                fostering your growth.
                              </p>
                            </div>
                            <div className="more-clickthrough">
                              <div>
                                <div className="allcaps-sml bold">
                                  Meet Amankwaah
                                </div>
                              </div>
                              <div className="more-clickthrough-arrow">
                                <img
                                  src="https://assets.website-files.com/5ee56ef2b699d6efa2986496/5ee56ef34244080c51c729a1_Black%20Chevron.svg"
                                  height="10"
                                  alt="Lecturer"
                                  className="chevron-more"
                                ></img>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="meet-team-member-right"
                    style={{ marginRight: -30 }}
                  >
                    <div className="flex-wrap">
                      <div>
                        <div className="allcaps-sml red-emphasis-text">
                          our promise to you
                        </div>
                      </div>
                      <div>
                        <h2>
                          At PathFindr, we promise unwavering support on your
                          journey to success
                        </h2>
                      </div>
                      <div>
                        <p>
                          Our commitment is to provide personalized mentorship,
                          empowering you with the knowledge and guidance needed
                          to achieve your career aspirations.
                        </p>
                      </div>
                      <a
                        href="https://australian-institute-advanced-studies.webflow.io/about-aias#Team-section"
                        className="button-master alternate w-inline-block"
                        style={{ opacity: 0 }}
                      >
                        <div>
                          <img
                            src="https://assets.website-files.com/5ee56ef2b699d6efa2986496/5ee56ef34244080c51c729a1_Black%20Chevron.svg"
                            width="8"
                            alt="Button Arrow"
                          ></img>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section />
    </div>
  );
};

const Section = () => {
  return (
    <>
      <div className="section-white-master">
        <div className="section-wrapper-master">
          <div className="section-container-master horizontal-split-section">
            <div className="callout-left">
              <div>
                <h2 className="half-header">
                  Let us help you get to your highest capacity with the right
                  career path
                </h2>
              </div>
            </div>
            <div className="callout-right">
              <img
                src={trophy}
                width={450}
                data-w-id="b5019df9-e6f1-a843-e8c3-8dcee1fbc5c8"
                alt=""
                className="value-prop-vector"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="section-wrapper-master">
          <div className="section-container-master alternate">
            <div className="section-statistics">
              <div className="counter-container">
                <div className="title-wrap">
                  <div className="superscript-caps">How we operate</div>
                  <h2 className="nutshell">At a glance</h2>
                </div>
                <div className="feature-number-wrap">
                  <div className="statistic-circle-wrap">
                    <div className="circle-div" style={{ opacity: 1 }}>
                      <h4 className="counterup">1</h4>
                      <div className="title-capped">Sign up on PathFindr</div>
                    </div>
                  </div>
                  <div className="arrow-wrap">
                    <img
                      src={arrow1}
                      width={150}
                      alt=""
                      className="arrow-image"
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                  <div className="statistic-circle-wrap">
                    <div className="circle-div" style={{ opacity: 1 }}>
                      <h4 className="counterup">2</h4>
                      <div className="title-capped">
                        Fill out our personality assessment form
                      </div>
                    </div>
                  </div>
                  <div className="arrow-wrap">
                    <img
                      src={arrow2}
                      width={150}
                      alt=""
                      className="arrow-image"
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                  <div className="statistic-circle-wrap">
                    <div className="circle-div" style={{ opacity: 1 }}>
                      <h4 className="counterup">3</h4>
                      <div className="title-capped">
                        Voila! You're paired with mentor to get you hooked on to
                        your amazing career
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
