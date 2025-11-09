import React, { useState } from "react";

const MobileFaqData = [

  {
    question: `
What is custom mobile development?`,
    answer: `Custom mobile development refers to the process of creating tailored mobile applications designed to meet specific business needs and user requirements. At Timspark, we specialize in developing unique mobile solutions that enhance user experience and drive business growth.`
  },
  {
    question: `Why should I invest in mobile app consulting services?`,
    answer: `Investing in mobile app consulting services ensures that your application is strategically aligned with your business objectives. Our app development consultants at Timspark provide insights on market trends, user behavior, and technology choices to help you make informed decisions that maximize ROI.`
  },
  {
    question: "What platforms do you develop mobile apps for?",
    answer: `We offer mobile app development services for both iOS and Android platforms. Our app development consulting team is skilled in creating native applications as well as cross-platform solutions, ensuring your app reaches the widest audience possible.`
  },
  {
    question: `Can you assist with app maintenance and updates?`,
    answer: `Yes, we offer comprehensive mobile app consulting services that include ongoing maintenance and updates. Our app development consultants ensure your app remains up-to-date with the latest features, security measures, and performance enhancements, providing a seamless user experience.`
  },
  {
    question:`How much does it cost to hire someone to build a mobile app?`,
    answer:`The cost varies based on experience and location. Freelance developers typically charge $25 to $49 per hour, while agencies and outsourcing firms range from $50 to $250+ per hour.`
  },
  {
    question:`What is the best platform for mobile app development?`,
    answer:`For native apps, Xcode is best for iOS and Android Studio for Android. Flutter and React Native allow for cross-platform development, making them efficient for reaching both platforms. For game development, Unity is the top choice.`
  },
  {
    question:`What are custom mobile application development services?`,
    answer:`These services involve building a unique mobile app from the ground up to meet specific business or user needs, rather than relying on pre-built templates or generic solutions. This ensures a tailored experience with customized features.`
  },
  {
    question:`What skills do app developers have?`,
    answer:`App developers are skilled in programming languages (Swift, Kotlin, Java, JavaScript), UI/UX design, cross-platform development, app security, database management, and API integration to ensure seamless functionality.`
  }
];

const MobileFaq = () => {
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
        {MobileFaqData.map((faq, index) => (
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

export default MobileFaq;