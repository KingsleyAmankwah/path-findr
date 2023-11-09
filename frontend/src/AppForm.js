import React, {useState} from 'react';
import './appform.css'

export default function AppForm(){
    // const [cvFile, setCvFile] = useState(null);

    // const handleCvFileChange = (e) => {
    //   const file = e.target.files[0]; // Get the selected file
    //   setCvFile(file); // Update the state with the selected file

    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [cv, setCv] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCv(file);
  };


  const handleClick = (e) => {
    e.preventDefault();

    const Mentor = {username,email,specialty,cv,};
  
    signUpStudent(Mentor);
    
  }

  // async function signUpStudent(Mentor) {
  //   const response = await fetch('http://localhost:8080/mentorApplication', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" }, // Change "text/plain" to "application/json"
  //     body: JSON.stringify(Mentor)
  //   });
  //   const data = await response.text();
  //   console.log(`Response from server: ${data}`);
  // }
  async function signUpStudent(Mentor) {
    const formData = new FormData();
    formData.append('username', Mentor.username);
    formData.append('email', Mentor.email);
    formData.append('specialty', Mentor.specialty);
    formData.append('cv', Mentor.cv);
  
    const response = await fetch('http://localhost:8080/mentorApplication', {
      method: 'POST',
      body: formData
    });
  
    const data = await response.text();
    console.log(`Response from server: ${data}`);
  }
   
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
                <label htmlFor="First-name" className="form_field-label">
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <label htmlFor="Last-name" className="form_field-label">
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
                <label htmlFor="Email" className="form_field-label">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br/>

                <select
                     name="Subject"
                     id="Subject"
                    className="form_text-field w-input"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                  >
    <option value=""className="form_field-label" >Select specialization</option>
    <option value="Engineering"className="form_field-label"  >Engineering</option>
    <option value="Business Analysis"className="form_field-label" >Business Analysis</option>
    <option value="Arts"className="form_field-label">Arts</option>
    <option value="Humanities" className="form_field-label">Humanities</option>
    <option value="Social Sciences"className="form_field-label">Social Sciences</option>
    <option value="Medicine"className="form_field-label">Medicine</option>
    <option value="Information Technology"className="form_field-label">Information Technology</option>
  </select>
                <br/>
                
                <label htmlFor="CV-file" className="form_field-label">
                CV File
              </label>
              <br />
                <input
                  type="file"
                  accept=".pdf,.doc,.docx" // Specify accepted file types (e.g., PDF, Word documents)
                  className="form_text-field w-input"
                  onChange={handleFileChange}
                 />
                
                <input
                  type="submit"
                  value="Request a quote"
                  data-wait="Please wait..."
                  className="button mg-top-36px w-button"
                  onClick={handleClick}
                />
              </form>
              <div
                className="form_success-message w-form-done"
                tabIndex="-1"
                role="region"
                aria-label="Email Form success"
              >
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div
                className="form_error-message w-form-fail"
                tabIndex="-1"
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



