import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Destinations from "./pages/Destination.jsx";
import Planner from "./pages/Planner";
import MyTrips from "./pages/MyTrips";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/mytrips" element={<MyTrips />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}


export default App;
