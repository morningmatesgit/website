import React from "react";

import "../PrivacyPolicyCss/Privacypolicy.css";


const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Morningmates Privacy and Cookie Policy</h1>
      <p className="privacy-date">Last updated: June 6, 2025</p>

      <p className="privacy-text">
        At Morningmates, the privacy of our visitors is a top priority. This
        Privacy and Cookie Policy document outlines the types of information we
        collect, how we use it, and how we protect it. In this policy,
        “Morningmates” refers to the company, its owners, directors, and
        employees. This policy applies to our website{" "}
        <a href="http://morningmates.in" target="_blank" rel="noreferrer">
          http://morningmates.in
        </a>
        .
      </p>

      <h2 className="privacy-heading">Website Visitors</h2>
      <p className="privacy-text">
        Morningmates follows a standard procedure for collecting, processing,
        and storing personal data in accordance with applicable laws.
      </p>

      <h2 className="privacy-heading">
        Non-personally Identifiable Information and Log Data
      </h2>
      <p className="privacy-text">
        This includes data such as IP addresses, browser types, device
        categories, domain names, language preferences, location, referral
        paths, exit pages, date and time, number of entrances, and average time
        spent on the website. We use this data to analyze trends, administer the
        website, track user behavior, and gather demographic information.
      </p>

      <h2 className="privacy-heading">Personal Data</h2>
      <p className="privacy-text">
        Morningmates does not collect personally identifiable information (PII)
        such as your name, email address, or phone number unless you voluntarily
        submit it through forms such as contact or inquiry forms. When you
        submit such information, we use it only to respond to your request and
        may also send informational or promotional emails. You can opt out at
        any time.
      </p>

      <h2 className="privacy-heading">Cookies</h2>
      <p className="privacy-text">
        Morningmates uses cookies to store information about visitors’
        preferences and optimize the website experience by customizing our web
        page content based on visitors’ browser type or other information.
      </p>

      <h2 className="privacy-heading">Third-Party Services</h2>
      <p className="privacy-text">
        We may use third-party analytics tools such as Google Analytics to help
        us understand how users interact with our website and to improve our
        services.
      </p>

      <h2 className="privacy-heading">Data Security</h2>
      <p className="privacy-text">
        We implement reasonable security measures to protect your personal
        information. However, no method of transmission over the Internet is
        completely secure.
      </p>

      <h2 className="privacy-heading">Children’s Information</h2>
      <p className="privacy-text">
        Morningmates does not knowingly collect any Personal Identifiable
        Information from children under the age of 18. If you believe that your
        child has provided this kind of information on our website, please
        contact us immediately.
      </p>

      <h2 className="privacy-heading">Consent</h2>
      <p className="privacy-text">
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>

      <h2 className="privacy-heading">Contact Us</h2>
      <p className="privacy-text">
        If you have any questions about this Privacy Policy, you can contact us
        at:
        <br />
        <strong>Email:</strong> info@morningmates.in
        <br />
        <strong>Website:</strong>{" "}
        <a href="http://morningmates.in" target="_blank" rel="noreferrer">
          http://morningmates.in
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
