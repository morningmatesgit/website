import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdownToggle = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
  <img src={logo} alt="MorningMates Logo" className="logo-img" />
  <span>MorningMates</span>
</div>


        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>

          {/* SERVICES */}
          <li
            className="dropdown-parent"
            onMouseEnter={() => !isMobile && setOpenDropdown("services")}
            onMouseLeave={() => !isMobile && setOpenDropdown(null)}
          >
            <span
              className="nav-link"
              onClick={() => isMobile && handleDropdownToggle("services")}
            >
              Services ▾
            </span>

            {openDropdown === "services" && (
              <div className={`dropdown mega-dropdown ${isMobile ? "mobile-open" : ""}`}>
                {isMobile && <button className="back-btn" onClick={() => setOpenDropdown(null)}>← Back</button>}
                <div className="dropdown-left">
                  <h4 className="dropdown-title">OUR SERVICES →</h4>
                  <div className="dropdown-divider"></div>
                </div>
                <div className="dropdown-right">
                  <div className="dropdown-grid">
                    <Link to="/custom-software" onClick={handleLinkClick}>Software development</Link>
                    <Link to="/web-software" onClick={handleLinkClick}>Web development</Link>
                    <Link to="/mobile-software" onClick={handleLinkClick}>Mobile app development</Link>
                    <Link to="/iot-software" onClick={handleLinkClick}>IoT software development</Link>
                    <Link to="/ai-software" onClick={handleLinkClick}>AI software development</Link>
                    <Link to="/data-software" onClick={handleLinkClick}>Data management & analysis</Link>
                    <Link to="/qa-software" onClick={handleLinkClick}>QA and testing</Link>
                    <Link to="/devops-software" onClick={handleLinkClick}>DevOps management</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          
          <li
            className="dropdown-parent"
            onMouseEnter={() => !isMobile && setOpenDropdown("portfolio")}
            onMouseLeave={() => !isMobile && setOpenDropdown(null)}
          >
            <span
              className="nav-link"
              onClick={() => isMobile && handleDropdownToggle("portfolio")}
            >
              Portfolio ▾
            </span>

            {openDropdown === "portfolio" && (
              <div className={`dropdown mega-dropdown ${isMobile ? "mobile-open" : ""}`}>
                {isMobile && <button className="back-btn" onClick={() => setOpenDropdown(null)}>← Back</button>}
                <div className="dropdown-left">
                  <h4 className="dropdown-title">CASE STUDIES →</h4>
                  <div className="dropdown-divider"></div>
                </div>
                <div className="dropdown-right">
                  <div className="dropdown-grid">
                    <Link to="/vulnerability-management" onClick={handleLinkClick}>Vulnerability Management Solution</Link>
                    <Link to="/automated-risk" onClick={handleLinkClick}>Automated Direct Risk Management</Link>
                    <Link to="/ai-chatbot" onClick={handleLinkClick}>AI Powered Chatbot</Link>
                    <Link to="/carbon-capture" onClick={handleLinkClick}>Carbon Capture Solution</Link>
                    <Link to="/salesforce-omnistudio" onClick={handleLinkClick}>Salesforce OmniStudio</Link>
                    <Link to="/mobile-game" onClick={handleLinkClick}>Mobile Game Development</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* ENGAGEMENT */}
          <li
            className="dropdown-parent"
            onMouseEnter={() => !isMobile && setOpenDropdown("engagement")}
            onMouseLeave={() => !isMobile && setOpenDropdown(null)}
          >
            <span
              className="nav-link"
              onClick={() => isMobile && handleDropdownToggle("engagement")}
            >
              Engagement ▾
            </span>

            {openDropdown === "engagement" && (
              <div className={`dropdown mega-dropdown ${isMobile ? "mobile-open" : ""}`}>
                {isMobile && <button className="back-btn" onClick={() => setOpenDropdown(null)}>← Back</button>}
                <div className="dropdown-left">
                  <h4 className="dropdown-title">MODELS →</h4>
                  <div className="dropdown-divider"></div>
                </div>
                <div className="dropdown-right">
                  <div className="dropdown-grid">
                    <Link to="/team-augmentation" onClick={handleLinkClick}>Staff Augmentation</Link>
                    <Link to="/dedicated-teams" onClick={handleLinkClick}>Dedicated Teams</Link>
                    <Link to="/core-teams" onClick={handleLinkClick}>Core Teams</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>

       
        <div className="hamburger" onClick={() => { setIsOpen((s) => !s); setOpenDropdown(null); }}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
