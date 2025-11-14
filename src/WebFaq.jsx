import React, { useState } from "react";

const WebFaqData = [

  {
    question: "Why outsourcing website development can be more efficient than in-house web development?",
    answer: `Outsourcing website development can be more effective than managing it internally. Experienced external teams often come equipped with advanced tools and technologies, innovative approaches, and expertise, enabling them to build top-notch solutions in less time. Outsourced web development services also eliminate the need to hire, train, and manage in-house staff, freeing up your resources for core business activities. Additionally, outsourcing offers flexibility to scale resources based on project needs, ensuring you pay only for what you use.`
  },
  {
    question: "How to choose a web app development company?",
    answer: `Evaluating an IT vendor involves a well-organized process where potential providers are reviewed against a clear set of criteria. Factors to take into account are your business goals, operating model, the vendor's technical expertise, communication and collaboration, cultural fit, pricing and contract terms. Considering all the aspects of how the web development company works will save you risks and help ensure a successful partnership that delivers web development services aligned with your expectations.`
  },
  {
    question: "How long does a web development project take to complete from start to finish??",
    answer: `The timeline depends on various factors, such as the development approach. Whether you are harnessing custom or ready-to-use AI solutions, or engaging a professional developer to build the website from scratch, as well as the project's complexity, and the scope of content needed. Custom web app development process typically takes from 2 to 12 months on average and usually takes more time than traditional web development services.`
  },
  {
    question: "How to prepare before partnering for outsourced web development?",
    answer: `
1. Define your business goals and requirements. Clarify your project objectives, budget, and any specific needs like design or branding guidelines to stay aligned with your business vision.

2. Research potential contractors. Review portfolios, client feedback, and case studies to ensure the vendors have the right expertise for your project. Conduct thorough interviews to assess their understanding of your needs, communication style, and ability to meet deadlines.

3. Set communication guidelines. Set clear expectations around communication, milestones, and deliverables to avoid any surprises. Agree on how often and in what format you’ll communicate to keep everything on track.

4. Finalize with contracts and NDAs. Protect your intellectual property and define clear terms for the partnership through legal agreements.`
  }
];

const WebFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container"> 
    <section className="faq-section">
      <h2>
        Questions?
        <br /> The answers are here
      </h2>

      <div className="faq-grid">
        {WebFaqData.map((faq, index) => (
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
    </div>
  );
};

export default WebFaq;