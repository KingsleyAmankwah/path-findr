import React from 'react';
import './getstarted.css';

const GetStarted = () => {
  return (
    <div className="get__started margin-top-73">
      <div className="get__started__text">
        <h1
          data-w-id="e8bb31fb-88e0-c062-c6ca-c015e759f5e5"
          className="get__started__now-title margin-bottom-30"
        >
          Get Started Now
        </h1>
        <p
          data-w-id="eb04d323-0988-4f52-04f5-72e8b9570905"
          className="get__started__now-subtitle"
        >
          Financial analysis involves using financial data to assess a company’s performance and make recommendations about how it can improve.
        </p>
      </div>
      <div className="get-started-btn">
        <a
          data-w-id="39634b3b-dcf5-e249-472a-49aefd37bb33"
          href="google.com"
          className="radius-sign-btn w-button"
        >
          Sign In
        </a>
        <a
          data-w-id="980b7c77-6e37-9f62-caf4-dcdd1e228332"
          href="google.com"
          className="start-free-btn w-button"
        >
          Start for Free
        </a>
        <p className="seven-days margin-top-73">
          *Start Free <span className="start-free-span-text">- </span>
          <span className="counter__get-started">7</span>
          <span className="start-free-span-text"> trial days</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
