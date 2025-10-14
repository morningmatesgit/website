import Contact from "../Contact";
import "../Portfoliocss/AiPowered.css";

import Footer from "../Footer";
import PointCloudSegmentation from "../PortfolioComponents/Pcs";
import PcsTechStack from "../PortfolioComponents/PcsTechstack";
import PcsResultsBusinessValue from "../PortfolioComponents/PcsResult";





function PortfolioAiPage() {
  return (
    <>
   <PointCloudSegmentation/>
   <PcsTechStack/>
   <PcsResultsBusinessValue/>
    <Contact/>
      <Footer/>
      
      
      
      
    </>
  );
}

export default PortfolioAiPage;