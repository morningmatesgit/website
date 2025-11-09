import React, { useState } from "react";

const DedicatedFaqData = [
  {
    question:`
What is a dedicated software development team?`,
    answer:`A dedicated team is a cohesive group of experts assigned to work on a specific project for an extended period. They are typically committed to ongoing collaboration and take ownership of the entire development lifecycle`
  },
  {
    question:`What possible challenges may arise with a dedicated team?`,
    answer:`May not be suitable for small projects with a fixed scope
Communication and cultural barriers
Dependency on the team performance and skills, as they own the entire development cycle
Lack of adaptability to your project requirements or technology stack

Yet, if your vendor is well-experienced in nurturing and onboarding of dedicated teams, these challenges can be easily worked out or rather not even arise. Timspark selects and nurtures professional teams so that they can integrate seamlessly and start performing from day one.`
  },
  {
    question:`
How to manage a dedicated software development team?`,
    answer:`To optimize your remote development team's efficiency, you need a project management strategy.

Promote clear communication, define roles, and set clear achievable goals
Use agile methods for adaptability, provide tools, and encourage innovation.
Cultivate a positive culture through team-building, monitor performance, and give detailed feedback.
Involve dedicated specialists in the planning and execution of the project and give them ownership and accountability for their tasks.
Timspark teams are highly professional and adaptable, yet we will assist you with onboarding so that your dedicated software developers can integrate with your in-house processes as fast as possible.`
  },
  {
    question:`How to choose a dedicated development team?`,
    answer:` 1. Clearly define your project, vision, and expectations.
Specify the project's scope quality standards and testing procedures. As dedicated software developers are not your in-house team, they still have no knowledge of your processes or company culture. If you are going to develop a product, such as a web or mobile application, define the user requirements as well.

2. Research the market and choose a vendor.
Look for a company with a proven track record of successfully implemented projects and verified expertise. At the discovery phase, discuss your expectations, project scope, and requirements, and then clearly define them in the contract.

3. Hire a dedicated team.
After choosing the vendor and signing a contract, assembling and hiring the development team begins. Team composition varies from project to project. The vendor will assist you in hiring and sourcing talent from their internal pool of specialists. As the business owner, it's critical to be as engaged as possible at this stage. It's worth considering that everyone agrees on which tools the team and you, as the product owner, will be using for reporting and tracking. However, the professional development teams, like those at Timspark, can work with your existing tools and development methodology and seamlessly integrate into your established internal process.`
  },
  
  
];

const DedicatedFaq = () => {
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
        {DedicatedFaqData.map((faq, index) => (
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

export default DedicatedFaq;