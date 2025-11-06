import { useRef } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: "📍", title: "Address", detail: "132 ,Location 8 Challaghatta Domlur Bangalore, Karnataka, India, 560071." },
  { icon: "📞", title: "Phone", detail: "+91 98765 43210" },
  { icon: "✉️", title: "Email", detail: "morningmates.in@gmail.com" },
];

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
    const currentTime = new Date().toLocaleString();
    const timeInput = document.createElement("input");
    timeInput.type = "hidden";
    timeInput.name = "time";
    timeInput.value = currentTime;
    form.current.appendChild(timeInput);

    emailjs
      .sendForm(
        "service_bsond0c",     
        "template_w2n97ll",     
        form.current,
        "4lCRxkAkjdtMrZsx-"    
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p className="contact-description">
        Get in touch with us for project discussions, collaborations, or queries.
      </p>

      {/* Contact Info */}
      <div className="contact-info">
        {contactInfo.map((item, index) => (
          <div key={index} className="contact-card">
            <div className="contact-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
