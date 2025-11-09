import React, { useState } from "react";

const CloudFaqData = [
  {
    question:`What is DevOps, and how can it benefit my organization?`,
    answer:`DevOps is a set of practices and cultural philosophies that unify software development (Dev) and IT operations (Ops), aiming to shorten the software development lifecycle and deliver high-quality software continuously. By implementing DevOps practices, your organization can achieve faster releases, improved collaboration between development and operations teams, better scalability, enhanced security, and more reliable systems.`
  },
  {
    question:`What DevOps tools do you recommend for my team?`,
    answer:`The choice of tools depends on your specific needs, but commonly used tools include:
Version Control: Git, GitHub, GitLab
CI/CD: Jenkins, CircleCI, GitLab CI
Configuration Management: Ansible, Chef, Puppet
Containerization: Docker, Kubernetes
Monitoring and Logging: Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana)
Infrastructure as Code (IaC): Terraform, CloudFormation A DevOps consultant will help identify the best tools based on your team’s workflows, existing infrastructure, and business requirements.`
  },
  {
    question:`What are the key phases involved in a DevOps transformation?`,
    answer:`
A typical DevOps transformation follows several key phases:
Assessment: Evaluating your current workflows, processes, and tools.
Planning: Defining goals, strategy, and the roadmap for the transformation.
Implementation: Introducing DevOps practices such as CI/CD pipelines, automation, and collaboration tools.
Optimization: Fine-tuning processes for continuous improvement and scaling.
Ongoing Support: Providing continuous monitoring and maintenance to ensure efficiency.`
  },
  {
    question:`How can DevOps consulting help improve my existing processes?`,
    answer:`DevOps consulting helps optimize your software development and operations workflows by automating repetitive tasks, reducing manual intervention, and ensuring better collaboration across teams. Consultants work to implement CI/CD pipelines, automated testing, infrastructure as code, and monitoring practices, which lead to faster, more reliable releases, reduced downtime, and better system performance.`
  },
  {
    question:`How long does it take to implement DevOps in an organization?`,
    answer:`The time to implement DevOps varies based on factors like the complexity of your existing systems, the size of your team, and the scope of the transformation. Generally, fully integrating DevOps practices can take anywhere from a few months to over a year. However, initial improvements, such as automating a few processes or setting up basic CI/CD pipelines, can happen within a few weeks to months, with ongoing improvements being made over time.`
  }
  
  
  
];

const CloudFaq = () => {
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
        {CloudFaqData.map((faq, index) => (
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

export default CloudFaq;