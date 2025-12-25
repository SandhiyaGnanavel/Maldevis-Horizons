import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setShowPopup(true);
  };

  return (
    <div className="contact">
      <div className="contact-page">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>Have questions? We’re here to help! Reach out to us anytime.</p>
        </section>
        <section className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" placeholder="Your Name" required />
            </label>

            <label>
              Email
              <input type="email" placeholder="Your Email" required />
            </label>

            <label>
              Message
              <textarea placeholder="Your Message" rows="4" required></textarea>
            </label>

            <button type="submit">Send Message</button>
          </form>
        </section>

        <section className="contact-info">
          <div className="info-card">
            <h2>📧Email</h2>
            <p>support@maldiveshorizons.com</p>
          </div>

          <div className="info-card">
            <h2>📞Phone</h2>
            <p>+123 456 7890</p>
          </div>

          <div className="info-card">
            <h2>📍Address</h2>
            <p>Maldives Horizons, Island City</p>
          </div>
        </section>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>✅ Message Sent!</h2>
            <p>Thank you for contacting us. We’ll get back to you soon.</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
