import React, { useState } from "react";

const customSoftwareFaqData = [
  {
    question: "What is custom software development?",
    answer: `It involves designing, developing, and implementing software from scratch or by modifying existing systems. This approach allows businesses to address unique challenges, optimize processes, and achieve their objectives more effectively than off-the-shelf solutions. Custom software is highly customizable, scalable, and aligned closely with organizational requirements, providing a competitive advantage in today's dynamic market.`
  },
  {
    question: "How do you ensure the security of software solutions?",
    answer: `Software solution security requires a multi-layered implementation strategy. Organizations should perform periodic security audits together with establishing strong authentication and authorization systems while ensuring sensitive data encryption during transit and storage and maintaining secure coding practices and current software dependencies together with deploying intrusion detection and prevention systems.
Regular employee security training and maintaining compliance with industry standards and regulations form essential parts of an effective security strategy.

As we work with unique business needs, the Core Teams are often augmented by a larger Project Team. If required, such Resource Departments of developers, QA engineers, DevOps, and other specialists are involved in the project. The ultimate principle remains the same – delivering the best quality possible and addressing your business goals with top-notch solutions.`
  },
  {
    question: 
"Why should I choose software custom development over off-the-shelf solutions?",
    answer: `Custom development requires organizations to create software from scratch or adapt existing systems to meet specific workflow and business needs unlike ready-made software solutions. Companies gain complete authority over their software features, functionality, and scalability which results in more effective and efficient solutions.

We deliver bespoke software development services, ensuring professionals genuinely care about value and go the extra mile. Result: superior quality + faster delivery + reasonable pricing.`
  },
  {
    question: "What is the scalability of custom software solutions?",
    answer: `Customized software normally expands together with your company growth. This is one of the main advantages of opting for tailored solutions: Developers design custom software that aligns with your business objectives since it is tailored to meet your specific requirements.
Custom solutions adapt to your business needs while allowing for expansion as your company grows.`
  },
  {
    question: "What are the benefits of developing custom software?",
    answer: `Developing custom software brings several advantages such as personalization capabilities and enhanced efficiency together with scalability. The design and creation of systems by custom software developers takes your existing infrastructure and systems into account to ensure seamless integration with your existing software. The outcome of this process results in enhanced productivity and reliability.`
  },
  {
    question: "Is custom software development suitable for small businesses?",
    answer: `Custom software development presents a viable option for small business operations. Business-specific needs drive the creation of tailored solutions whereas off-the-shelf software provides broad capabilities for many users. Custom solutions provide small businesses with the ability to expand their systems alongside business growth.
Although initial expenses are greater with custom software than standard software packages, its long-term cost-effectiveness emerges from eliminating ongoing subscription fees and licensing expenses.`
  },
  {
    question: "How long does it take to develop custom software?",
    answer: `The duration for custom software development changes according to the project scope, requirements and complexity levels in addition to the software company's capabilities and development methodology. The development time for custom software projects ranges between several months and multiple years depending on various factors.`
  },
  {
    question: "Can custom software be integrated with existing systems?",
    answer: `Custom software offers integration capabilities with current systems. The key benefit of developing custom software lies in its seamless integration capabilities with current software systems and digital solutions. Software providers have the ability to create products which will operate efficiently alongside your existing systems.`
  }
];

const CustomSoftwareFaq = () => {
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
        {customSoftwareFaqData.map((faq, index) => (
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

export default CustomSoftwareFaq;
