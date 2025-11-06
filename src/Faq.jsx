import React, { useState } from "react";


const faqs = [
  {
    question: "Why 'MorningMates'? What stands behind your brand?",
    answer: `MorningMates is driven by a commitment to innovation, quality, and client success. Our brand stands for delivering cutting-edge software solutions tailored to your unique business needs, backed by a team of seasoned engineers and a passion for technology.`
  },
  {
    question: "What is a Core Team, and how is it organized?",
    answer: `Core Teams are one of the engagement models our customers may choose from. A typical Core Team includes 2-5 seasoned professionals, with a Team Leader, a BA, developers, and in most cases, DevOps as crucial team players.

As we work with unique business needs, the Core Teams are often augmented by a larger Project Team. If required, such Resource Departments of developers, QA engineers, DevOps, and other specialists are involved in the project. The ultimate principle remains the same – delivering the best quality possible and addressing your business goals with top-notch solutions.

We use various business and management practices to build teams of highly motivated, galvanized aspiring engineers who do much more than just code and deploy. Moreover, we have arrangements with each Core Team that it builds its own brand and can become an independent company over time while maintaining a connection to Timspark.`
  },
  {
    question: "What makes you different?",
    answer: `Our business model has a traditional outsourcing basis of staff augmentation and dedicated teams. Yet we take a step further and expand it with a bold new vision of so-called Core Teams (teams of 2-5 seasoned specialists that accumulate expertise in the technological verticals and business domains).

We are flexible and offer the engagement model that most adheres to your business needs. Timspark delivers bespoke software development services, as we foster professionals who genuinely care about the value you receive from their work and go the extra mile to make it a reality.

As a result, you receive a remarkably superior quality of work and faster delivery to market at a reasonable price.`
  },
  {
    question: "What types of clients do you work with?",
    answer: `We work with a diverse range of clients, from startups and small businesses to large enterprises, across various industries. Our solutions are scalable and adaptable to meet the specific needs of each client, regardless of their size or sector.`
  },
  {
    question: "How big is your company?",
    answer: `Our pool of engineering talents with deep technical and business expertise is vast and constantly growing. To date, we and our partners provide a network of over 1,000 engineers.`
  },
  {
    question: "What is your preferred development methodology?",
    answer: `We primarily use Agile methodologies, including Scrum and Kanban, to ensure flexibility, transparency, and continuous delivery. This allows us to adapt to evolving requirements and deliver high-quality software efficiently.`
  },
  {
    question: "Where are you based?",
    answer: `With the headquarters registered in the UK, we also have regional offices in locations where engineers and teams are based, including Poland, Georgia, Bulgaria, and more.`
  },
  {
    question: "What's your post-launch policy?",
    answer: `Executing a project is not the point where we stop. Rather than the opposite, it is the point where we go beyond. A long-term relationship with the client is what we aim to establish, including the post-launch period. Whether you request product improvement, scaling, or functionality support, we are ready to provide quality services.`
  }
];

const FAQ = () => {
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
        {faqs.map((faq, index) => (
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

export default FAQ;
