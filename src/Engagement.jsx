import { Link } from "react-router-dom";


const engagementData = [
  {
    icon: "⭐",
    title: "Team Augmentation",
    description: "Skilled engineers to enhance your in-house team",
    link: "/team-augmentation"
  },
  {
    icon: "⚙️",
    title: "Dedicated Teams",
    description: "Development units built specifically for your project",
    link: "/dedicated-teams"
  },
  {
    icon: "📦",
    title: "Core Teams",
    description: "Pre-built development teams with deep expertise",
    link: "/core-teams"
  },
];


function EngagementModels() {
  return (
    <section className="engagement-models">
      <h2>Engagement Models</h2>
      <p className="engagement-description">
        We are flexible. At Timspark, we offer different engagement models, 
        from full-fledged teams to staff augmentation, 
        to help you achieve your current business needs.
      </p>

      <div className="engagement-cards">
        {engagementData.map((model, index) => (
          <div className="engagement-card" key={index}>
            <div className="engagement-icon">{model.icon}</div>
            <h3>{model.title}</h3>
            <p>{model.description}</p>
            {/* Added link inside card */}
            <Link to={model.link} className="learn-more-btn">
              Learn More →
            </Link>

          </div>
        ))}
      </div>

      <div className="engagement-cta">
        <button className="cta-btn">LEARN HOW WE WORK</button>
      </div>
    </section>
  );
}

export default EngagementModels;
