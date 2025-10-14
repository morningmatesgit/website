import Contact from "../Contact";
import "../Portfoliocss/Salesforce.css";

import Footer from "../Footer";
import SalesforceTesting from "../PortfolioComponents/SalesforceTesting";
import SalesforceChallenge from "../PortfolioComponents/SalesforceChallenge";
import SalesforceResults from "../PortfolioComponents/SalesforceResults";






function PortfolioSalesforcePage() {
  return (
    <>
   <SalesforceTesting/>
   <SalesforceChallenge/>
   <SalesforceResults/>
    <Contact/>
      <Footer/>
      
      
      
      
    </>
  );
}

export default PortfolioSalesforcePage;