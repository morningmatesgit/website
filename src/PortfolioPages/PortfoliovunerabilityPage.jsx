import Contact from "../Contact";
import "../Portfoliocss/vuner.css";

import Footer from "../Footer";
import PortfolioVulnerability from "../PortfolioComponents/portfoliovunerability";
import Vulnerability from "../PortfolioComponents/Vunernability";
import VulnerabilityResults from "../PortfolioComponents/VunerabilityResults";




function PortfolioVunerPage() {
  return (
    <>
   <PortfolioVulnerability/>
   <Vulnerability/>
   <VulnerabilityResults/>
    <Contact/>
      <Footer/>
      
      
      
      
    </>
  );
}

export default PortfolioVunerPage;