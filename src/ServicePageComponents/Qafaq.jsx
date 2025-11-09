 import React, { useState } from "react";

const QaFaqData = [
  {
    question:`What tools and frameworks do you use for software testing and QA?`,
    answer:`At MorningMates, we leverage a variety of tools and frameworks to ensure efficient test automation and thorough quality testing. Our tech stack includes Selenium, Appium, Cypress, JIRA, and TestRail, among others. For outsourced QA testing, we ensure seamless integration with your processes, using industry-leading frameworks to maintain high standards and deliver reliable results.`
  },
  {
    question:`What are the deliverables of QA?`,
    answer:`The key deliverables that ensure a well-structured QA process include:
Test plan: A comprehensive document that outlines the testing scope, objectives, schedule, and required resources.
Testing strategy: A high-level approach defining the testing framework, tools, and methods to ensure thorough coverage.
Test cases: Detailed scenarios with steps to validate that every feature performs as intended.
QA report: A summary of testing outcomes, highlighting issues found, their status, and recommendations for resolution and improvement.
At Timspark, we provide all these deliverables to ensure a seamless and efficient QA process.`
  },
  {
    question:`Is independent testing better than in-house testing?`,
    answer:`First of all, QA outsourcing services offer fresh perspectives, specialized expertise, and access to advanced tools often unavailable in-house. External teams stay focused on quality, delivering more objective results. Additionally, outsourcing enables efficient scaling and cost reduction, making it a smart move for many businesses.`
  },
  {
    question:`What are the must-have QA practices for any project?`,
    answer:`A dedicated testing team to ensure thorough quality checks;
Every build must be tested to catch issues early and maintain product stability;
A strong focus on security and compliance with required standards—such as GDPR or HIPAA—is essential.
By leveraging outsourcing software testing, you can access expert teams who specialize in these critical areas, ensuring top-quality results throughout the project.`
  },
  {
    question:`What is your approach to involving the QA team in an ongoing project?`,
    answer:`Our software testers begin by thoroughly examining your project’s scope, goals, and current status. We then sync seamlessly with your development team, open clear communication channels, and create a smooth, collaborative workflow.
With outsourcing software testing, we quickly align with your processes, provide continuous feedback, and make sure every build is tested to perfection.`
  }
  
  
];

const QaFaq = () => {
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
        {QaFaqData.map((faq, index) => (
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

export default QaFaq;