// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "./assets/logo.png";
// import "./Navbar.css"

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleDropdown = (menu) => {
//     setOpenDropdown((prev) => (prev === menu ? null : menu));
//   };

//   const handleLinkClick = () => {
//     setIsOpen(false);
//     setOpenDropdown(null);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">

//         {/* LOGO */}
//         <Link to="/" className="logo" onClick={handleLinkClick}>
//           <img src={logo} alt="MorningMates Logo" className="logo-img" />
//           <span>MorningMates</span>
//         </Link>

//         {/* NAV LINKS */}
//         <ul className={`nav-links ${isOpen ? "open" : ""}`}>

//           <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>

//           {/* SERVICES */}
//           <li
//             className="dropdown-parent"
//             onMouseEnter={() => !isMobile && setOpenDropdown("services")}
//             onMouseLeave={() => !isMobile && setOpenDropdown(null)}
//             onClick={() => isMobile && toggleDropdown("services")}
//           >
//             <span className="nav-link">Services ▾</span>
//             {openDropdown === "services" && (
//               <div className="dropdown">
//                 <Link to="/custom-software" onClick={handleLinkClick}>Software development</Link>
//                 <Link to="/web-software" onClick={handleLinkClick}>Web development</Link>
//                 <Link to="/mobile-software" onClick={handleLinkClick}>Mobile app development</Link>
//                 <Link to="/cyber-software" onClick={handleLinkClick}>Cybersecurity</Link>
//                 <Link to="/ai-software" onClick={handleLinkClick}>AI Development</Link>
//                 <Link to="/data-software" onClick={handleLinkClick}>Data Analytics</Link>
//                 <Link to="/qa-software" onClick={handleLinkClick}>QA Testing</Link>
//                 <Link to="/cloud-software" onClick={handleLinkClick}>DevOps</Link>
//               </div>
//             )}
//           </li>

//           {/* PORTFOLIO */}
//           <li
//             className="dropdown-parent"
//             onMouseEnter={() => !isMobile && setOpenDropdown("portfolio")}
//             onMouseLeave={() => !isMobile && setOpenDropdown(null)}
//             onClick={() => isMobile && toggleDropdown("portfolio")}
//           >
//             <span className="nav-link">Portfolio ▾</span>
//             {openDropdown === "portfolio" && (
//               <div className="dropdown">
//                 <Link to="/vulnerability-management" onClick={handleLinkClick}>Vulnerability Management</Link>
//                 <Link to="/automated-risk" onClick={handleLinkClick}>Direct Risk Automation</Link>
//                 <Link to="/ai-chatbot" onClick={handleLinkClick}>AI Chatbot</Link>
//                 <Link to="/carbon-capture" onClick={handleLinkClick}>Carbon Capture</Link>
//                 <Link to="/salesforce-omnistudio" onClick={handleLinkClick}>Salesforce OmniStudio</Link>
//                 <Link to="/mobile-game" onClick={handleLinkClick}>Mobile Game Dev</Link>
//               </div>
//             )}
//           </li>

          
//           <li
//             className="dropdown-parent"
//             onMouseEnter={() => !isMobile && setOpenDropdown("engagement")}
//             onMouseLeave={() => !isMobile && setOpenDropdown(null)}
//             onClick={() => isMobile && toggleDropdown("engagement")}
//           >
//             <span className="nav-link">Engagement ▾</span>
//             {openDropdown === "engagement" && (
//               <div className="dropdown">
//                 <Link to="/team-augmentation" onClick={handleLinkClick}>Staff Augmentation</Link>
//                 <Link to="/dedicated-teams" onClick={handleLinkClick}>Dedicated Teams</Link>
//                 <Link to="/core-teams" onClick={handleLinkClick}>Core Teams</Link>
//               </div>
//             )}
//           </li>

//         </ul>

//         {/* RIGHT BUTTON */}
//         <div className="right-section">
//           <Link to="/contact" className="contact-btn">CONTACT US</Link>
//         </div>

//         {/* MOBILE MENU */}
//         <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//           <span></span><span></span><span></span>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import "./Navbar.css"

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const [openDropdown, setOpenDropdown] = useState(null);
 const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

 useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

 const toggleDropdown = (menu) => {
  setOpenDropdown((prev) => (prev === menu ? null : menu));
 };

 const handleLinkClick = () => {
  setIsOpen(false);
  setOpenDropdown(null);
 };

 return (
  <nav className="navbar">
   <div className="navbar-container">

    {/* LOGO */}
    <Link to="/" className="logo" onClick={handleLinkClick}>
     <img src={logo} alt="MorningMates Logo" className="logo-img" />
     <span>MorningMates</span>
    </Link>

    {/* NAV LINKS */}
    <ul className={`nav-links ${isOpen ? "open" : ""}`}>

     <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>

     {/* SERVICES - NOW WITH TWO COLUMNS */}
     <li
      className="dropdown-parent"
      onMouseEnter={() => !isMobile && setOpenDropdown("services")}
      onMouseLeave={() => !isMobile && setOpenDropdown(null)}
      onClick={() => isMobile && toggleDropdown("services")}
     >
      <span className="nav-link">Services ▾</span>
      {openDropdown === "services" && (
       <div className="dropdown">
        {/* NEW: Wrapper for layout/styling */}
        <div className="dropdown-content-wrapper services-layout">
         
         {/* COLUMN 1 */}
         
          
          <div className="col-group">
           <span
  className="group-heading our-services"
  style={{
    color: "#ffcf40", // yellow color
    paddingBottom: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
    marginBottom: "10px",
    display: "block",
    fontWeight: "700",
    textTransform: "uppercase"
  }}
>
  OUR SERVICES →
</span>
          
           
         
         </div>

         {/* COLUMN 2 */}
         <div className="dropdown-col">
           <Link to="/custom-software" onClick={handleLinkClick}>Software development</Link>
           <Link to="/web-software" onClick={handleLinkClick}>Web development</Link>
           <Link to="/mobile-software" onClick={handleLinkClick}>Mobile app development</Link>
          
           <Link to="/ai-software" onClick={handleLinkClick}>AI software development</Link>
          <Link to="/qa-software" onClick={handleLinkClick}>QA and testing</Link>
          <Link to="/cloud-software" onClick={handleLinkClick}>DevOps management</Link>
          <Link to="/data-software" onClick={handleLinkClick}>Data management & analysis</Link>
          <Link to="/cyber-software" onClick={handleLinkClick}>Cybersecurity services</Link>
          
         </div>
        </div>
       </div>
      )}
     </li>

     {/* PORTFOLIO - WRAPPED FOR CONSISTENT STYLING */}
     <li
      className="dropdown-parent"
      onMouseEnter={() => !isMobile && setOpenDropdown("portfolio")}
      onMouseLeave={() => !isMobile && setOpenDropdown(null)}
      onClick={() => isMobile && toggleDropdown("portfolio")}
     >
      <span className="nav-link">Portfolio ▾</span>
      {openDropdown === "portfolio" && (
       <div className="dropdown">
        {/* NEW: Wrapper for styling */}
        <div className="dropdown-content-wrapper">
           <span
  className="group-heading our-services"
  style={{
    color: "#ffcf40", // yellow color
    paddingBottom: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
    marginBottom: "10px",
    display: "block",
    fontWeight: "700",
    textTransform: "uppercase"
  }}
>
  OUR Portfolio →
</span>
         <Link to="/vulnerability-management" onClick={handleLinkClick}>Vulnerability Management</Link>
         <Link to="/automated-risk" onClick={handleLinkClick}>Direct Risk Automation</Link>
         <Link to="/ai-chatbot" onClick={handleLinkClick}>AI Chatbot</Link>
         <Link to="/carbon-capture" onClick={handleLinkClick}>Carbon Capture</Link>
         <Link to="/salesforce-omnistudio" onClick={handleLinkClick}>Salesforce OmniStudio</Link>
         <Link to="/mobile-game" onClick={handleLinkClick}>Mobile Game Dev</Link>
        </div>
       </div>
      )}
     </li>

     
     {/* ENGAGEMENT - WRAPPED FOR CONSISTENT STYLING */}
     <li
      className="dropdown-parent"
      onMouseEnter={() => !isMobile && setOpenDropdown("engagement")}
      onMouseLeave={() => !isMobile && setOpenDropdown(null)}
      onClick={() => isMobile && toggleDropdown("engagement")}
     >
      <span className="nav-link">Engagement ▾</span>
      {openDropdown === "engagement" && (
       <div className="dropdown">
        {/* NEW: Wrapper for styling */}
        <div className="dropdown-content-wrapper">
         <Link to="/team-augmentation" onClick={handleLinkClick}>Staff Augmentation</Link>
         <Link to="/dedicated-teams" onClick={handleLinkClick}>Dedicated Teams</Link>
         <Link to="/core-teams" onClick={handleLinkClick}>Core Teams</Link>
        </div>
       </div>
      )}
     </li>

    </ul>

    {/* RIGHT BUTTON */}
    <div className="right-section">
     <Link to="/contact" className="contact-btn">CONTACT US</Link>
    </div>

    {/* MOBILE MENU */}
    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
     <span></span><span></span><span></span>
    </div>

   </div>
  </nav>
 );
}

export default Navbar;
