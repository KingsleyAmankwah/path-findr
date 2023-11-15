import React, { useState } from "react";
import "../App.css";
import logo from "../images/logo.png";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

export default function AppForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [cv, setCv] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCv(file);
  };

  const handleSpecialtyChange = (event) => {
    setSpecialty(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);

    const Mentor = { username, email, specialty, cv };
    signUpMentor(Mentor);
    setLoading(false);
  };

  async function signUpMentor(Mentor) {
    const formData = new FormData();
    formData.append("username", Mentor.username);
    formData.append("email", Mentor.email);
    formData.append("specialty", Mentor.specialty);

    if (Mentor.cv !== null && Mentor.cv !== undefined) {
      formData.append("cv", Mentor.cv, Mentor.cv.name);
    }

    try {
      const response = await fetch(
        "https://pathfindr-e70a2615f0f7.herokuapp.com/mentorApplication",
        {
          mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your-token",
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.text();
        toast.success("Application submitted successfully");
        console.log(`Response from server: ${data}`);
      } else {
        const errorMessage = await response.text();
        toast.error(errorMessage);
        console.error(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  if (loading) return <Spinner />;

  return (
    <div className="body-3">
      <div className="page-wrapper wf-section">
        <div className="information_section background-color neutral-200">
          <div className="information_content">
            <div className="information_header">
              <a href="goo" className="information_brand-link w-inline-block">
                <img
                  src={logo}
                  loading="lazy"
                  width={90}
                  alt=""
                  className="information_logo"
                />
              </a>
            </div>
            <h1 className="display-1 width-80percent">
              Join our team of mentors to help shape careers of the youth
            </h1>
          </div>
        </div>
        <div className="form_section">
          <div className="form_block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              onSubmit={handleClick}
              className="form"
              aria-label="Email Form"
            >
              <label htmlFor="First-name" className="form_field-label">
                Your name
              </label>
              <br />
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
              <br />
              <label htmlFor="phone-number" className="form_field-label">
                Phone number
              </label>
              <br />
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
              <br />
              <label htmlFor="Email" className="form_field-label">
                Email address{" "}
              </label>
              <br />
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

              <br />

              <label htmlFor="specialty" className="form_field-label">
                Specialty
              </label>

              <select
                name="specialty"
                id="specialty"
                value={specialty}
                onChange={handleSpecialtyChange}
                className="form_text-field w-input"
              >
                <option value="">Select specialty</option>
                <option value="Engineering">Engineering</option>
                <option value="Business Analysis">Business Analysis</option>
                <option value="Medicine">Medicine</option>
                <option value="Art">Art</option>
                <option value="Social Sciences">Social Sciences</option>
                <option value="Humanities">Humanities</option>
                <option value="Information Technology">
                  Information Technology
                </option>
              </select>
              <br />

              <label htmlFor="CV-file" className="form_field-label">
                CV File
              </label>
              <br />

              <input
                className="form_text-field w-input"
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                // onChange={(e) => setCv(e.target.files[0])}
                onChange={handleFileChange}
              />

              <input
                type="submit"
                value="Sign Up"
                data-wait="Please wait..."
                className="button mg-top-36px w-button"
                style={{ backgroundColor: "green", marginTop: 20 }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
