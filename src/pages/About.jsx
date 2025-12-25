import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Maldevis Horizons</h1>
        <p>Maldives Horizons helps you explore the beauty of the Maldives with easy and smart trip planning.</p>
      </section>

      <section className="about-content">
        <div className="content-card">
          <h2>🎯Our Mission</h2>
         <p>Our mission is to make travel planning simple, affordable, and enjoyable for everyone.We focus on creating stress-free trips with meaningful experiences.</p>
        </div>

        <div className="content-card">
          <h2>⭐ Why Choose Us?</h2>
          <p>
            We offer personalized plans, clear budgets, and the best destinations in the Maldives.Our platform is designed for ease, clarity, and convenience.
          </p>
        </div>

        <div className="content-card">
          <h2>🌅 Our Vision</h2>
          <p>
        Our vision is to become a trusted travel guide for unforgettable Maldives experiences.We aim to inspire travelers to explore the Maldives with confidence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
