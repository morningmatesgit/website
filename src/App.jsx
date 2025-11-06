import { Routes, Route } from "react-router-dom"
import Services from "./Services"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import EngagementModels from "./Engagement"
import Navbar from "./Navbar"
import Contact from "./Contact"
import Footer from "./Footer"
import Industries from "./Industries"
import Insights from "./Insights"
import FAQ from "./Faq"
import CustomSoftwarePage from "./CustomSoftwarePage"
import WebHero from "./Servicepages/WebHero"
import WebCustomSoftwareServices from "./Servicepages/WebCustomSoftwareServices"
import IndustryExpertise from "./Servicepages/webIndustryExpertise"
import WebServices from "./Servicepages/WebServices"
import WebDevProcess from "./Servicepages/WebDevProcess"
 import MobileServicePage from "./Servicepages/MobileServicePage"
import AiServicePage from "./Servicepages/AiServicePage"
import DataServicePage from "./Servicepages/DataAnalysisPage"
import CloudServicePage from "./Servicepages/Cloudpage"
import CyberServicePage from "./Servicepages/Cyberpage"
import QaServicePage from "./Servicepages/Qapage"
import ScrollToTop from "./ScrollTop"
import TeamPage from "./EngamentPages/teampage"
import DedicatedTeamPage from "./EngamentPages/DedicatedTeamPage"
import CoreTeamPage from "./EngamentPages/CoreteamPage"
import PortfolioVunerPage from "./PortfolioPages/PortfoliovunerabilityPage"
import PortfolioAutomatedPage from "./PortfolioPages/PortfolioAutomated"
import PortfolioAiPage from "./PortfolioPages/PortfolioAi"
import PortfolioCarbonPage from "./PortfolioPages/PortfolioCarbon"
import PortfolioSalesforcePage from "./PortfolioPages/PortfolioSalesforce"
import PortfolioMobileGamePage from "./PortfolioPages/PortfolioMobileGame"

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>

      <Routes>
        {/* Main Homepage */}
        <Route
          path="/"
          element={
            <>
              <section id="hero"><Hero /></section>
              <section id="services"><Services /></section>
              <section id="portfolio"><Portfolio /></section>
              <section id="engagement"><EngagementModels /></section>
              <section id="industries"><Industries /></section>
              <section id="insights"><Insights /></section>
              <section id="faq"><FAQ /></section>
              <section id="contact"><Contact /></section>
              <Footer />
            </>
          }
        />

        {/* Service Pages */}
        <Route 
          path="/custom-software" 
          element={
            <>
              <CustomSoftwarePage />
            </>
          } 
        />

        <Route 
          path="/web-software" 
          element={
            <>
              <WebHero />
              <WebCustomSoftwareServices />
              <IndustryExpertise />
              <WebServices />
              <WebDevProcess />
              <Contact />
              <Footer />
            </>
          } 
        />


<Route 
          path="/services" 
          element={
            <>
             
              <Services/>
              
            </>
          } 
        />
<Route 
          path="/portfolio" 
          element={
            <>
             
              <Portfolio/>
              
            </>
          } 
        />

<Route 
          path="/EngagementModels" 
          element={
            <>
             
              <EngagementModels/>
              
            </>
          } 
        />


        <Route 
          path="/mobile-software" 
          element={
            <>
             
              <MobileServicePage/>
              
            </>
          } 
        />
                <Route 
          path="/Ai-software" 
          element={
            <>
             
              <AiServicePage/>
              
            </>
          } 
        />
         <Route 
          path="/Data-software" 
          element={
            <>
             
             <DataServicePage/>
              
            </>
          } 
        />
        <Route 
          path="/cloud-software" 
          element={
            <>
             
             <CloudServicePage/>
              
            </>
          } 
        />
        <Route 
          path="/Cyber-software" 
          element={
            <>
             
             <CyberServicePage/>
              
            </>
          } 
        />
        <Route 
          path="/Qa-software" 
          element={
            <>
             
             <QaServicePage/>
              
            </>
          } 
        />
         <Route 
          path="/team-augmentation" 
          element={
            <>
             
            <TeamPage/>
              
            </>
          } 
        />
        <Route 
          path="/dedicated-teams" 
          element={
            <>
             
           <DedicatedTeamPage/>
              
            </>
          } 
        />
        <Route 
          path="/core-teams" 
          element={
            <>
             
          <CoreTeamPage/>
              
            </>
          } 
        />
        <Route 
          path="/vulnerability-management" 
          element={
            <>
             
          <PortfolioVunerPage/>
              
            </>
          } 
        />
         <Route 
          path="/automated-risk" 
          element={
            <>
             
         <PortfolioAutomatedPage/>
              
            </>
          } 
        />
         <Route 
          path="/ai-chatbot" 
          element={
            <>
             
        <PortfolioAiPage/>
              
            </>
          } 
        />
         <Route 
          path="/carbon-capture" 
          element={
            <>
             
        <PortfolioCarbonPage/>
              
            </>
          } 
        />
         <Route 
          path="/salesforce-omnistudio" 
          element={
            <>
             
        <PortfolioSalesforcePage/>
              
            </>
          } 
        />
         <Route 
          path="/mobile-game" 
          element={
            <>
             
        <PortfolioMobileGamePage/>
              
            </>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <>
             
        <Contact/>
        <Footer/>
              
            </>
          } 
        />

{/* Footer Routes */}

        <Route 
          path="/software-development" 
          element={
            <>
             <CustomSoftwarePage />
            </>
          } 
        />

        <Route 
          path="/mobile-app-development" 
          element={
            <>
            <MobileServicePage/>
            </>
          } 
        />

         <Route 
          path="/web-development" 
          element={
            <>
            <WebHero />
              <WebCustomSoftwareServices />
              <IndustryExpertise />
              <WebServices />
              <WebDevProcess />
              <Contact />
              <Footer />
            </>
          } 
        />

         <Route 
          path="/qa-testing" 
          element={
            <>
            <QaServicePage/>
            </>
          } 
        />

          <Route 
          path="/cyber-services" 
          element={
            <>
            <CyberServicePage/>
            </>
          } 
        />

         <Route 
          path="/cloud-consulting" 
          element={
            <>
            <CloudServicePage/>
            </>
          } 
        />

        <Route 
          path="/ai-software-development" 
          element={
            <>
            <AiServicePage/>
            </>
          } 
        />

        <Route 
          path="/data-management" 
          element={
            <>
           <DataServicePage/>
            </>
          } 
        />

        <Route 
          path="/staff-augmentation" 
          element={
            <>
           <TeamPage/>
            </>
          } 
        />

        <Route 
          path="/dedicated-teams" 
          element={
            <>
           <DedicatedTeamPage/>
            </>
          } 
        />

        <Route 
          path="/core-teams" 
          element={
            <>
           <CoreTeamPage/>
            </>
          } 
        />




      </Routes>
      

      
    </>
  )
}

export default App
