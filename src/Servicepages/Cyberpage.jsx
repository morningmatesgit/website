import Contact from "../Contact";
import Footer from "../Footer";
import CyberComplianceAssessment from "../ServicePageComponents/CyberCompliance";
import CybersecurityHeroSection from "../ServicePageComponents/CyberHero";
import CybersecurityIndustrySolutions from "../ServicePageComponents/CyberIndustries";
import CyberITSecurityComponents from "../ServicePageComponents/CyberIt";
import CyberSecurityAssessmentGrid from "../ServicePageComponents/Cybersecurity";
import CybersecurityServices from "../ServicePageComponents/CyberServices";

function CyberServicePage() {
  return (
    <>
      <CybersecurityHeroSection/>
      <CybersecurityServices/>
      <CyberSecurityAssessmentGrid/>
      <CyberComplianceAssessment/>
      <CyberITSecurityComponents/>
      <CybersecurityIndustrySolutions/>
      <Contact/>
      <Footer/>
      
      
      
      
    </>
  );
}

export default CyberServicePage;