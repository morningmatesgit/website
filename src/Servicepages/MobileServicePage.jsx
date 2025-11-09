import Contact from "../Contact";
import Footer from "../Footer";
import MobileExperience from "../ServicePageComponents/MobileExperience";
import MobileFaq from "../ServicePageComponents/MobileFaq";
import MobileHeroSection from "../ServicePageComponents/MobileHero";
import MobileServices from "../ServicePageComponents/MobileService";
import MobileStack from "../ServicePageComponents/MobileStack";
import MobileWhyChooseUs from "../ServicePageComponents/MobileWhyChooseUs";
import "../ServicePageCss/Mobile.css";

function MobileServicePage() {
  return (
    <>
      <MobileHeroSection/>
      <MobileExperience/>
      <MobileServices/>
      <MobileStack/>
      <MobileWhyChooseUs />
      <MobileFaq/>
      <Contact/>
      <Footer/>
      
      
      
    </>
  );
}

export default MobileServicePage;
