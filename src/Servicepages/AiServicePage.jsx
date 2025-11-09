import Contact from "../Contact";
import Footer from "../Footer";
import AiWebIndustryExperts from "../ServicePageComponents/AichooseUs";
import AiEthicalAi from "../ServicePageComponents/AiEthical";
import AiFaq from "../ServicePageComponents/AiFaq";
import AiHeroSection from "../ServicePageComponents/AiHero";
import AiSolutions from "../ServicePageComponents/AiSolution";
import AiTechnologies from "../ServicePageComponents/AiTechnologies";
import "../ServicePageCss/Ai.css";
function AiServicePage() {
  return (
    <>
      <AiHeroSection/>
      <AiSolutions/>
      <AiEthicalAi></AiEthicalAi>
      <AiTechnologies/>
      <AiFaq/>
      <Contact/>
      <Footer/>
      
      
      
    </>
  );
}

export default AiServicePage;