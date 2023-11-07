import React, { useState } from 'react';
import './login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
   
  };

  return (
    <div className="section_big">
      <div className="modal_small">
        <div className="wrap_steps">
          <div className="step">
            <button   className={`step-number ${isLogin ? '' : 'active'}`}  onClick={toggleLogin} disabled={!isLogin}>
              <div className="number-txt">1</div>
              <div
                data-w-id="184c25c6-0b11-0808-f527-f780feeee6ea"
                className={`pulse ${isLogin ? '' : 'active'}`}
                style={{
                  transform: 'translate3d(0px, 0px, 0px) scale3d(1.7, 1.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                  opacity: 0,
                }}
              ></div>
            </button> 
            <div className="step-txt">Sign Up</div>
            <div className="step">
              <button className={`step-number`} onClick={toggleLogin} disabled={isLogin} >
                <div className="number-txt">2</div>
              </button>
              <div className="step-txt">Login</div>
            </div>
            {/* <div className={`step-number ${isLogin ? '' : 'active'}`}>
              <div className="number-txt">1</div>
              <div
                data-w-id="184c25c6-0b11-0808-f527-f780feeee6ea"
                className={`pulse ${isLogin ? '' : 'active'}`}
                style={{
                  transform: 'translate3d(0px, 0px, 0px) scale3d(1.7, 1.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                  opacity: 0,
                }}
              ></div>
            </div> */}
            {/* <div className="step-txt">{isLogin ? 'Login' : 'Sign up'}</div> */}
          </div>
          {/* {!isLogin && (
            
            // <div className="step">
            //   <div className={`step-number`} onClick={toggleLogin}>
            //     <div>2</div>
            //   </div>
            //   <div className="step-txt">Login</div>
            // </div>
          )} */}
        </div>
        <div className="form-block w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            method="get"
            data-ms-form={isLogin ? 'login' : 'signup'}
            className="form"
            data-wf-page-id="64b5124a00cf93214c44e4cc"
            data-wf-element-id="993c1d66-8f66-7c4a-9c26-70891fa45198"
            aria-label="Email Form"
          >
            <div className="text-center">
              <h1 className="h1-small">
                {isLogin ? 'Login' : 'Create an account 👋'}
              </h1>
              <p>{isLogin ? 'Please log in to access your account.' : 'You need to sign up to access this feature.'}</p>
            </div>
            {!isLogin && (
              <div className="field-wrapper top">
                <input
                  type="name"
                  className="field-input w-input"
                  maxLength="256"
                  name="Email-3"
                  data-name="Email 3"
                  placeholder="Enter your username"
                  id="Email-3"
                  data-ms-member="email"
                  src="kuku@gmail.com"
                />
              </div>

            )}

              <div className="field-wrapper top">
                <input
                  type="email"
                  className="field-input w-input"
                  maxLength="256"
                  name="Email-3"
                  data-name="Email 3"
                  placeholder="Enter your email"
                  id="Email-3"
                  data-ms-member="email"
                />
              </div>

            <div className="field-wrapper">
              <input
                type="password"
                className="field-input w-input"
                maxLength="256"
                name="Password-3"
                data-name="Password 3"
                placeholder="********"
                id="Password-3"
                data-ms-member="password"
              />
            </div>
            
            <div className={`form-flex ${isLogin ? 'hidden' : ''}`}>
              <label className="w-checkbox checkbox-wrap">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                <input
                  type="checkbox"
                  id="checkbox-2"
                  name="checkbox-2"
                  data-name="Checkbox 2"
                  style={{
                    opacity: 0,
                    position: 'absolute',
                     zIndex: -1,
                  }}
                />
                <span className="chekbox-text w-form-label" for="checkbox-2">
                  I agree to the terms of service
                </span>
              </label>
            </div>
            <input
              type="submit"
              value={isLogin ? 'Login' : 'Sign up'}
              data-wait="Please wait..."
              className="button_form w-button"
            />
            {!isLogin && (
              <a
                data-ms-auth-provider="google"
                href="google"
                className="google-button w-inline-block"
              >
                <img
                  src="https://assets.website-files.com/64b5124a00cf93214c44e4ba/64b51294ecb8e747caa5f584_google.svg"
                  loading="lazy"
                  alt=""
                  className="button-icon"
                />
                <p className="button-text">Continue with Google</p>
              </a>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
