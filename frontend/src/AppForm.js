import React from 'react';
import './appform.css'

export default function AppForm(){
    // const [cvFile, setCvFile] = useState(null);

    // const handleCvFileChange = (e) => {
    //   const file = e.target.files[0]; // Get the selected file
    //   setCvFile(file); // Update the state with the selected file
   
    return (
      <div className="body-3">
        <div className="page-wrapper wf-section">
          <div className="information_section background-color neutral-200">
            <div className="information_content">
              <div className="information_header">
                <a href="goo" className="information_brand-link w-inline-block">
                  <img
                    src="https://assets.website-files.com/62e15c2a619dad59e8549ad0/62e15c2a619dad212b549b5b_FLAGSHIP%20DESIGNER.png"
                    loading="lazy"
                    width="35"
                    height="35"
                    sizes="(max-width: 479px) 15vw, (max-width: 1439px) 35px, (max-width: 1919px) 2vw, 35px"
                    srcSet="https://assets.website-files.com/62e15c2a619dad59e8549ad0/62e15c2a619dad212b549b5b_FLAGSHIP%2520DESIGNER-p-500.png 500w, https://assets.website-files.com/62e15c2a619dad59e8549ad0/62e15c2a619dad212b549b5b_FLAGSHIP%2520DESIGNER-p-800.png 800w, https://assets.website-files.com/62e15c2a619dad59e8549ad0/62e15c2a619dad212b549b5b_FLAGSHIP%20DESIGNER.png 1080w"
                    alt=""
                    className="information_logo"
                  />
                </a>
              </div>
              <h1 className="display-1 width-80percent">
                Let's see if we are a good fit.{' '}
                <span className="text-span-8" >Schedule a call with our team.</span>
              </h1>
            </div>
            <div className="information_content hide-tablet">
              <p className="width-60percent">
                We're excited to see if we are a good fit. Expect a response within 24 hours.
              </p>
              <div className="divider"></div>
              <div className="information_footer-links">
                <a href="goo" className="link-2">
                  Terms
                </a>
                <a href="goo" className="is--second">
                  Content policy
                </a>
              </div>
            </div>
          </div>
          <div className="form_section">
            <div className="form_block w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="form"
                aria-label="Email Form"
              >
                <label for="First-name" className="form_field-label">
                  Your name
                </label>
                <br/>
                <input
                  type="text"
                  className="form_text-field w-input"
                  maxLength="256"
                  name="First-name"
                  data-name="First name"
                  placeholder="John Doe"
                  id="First-name"
                  required=""
                />
                <br/>
                <label for="Last-name" className="form_field-label">
                 Phone Number
                </label>
                <br/>
                <input
                  type="tel"
                  className="form_text-field w-input"
                  maxLength="256"
                  name="Last-name"
                  data-name="Last name"
                  placeholder="Phone number"
                  id="Last-name"
                  required=""
                />
                <br/>
                <label for="Email" className="form_field-label">
                  Email address{' '}
                </label>
                <br/>
                <input
                  type="email"
                  className="form_text-field w-input"
                  maxLength="256"
                  name="Email"
                  data-name="Email"
                  placeholder="johnsmith@example.com"
                  id="Email"
                  required=""
                />
                <br/>
                
                <label for="CV-file" className="form_field-label">
                CV File
              </label>
              <br />
                <input
                  type="file"
                  accept=".pdf,.doc,.docx" // Specify accepted file types (e.g., PDF, Word documents)
                  
                 />
                
                <input
                  type="submit"
                  value="Request a quote"
                  data-wait="Please wait..."
                  className="button mg-top-36px w-button"
                />
              </form>
              <div
                className="form_success-message w-form-done"
                tabindex="-1"
                role="region"
                aria-label="Email Form success"
              >
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div
                className="form_error-message w-form-fail"
                tabindex="-1"
                role="region"
                aria-label="Email Form failure"
              >
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="information_section background-color neutral-200 is--footer hide-desktop">
            <div className="information_content is--centered">
              <p className="paragraph-small width-60percent">
                We're excited to see if we are a good fit. Expect a response within 24 hours.
              </p>
            </div>
          </div>
        </div>
        <footer id="footer" className="footer black wf-section">
          <div className="container-l w-container">
            {/* Footer content */}
          </div>
        </footer>
      </div>
    );
  }



