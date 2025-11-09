import Contact from "../Contact";
import StaffingHero from "../EngamentComponents/teamHero";
import Footer from "../Footer";
import "../EngagementCss/Team.css";
import StaffingBenefits from "../EngamentComponents/StaffingBenifits";
import StaffTalentHire from "../EngamentComponents/Stafftalent";
import StaffEngagementModels from "../EngamentComponents/StaffEngagement";
import TeamFaq from "../EngamentComponents/TeamFaq";
function TeamPage() {
  return (
    <>
    <StaffingHero/>
  <StaffingBenefits/>
  <StaffTalentHire/>
  <StaffEngagementModels/>
  <TeamFaq/>
    <Contact/>
      <Footer/>
      
      
      
      
    </>
  );
}

export default TeamPage;