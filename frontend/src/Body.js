import React from 'react';
import './body.css';

const Body = () => {
  return (
    <div className="section-container-master white-bg">
      <div className="people-block no-margin-top">
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="hero-header-block w-dyn-item">
              <div className="meet-team-member-flex">
                <div
                  style={{
                    backgroundImage:
                      'url("https://assets-global.website-files.com/5ee56ef342440844d0c728ef/5ee56ef342440830ecc72bcf_David-Warrilow.jpg")',
                  }}
                  className="meet-left"
                >
                  <div className="elements-block">
                    <div
                      className="row _1"
                      style={{
                        opacity: 1,
                        transform:
                          'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div
                        style={{
                          backgroundImage:
                            'url("https://assets-global.website-files.com/5ee56ef342440844d0c728ef/5ee56ef3424408ea11c72b72_Icon%201%20Media.svg")',
                        }}
                        className="icon-1"
                      ></div>
                    </div>
                    <div
                      className="row _2"
                      style={{
                        opacity: 1,
                        transform:
                          'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div
                        style={{
                          backgroundImage:
                            'url("https://assets-global.website-files.com/5ee56ef342440844d0c728ef/5ee56ef342440843a1c72b71_Icon%202%20Media.svg")',
                        }}
                        className="icon-2"
                      ></div>
                      <div className="meet-block">
                        <div className="meet-flex">
                          <div className="meet-arrow">
                            <img
                              src="https://assets.website-files.com/5ee56ef2b699d6efa2986496/5ee56ef342440823e8c7299f_Meet%20Arrow.svg"
                              alt="David Warrilow"
                            ></img>
                          </div>
                          <div className="meet-text">
                            <div>Meet David</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row _3"
                      style={{
                        opacity: 1,
                        transform:
                          'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div
                        style={{
                          backgroundImage:
                            'url("https://assets-global.website-files.com/5ee56ef342440844d0c728ef/5ee56ef34244081252c72b7a_Icon%203%20Media.svg")',
                        }}
                        className="icon-3"
                      ></div>
                    </div>
                    <div
                      className="row _4"
                      style={{
                        opacity: 1,
                        transform:
                          'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <a
                        href="/team-member/david-warrilow"
                        className="short-bio w-inline-block"
                      >
                        <div className="block"></div>
                        <div className="text-wrap">
                          <div>
                            <p className="gibson-special">
                              David has spent over twenty-five years working professionally in the film and television industry.
                            </p>
                          </div>
                          <div className="more-clickthrough">
                            <div>
                              <div className="allcaps-sml bold">Meet David</div>
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
                <div className="meet-team-member-right">
                  <div className="flex-wrap">
                    <div>
                      <div className="allcaps-sml red-emphasis-text">
                        our promise to you
                      </div>
                    </div>
                    <div>
                      <h2>Intimate, practical learning from real-world experts.</h2>
                    </div>
                    <div>
                      <p>
                        A no-nonsense approach to learning with smaller classes, hand-picked subjects to get you job-ready for when it's time to graduate.
                      </p>
                    </div>
                    <a
                      href="https://australian-institute-advanced-studies.webflow.io/about-aias#Team-section"
                      className="button-master alternate w-inline-block"
                      style={{ opacity: 0 }}
                    >
                      <div className="button-text-wrap">
                        <div>Meet your educators </div>
                      </div>
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
  );
};

export default Body;
