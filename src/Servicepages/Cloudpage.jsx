import Contact from "../Contact";
import Footer from "../Footer";
import DevOpsExpertise from "../ServicePageComponents/DevopsExpertize";
import DevOpsHeroSection from "../ServicePageComponents/DevopsHero";
import DevOpsHireReasons from "../ServicePageComponents/DevopsHire";
import DevOpsIndustries from "../ServicePageComponents/DevopsIndustries";
import DevOpsWhyChoose from "../ServicePageComponents/DevopsWhyChoose";

function CloudServicePage() {
  return (
    <>
      <DevOpsHeroSection/>
      <DevOpsExpertise/>
      <DevOpsHireReasons/>
      <DevOpsIndustries/>
      <DevOpsWhyChoose/>
      <Contact/>
      <Footer/>
      
      
      
      
    </>
  );
}

export default CloudServicePage;