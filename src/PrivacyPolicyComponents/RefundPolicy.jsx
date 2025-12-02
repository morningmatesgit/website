import React from "react";
import "../PrivacyPolicyCss/Privacypolicy.css";

const RefundPolicy = () => {
  return (
    <div className="refund-container">
      <h1 className="refund-title">Morningmates Refund Policy</h1>
      <p className="refund-date">Last updated: June 6, 2025</p>

      <p className="refund-text">
        Thank you for choosing Morningmates. We aim to provide high-quality
        services and ensure customer satisfaction. This Refund Policy explains
        the circumstances under which refunds may be issued.
      </p>

      <h2 className="refund-heading">1. Eligibility for Refund</h2>
      <p className="refund-text">
        Refund requests will be considered only if they are made within
        <strong> 10 days </strong> of the original purchase and the service has
        not been fully delivered.
      </p>

      <h2 className="refund-heading">2. Non-Refundable Cases</h2>
      <p className="refund-text">
        Refunds are not applicable in the following cases:
        <br />• Services that have been fully completed
        <br />• Change of mind after service delivery
        <br />• Delays caused by incorrect user information
        <br />• Violation of our Terms & Conditions
      </p>

      <h2 className="refund-heading">3. Refund Request Process</h2>
      <p className="refund-text">
        To request a refund, please email us at:
        <br />
        <strong>Email:</strong> info@morningmates.in
        <br />
        Include your order details, payment reference, and the reason for your
        refund request.
      </p>

      <h2 className="refund-heading">4. Refund Approval</h2>
      <p className="refund-text">
        Once we receive your request, our team will review it within 5–7
        business days. You will be notified about the approval or rejection of
        your refund.
      </p>

      <h2 className="refund-heading">5. Refund Method</h2>
      <p className="refund-text">
        Approved refunds will be credited to the original payment method within
        7–10 working days.
      </p>

      <h2 className="refund-heading">6. Policy Updates</h2>
      <p className="refund-text">
        Morningmates reserves the right to modify this Refund Policy at any time
        without prior notice. Any changes will be updated on this page.
      </p>

      <h2 className="refund-heading">7. Contact Us</h2>
      <p className="refund-text">
        If you have any questions regarding this Refund Policy, feel free to
        contact us:
        <br />
        <strong>Email:</strong> info@morningmates.in
        <br />
        <strong>Website:</strong> http://morningmates.in
      </p>
    </div>
  );
};

export default RefundPolicy;
