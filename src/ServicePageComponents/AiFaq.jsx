import React, { useState } from "react";

const AiFaqData = [

  {
    question:`
What AI development services does MorningMates offer?`,
    answer:`MorningMates provides comprehensive AI development services, including AI software consulting, end-to-end AI-powered software solutions, integrating AI into existing systems, and designing and training custom machine learning (ML) models. These services cater to industries such as healthcare, fintech, retail, automotive, and media, delivering cutting-edge AI software solutions.`
  },
  {
    question:`How does MorningMates ensure the quality of AI solutions?`,
    answer:`MorningMates ensures the quality of its AI development services through a rigorous process led by expert data scientists. They leverage advanced ML model training, thorough testing, and scalable architectures to achieve high accuracy (e.g., 95%+ for specific AI models). Their focus on regulatory compliance, client collaboration, and innovation guarantees top-tier AI software solutions.`
  },
  {
    question:`Which industries can benefit from MorningMates’s AI development services?`,
    answer:`MorningMates’s AI development services benefit a wide range of industries, including healthcare (e.g., diagnostics, patient care), fintech and banking (e.g., fraud detection, risk management), retail and e-commerce (e.g., personalization, inventory optimization), automotive (e.g., autonomous driving, vehicle diagnostics), and media and entertainment (e.g., content recommendation, audience engagement).`
  },
  {
    question:`How long does it take to develop an AI solution with MorningMates?`,
    answer:`The timeline for MorningMates’s AI development services depends on the project’s complexity, scope (e.g., proof of concept, minimum viable product [MVP], or full-scale AI software solution), and specific client requirements. Timspark conducts an initial feasibility study to provide accurate estimates, ensuring efficient and tailored AI development services.`
  },
  {
    question:`How does MorningMates handle data privacy and security in AI development?`,
    answer:`MorningMates prioritizes data privacy and security in its AI development services by adhering to global standards like GDPR and HIPAA. They implement secure infrastructure, advanced encryption, and strict compliance measures to protect client data, making their AI software solutions reliable and trustworthy.`
  },
   {
    question:`Can MorningMates integrate AI into my existing software?`,
    answer:`Yes, MorningMates offers specialized AI development services to analyze your existing software and IT infrastructure, then integrate AI functionality cost-efficiently and securely. Their expertise ensures seamless AI integration, enhancing your systems with machine learning capabilities for optimal AI software solutions.`
  },
   {
    question:`What is the cost of AI development services with MorningMates?`,
    answer:`The cost of MorningMates’s AI development services varies based on project scope, complexity, and the resources required (e.g., custom ML models, industry-specific AI solutions). Timspark provides personalized quotes after assessing your needs and can start with cost-effective options like proofs of concept or MVPs, delivering affordable AI software solutions.`
  }
];

const AiFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>
        Questions?
        <br /> The answers are here
      </h2>

      <div className="faq-grid">
        {AiFaqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <span>{activeIndex === index ? "-" : "+"}</span> {faq.question}
            </div>

            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "500px" : "0"
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AiFaq;