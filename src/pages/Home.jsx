import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="home">
      <div className="hero-content">
        <h1>Explore the Maldives Like Never Before</h1>
        <p>Discover pristine beaches, turquoise waters, and unforgettable adventures. Plan your dream trip effortlessly with Maldevis Horizons.</p>
        <div className="hero-buttons">
          <Link to="/planner" className="btn">Plan Your Trip</Link>
          </div>
      </div>
    </section>
  );
};

export default Home;
