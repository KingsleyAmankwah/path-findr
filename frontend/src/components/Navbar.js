import React from "react"
import '../styles/body.css'
import logo from'../images/logo.png'


export default function Navbar() {
   
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('active');
      }
      
    return(
        <div className="nav-flex">
      <a
        href="/"
        aria-current="page"
        className="w-nav-brand w--current"
        aria-label="home"
      >
        <img
          src={logo}
          width={90}
          alt="Australian Institute of Advanced Studies"
          className="nav-logo"
        />
      </a>
      <nav role="navigation" className="nav-menu w-nav-menu">
        <div data-hover="true" data-delay={0} className="dropdown w-dropdown">
        </div>
            
        <a
          href="/"
          data-w-id="af19e7ca-dfad-8892-3307-d8d92ffddc74"
          className="global-nav-button w-inline-block"
        >
          <div className="left-line" style={{ height: "0%", width: "2%" }} />
          <div className="right-line" style={{ height: "0%", width: 2 }} />
          <div className="bottom-line" style={{ width: "0%", height: 2 }} />
          <div className="top-line" style={{ width: "0%", height: 2 }} />
          <div>
            <div>Home</div>
          </div>
        </a>
        <div className="nav-separator" />

        <a
          href="/login"
          data-w-id="af19e7ca-dfad-8892-3307-d8d92ffddc7b"
          className="global-nav-button w-inline-block"
        >
          <div className="left-line" style={{ height: "0%", width: "2%" }} />
          <div className="right-line" style={{ height: "0%", width: 2 }} />
          <div className="bottom-line" style={{ width: "0%", height: 2 }} />
          <div className="top-line" style={{ width: "0%" }} />
          <div>
            <div>For Students</div>
          </div>
        </a>
        
        
        <a
          href="/mentor"
          data-w-id="af19e7ca-dfad-8892-3307-d8d92ffddc8a"
          className="global-nav-button w-inline-block"
        >
          <div className="left-line" style={{ height: "0%", width: "2%" }} />
          <div className="right-line" style={{ height: "0%", width: 2 }} />
          <div className="bottom-line" style={{ width: "0%", height: 2 }} />
          <div className="top-line" style={{ width: "0%" }} />
          <div>
            <div>For Mentors</div>
          </div>
        </a>
      </nav>
      <div
  className="menu-button w-nav-button"
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
  <a href="/">Home</a>
  <a href="/login">For Students</a>
  <a href="/mentor">For Mentors</a>
</div>


</div>

    </div>
    )


}
    

  
  