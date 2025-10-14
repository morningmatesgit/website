import Contact from "../Contact";
import Footer from "../Footer";
import DataAppliedObservability from "../ServicePageComponents/Dataapply";
import DataHeroSection from "../ServicePageComponents/DataHeroSection";
import DataObservabilityBenefits from "../ServicePageComponents/DataObservasibility";
import DataServices from "../ServicePageComponents/DataService";

function DataServicePage() {
  return (
    <>
      <DataHeroSection/>
      <DataServices/>
      <DataAppliedObservability/>
      <DataObservabilityBenefits/>
      <Contact/>
      <Footer/>
      
      
      
      
    </>
  );
}

export default DataServicePage;