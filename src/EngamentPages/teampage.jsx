import Contact from "../Contact";
import StaffingHero from "../EngamentComponents/teamHero";
import Footer from "../Footer";
import "../EngagementCss/Team.css";
import StaffingBenefits from "../EngamentComponents/StaffingBenifits";
import StaffTalentHire from "../EngamentComponents/Stafftalent";
import StaffEngagementModels from "../EngamentComponents/StaffEngagement";
function TeamPage() {
  return (
    <>
    <StaffingHero/>
  <StaffingBenefits/>
  <StaffTalentHire/>
  <StaffEngagementModels/>
    <Contact/>
      <Footer/>
      
      
      
      
    </>
  );
}

export default TeamPage;