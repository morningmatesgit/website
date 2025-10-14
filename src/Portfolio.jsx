import { Link } from "react-router-dom";

const portfolioData = [
  {
    title: "Vulnerability Management Solution",
    description: "A cutting-edge web application for financial analytics.",
    technologies: "#React #NodeJS #AWS",
    link: "/vulnerability-management",
  },
  {
    title: "Automated Direct Material Risk Assessmen",
    description: "Intuitive mobile shopping experience for a retail brand.",
    technologies: "#React Native #Firebase",
    link: "/automated-risk",
  },
  {
    title: "AI-Powered Chatbot",
    description: "Automated customer support solution with natural language processing.",
    technologies: "#Python #TensorFlow",
    link: "/ai-chatbot",
  },
  {
    title: "Carbon Capture Technology Solution",
    description: "Seamless transition of legacy systems to a scalable cloud infrastructure.",
    technologies: "#Azure #DevOps",
    link: "/carbon-capture",
  },
  {
    title: "Salesforce Omnistudio Testing for Insurance Company",
    description: "Integrated solution for intelligent home automation and security.",
    technologies: "#EmbeddedC #MQTT",
    link: "/salesforce-omnistudio",
  },
  {
    title: "Mobile Game Development Services for Unity-based Projects",
    description: "Secure and compliant platform for patient data and appointments.",
    technologies: "#Angular #Java #HIPAA",
    link: "/mobile-game",
  },
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-cards">
        {portfolioData.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">{project.technologies}</div>
            {/* Added Link inside card */}
            <Link to={project.link} className="learn-more">
              →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
