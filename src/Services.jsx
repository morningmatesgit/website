import { Link } from "react-router-dom"

const servicesData = [
  {
    title: "Custom Software",
    description: "We create custom software tailored to your business logic and goals.",
    link: "/custom-software" 
  },
  {
    title: "Web Development",
    description: "Build modern, scalable web platforms using the latest technologies.",
    link:"/web-software"
  },
  {
    title: "Mobile App",
    description: "Native and cross-platform apps with intuitive UI/UX and great performance.",
    link:"/Mobile-software"
  },
  {
    title: "AI Software",
    description: "Integrate intelligent features using machine learning and deep learning.",
    link:"/Ai-software"
  },
  {
    title: "Data Analysis",
    description: "Turn raw data into business insights through powerful data pipelines.",
    link:"Data-software"
  },
  {
    title: "Cloud Systems",
    description: "Build and scale with AWS, Azure, or GCP-based cloud infrastructure.",
    link:"/cloud-software"
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with full-spectrum security solutions.",
    link:"/Cyber-software"
  },
  {
    title: "QA & Testing",
    description: "Manual and automated testing to ensure software quality and reliability.",
     link:"/Qa-software"
  }
]

function Services() {
  return (
    <section className="services">
      <h2>Software Development Services</h2>
      <div className="cards">
        {servicesData.map((service, index) => (
          <div className="card" key={service.title}>
            {service.link ? (
              <Link to={service.link} style={{ textDecoration: "none", color: "inherit" }}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ) : (
              <>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
