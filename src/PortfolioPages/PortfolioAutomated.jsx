import Contact from "../Contact";
import "../Portfoliocss/Automated.css";

import Footer from "../Footer";
import PortfolioVulnerability from "../PortfolioComponents/portfoliovunerability";
import Vulnerability from "../PortfolioComponents/Vunernability";
import VulnerabilityResults from "../PortfolioComponents/VunerabilityResults";
import AutomatedVulnerability from "../PortfolioComponents/Automated";
import AutomatedRisk from "../PortfolioComponents/Automated";
import AutomatedRiskSolution from "../PortfolioComponents/AutomatedTech";
import AutomatedResults from "../PortfolioComponents/AutomatedResults";
import AutomatedTechStack from "../PortfolioComponents/AutomatedTech";
import AutomatedRiskResults from "../PortfolioComponents/AutomatedRiskResults";





function PortfolioAutomatedPage() {
  return (
    <>
   <AutomatedVulnerability/>
  <AutomatedRiskSolution/>
 <AutomatedRiskResults/>
 
    <Contact/>
      <Footer/>
      
      
      
      
    </>
  );
}

export default PortfolioAutomatedPage;