import React, { useState } from "react";

const TeamFaqData = [
  {
    question:`
What is IT staff augmentation?`,
    answer:`IT staff augmentation is an engagement model where you bolster your internal team with extra specialists. The reasons may vary, from a lack of competencies or talents in the local market to a high turnover rate or the need to speed up the time-to-market of the future product. The augmented specialists work as part of your in-house team or independently for a limited, short, or extended period of time. These could be an augmented team or standalone engineers.`
  },
  {
    question:`How does the staff augmentation model differ from others?`,
    answer:`Staff augmentation is a type of outsourcing model. You might consider it if you need precise expertise and skills, but do not require a specialist on a long-term basis. For instance, you want to develop a module or feature for your software product, not the whole product itself.`
  },
  {
    question:`What are the stages of software development staff augmentation?`,
    answer:`The whole process of technical staff augmentation usually has four main stages: discovering business needs and requirements, interviewing and recruiting augmented staff, starting work, consulting, and providing support. However, this process may be more or less customized according to your needs and the provider’s capacity.`
  },
  {
    question:`What possible risks may arise when you turn to staff augmentation services?`,
    answer:`Potential risks when opting for staff augmentation services include:
- mismatched skillsets when the skills of augmented specialists can misalign with your project requirements
- communication challenges due to geographical and cultural differences, which may affect performance on the project
- data security concerns caused by sharing sensitive information with external teams
- integration challenges when augmented staff may not work seamlessly with your in-house team and processes`
  },
  {
    question:`How to avoid risks with implementation of augmentation services?`,
    answer:`To mitigate risks when choosing staff augmentation services, it's crucial to thoroughly vet the augmentation provider. Look for a company with a proven track record of successfully implemented projects and verified expertise. At the discovery phase, discuss your expectations, project scope, and requirements, and then clearly define them in the contract.`
  },
  {
    question:`How is it possible to evaluate the performance of the augmented staff?`,
    answer:`As with any other project, it is vital to establish KPIs for the team. Among them may be code quality, project milestones achieved, adherence to timelines, and others. Time tracking and project management tools will be helpful for smoothly integrating remote specialists with the in-house team. Overall, transparent communication, regular performance reviews, and clear reporting processes make the evaluation process not a burden but an effective mechanism to make your project successful.`
  }
  
  
  
];

const TeamFaq = () => {
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
        {TeamFaqData.map((faq, index) => (
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

export default TeamFaq;