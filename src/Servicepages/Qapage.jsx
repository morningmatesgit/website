import Contact from "../Contact";
import Footer from "../Footer";
import QAFlexibleModels from "../ServicePageComponents/QaFlexbile";
import QAHeroSection from "../ServicePageComponents/QaHero";
import QAProcess from "../ServicePageComponents/QaProcess";
import QAServices from "../ServicePageComponents/Qaservices";
import QATools from "../ServicePageComponents/QaTools";
import WhyChooseQA from "../ServicePageComponents/QaWhyChoosw";
import "../ServicePageCss/Qa.css";


function QaServicePage() {
  return (
    <>
      <QAHeroSection/>
      <QAServices/>
      <QAFlexibleModels/>
      <QAProcess/>
      <QATools/>
      <WhyChooseQA/>
      <Contact/>
      <Footer/>
      
      
      
      
    </>
  );
}

export default QaServicePage;