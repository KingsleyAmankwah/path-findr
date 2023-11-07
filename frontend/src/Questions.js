import React from 'react';

const Questions = () => {
  return (
    <div className="unhea-wrap">
      <div className="center-text-wrap">
        <h2>What is an unhealthy relationship?</h2>
        <p className="center last">
          We define an unhealthy relationship as involving mean, disrespectful, controlling, or abusive behavior. This may include your partner:
        </p>
      </div>
      <div className="unhea-cards-wrap">
        <div className="unhea-cards-row1">
          <div className="card-wrap _1">
            <div className="card-text">
              Telling you that you’re involved in too many activities
            </div>
          </div>
          <div className="card-wrap _2">
            <div className="card-text">
              Texting and calling you all the time, and getting angry if you can’t reply
            </div>
          </div>
        </div>
        <div className="unhea-cards-row1">
          <div className="card-wrap _3">
            <div className="card-text">Getting overly jealous or possessive</div>
          </div>
          <div className="card-wrap _4">
            <div className="card-text">Pressuring you into sex or sending nudes</div>
          </div>
        </div>
        <div className="unhea-cards-row1">
          <div className="card-wrap _5">
            <div className="card-text">Threatening to hurt themselves because of you</div>
          </div>
          <div className="card-wrap _6">
            <div className="card-text">Making you feel that you can’t do anything right</div>
          </div>
          <div className="card-wrap _7">
            <div className="card-text">Accusing you of flirting or cheating</div>
          </div>
        </div>
      </div>
      <div className="center-text-wrap">
        <p className="center last">
          If this behavior sounds familiar and you want help, please{' '}
          <a href="/contact-us">contact us.</a>
        </p>
        <div className="btn-wrap">
          <a href="/contact-us" className="btn w-inline-block">
            <div className="btn-content-wrap">
              <div className="btn-text">Contact Us</div>
              <div className="btn-arrow-wrap" >
                <img
                  src="https://assets.website-files.com/605608e6614c47c27a609f58/605608e6614c47388c609f64_button%20arrow.svg"
                  loading="lazy"
                  width="6"
                  height="11"
                  alt=""
                  className="btn-arrow"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Questions;
