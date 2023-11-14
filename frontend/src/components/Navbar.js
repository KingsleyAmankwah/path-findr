import React from "react";
import "../App.css";
import logo from "../images/logo.png";

export default function Navbar() {
  function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("active");
  }

  return (
    <div className="nav-flex">
      <a
        href="/"
        aria-current="page"
        className="w-nav-brand w--current"
        aria-label="home"
      >
        <img src={logo} width={90} alt="logo" className="nav-logo" />
      </a>
      <nav role="navigation" className="nav-menu" style={{}}>
        <div
          data-hover="true"
          data-delay={0}
          className="dropdown w-dropdown"
        ></div>

        <a
          href="/"
          data-w-id="af19e7ca-dfad-8892-3307-d8d92ffddc74"
          className="global-nav-button "
        >
          <div>
            <div>Home</div>
          </div>
        </a>
        <div className="nav-separator" />

        <a
          href="/login"
          data-w-id="af19e7ca-dfad-8892-3307-d8d92ffddc7b"
          className="global-nav-button"
        >
          <div>
            <div>Login</div>
          </div>
        </a>

        <a
          href="/register"
          data-w-id="af19e7ca-dfad-8892-3307-d8d92ffddc7b"
          className="global-nav-button"
        >
          <div>
            <div>For Students</div>
          </div>
        </a>

        <a
          href="/mentor"
          data-w-id="af19e7ca-dfad-8892-3307-d8d92ffddc8a"
          className="global-nav-button "
        >
          <div>
            <div>For Mentors</div>
          </div>
        </a>
      </nav>
      <div
        className="menu-button"
        style={{ WebkitUserSelect: "text" }}
        aria-label="menu"
        role="button"
        tabIndex={0}
        aria-controls="mobile-menu"
        aria-haspopup="menu"
        aria-expanded="false"
        onClick={() => toggleMobileMenu()} // Add an onClick handler
      >
        <div>Menu</div>

        <div
          className="mobile-menu"
          id="mobile-menu" // Use id instead of class
        >
          {/* Add your mobile menu items here */}
          <a href="/" style={{ marginRight: 10 }}>
            Home
          </a>
          <a href="/login" style={{ marginRight: 10 }}>
            Login
          </a>
          <a href="/register" style={{ marginRight: 10 }}>
            For Students
          </a>
          <a href="/mentor" style={{ marginRight: 10 }}>
            For Mentors
          </a>
        </div>
      </div>
    </div>
  );
}
