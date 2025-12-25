import { useState } from "react";
import "./Destination.css";
import ariImg from "../images/Ari Atoll.jpg"
import baaImg from "../images/Baa Atoll.jpg"
import maleImg from "../images/Maldives.jpg";
import adduImg from "../images/Addu.jpg";
import maafuImg from "../images/Maafushi.jpg";
import barosImg from "../images/baros.jpg"
import dhigurahImg from "../images/Dhigurah.jpg"
import haniImg from "../images/Hanifaru Bay.jpg"
import hulhuImg from "../images/Hulhumale Beach.jpg"
import sunImg from "../images/Sun Island.jpg"
import thuluImg from "../images/Thulusdhoo.jpg"
import meeruImg from "../images/meeru.jpg"




const destinations = {
  maldives: [
    { name: "Dhigurah", image: dhigurahImg},
    { name: "Hulhumale", image: hulhuImg },
    { name: "Baa Atoll", image: baaImg },
     { name: "Malé", image:maleImg },
    { name: "Ari Atoll", image: ariImg },
    { name: "Hanifaru Bay", image: haniImg },
    { name: "Addu city", image:adduImg},
    { name: "Maafushi", image: maafuImg },
    { name: "Thulusdhoo", image: thuluImg },
    { name: "Baros Maldives", image:barosImg },
    { name: "Meeru Island", image: meeruImg },
    { name: "Sun Island", image: sunImg },



  ],
};

function Destination() {
  const [selectedDest, setSelectedDest] = useState("maldives");

  return (
    <div className="destination-container">
      <h1>Explore Maldives</h1>
      <p>Discover the most beautiful islands and resorts in Maldives</p>

      <div className="places-grid">
        {destinations[selectedDest].map((place, index) => (
          <div key={index} className="place-card">
            <img src={place.image} alt={place.name} />
            <div className="place-info">
              <h3>{place.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
