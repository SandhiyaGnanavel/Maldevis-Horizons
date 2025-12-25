import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Planner.css";

const packages = [
  { name: "Basic", price: 1000 },
  { name: "Standard", price: 2000 },
  { name: "Premium", price: 3000 },
];

const transports = [
  { name: "Bus", price: 200 },
  { name: "Car", price: 500 },
];

const games = [
  { name: "Snorkeling", price: 300 },
  { name: "Diving", price: 500 },
  { name: "Jet Ski", price: 400 },
  { name: "Fishing", price: 200 },
];

const maldivesPlaces = [
  { name: "Malé", price: 500 },
  { name: "Maafushi", price: 700 },
  { name: "Meeru Island", price: 1000 },
  { name: "Sun Island", price: 1200 },
  { name: "Dhigurah", price: 900 },
  { name: "Hulhumale", price: 800 },
  { name: "Baros Maldives", price: 6800 },
  { name: "Thulusdhoo", price: 2800 },
  { name: "Addu city", price: 3800 },
  { name: "Hanifaru Bay", price: 3800 },
  { name: "Baa Atoll", price: 1800 },
  { name: "Ari Atoll", price: 1000 },



];

function Planner() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [selectedGames, setSelectedGames] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [customPlace, setCustomPlace] = useState("");
  const [people, setPeople] = useState(1);
  const [days, setDays] = useState(1);

  const navigate = useNavigate();

  const calculateBudget = () => {
    let total = 0;
    if (selectedPackage) total += selectedPackage.price;
    if (selectedTransport) total += selectedTransport.price;
    selectedGames.forEach((g) => (total += g.price));
    selectedPlaces.forEach((p) => (total += p.price));
    total = total * people * days;
    return total;
  };

  const handleGameChange = (game) => {
    if (selectedGames.includes(game)) {
      setSelectedGames(selectedGames.filter((g) => g !== game));
    } else {
      setSelectedGames([...selectedGames, game]);
    }
  };

  const handlePlaceChange = (place) => {
    if (selectedPlaces.includes(place)) {
      setSelectedPlaces(selectedPlaces.filter((p) => p !== place));
    } else {
      setSelectedPlaces([...selectedPlaces, place]);
    }
  };

  const handleAddCustomPlace = () => {
    if (!customPlace) return;
    const newPlace = { name: customPlace, price: 500 }; // default price
    setSelectedPlaces([...selectedPlaces, newPlace]);
    setCustomPlace("");
  };

  const handleSubmit = () => {
    if (!selectedPackage || !selectedTransport || selectedPlaces.length === 0) {
      alert("Please select package, transport, and at least one place!");
      return;
    }

    const trip = {
      id: Date.now(),
      package: selectedPackage.name,
      transport: selectedTransport.name,
      places: selectedPlaces.map((p) => p.name),
      games: selectedGames.map((g) => g.name),
      people,
      days,
      totalBudget: calculateBudget(),
    };

    const existingTrips = JSON.parse(localStorage.getItem("myTrips")) || [];
    existingTrips.push(trip);
    localStorage.setItem("myTrips", JSON.stringify(existingTrips));

    alert("Trip booked successfully!");
    navigate("/mytrips");
  };

  return (
    <div className="planner-container">
      <h1>Plan Your Maldives Trip</h1>

      {/* Package */}
      <div className="planner-section">
        <label>Choose Package:</label>
        <select
          value={selectedPackage ? selectedPackage.name : ""}
          onChange={(e) =>
            setSelectedPackage(packages.find((p) => p.name === e.target.value))
          }
        >
          <option value="">Select Package</option>
          {packages.map((pkg, idx) => (
            <option key={idx} value={pkg.name}>
              {pkg.name} - ${pkg.price}
            </option>
          ))}
        </select>
      </div>

      {/* Transport */}
      <div className="planner-section">
        <label>Choose Transport:</label>
        {transports.map((t, idx) => (
          <div key={idx}>
            <input
              type="radio"
              name="transport"
              value={t.name}
              checked={selectedTransport?.name === t.name}
              onChange={() => setSelectedTransport(t)}
            />{" "}
            {t.name} - ${t.price}
          </div>
        ))}
      </div>

      {/* Places */}
      <div className="planner-section">
        <label>Select Places:</label>
        {maldivesPlaces.map((p, idx) => (
          <div key={idx}>
            <input
              type="checkbox"
              value={p.name}
              checked={selectedPlaces.includes(p)}
              onChange={() => handlePlaceChange(p)}
            />{" "}
            {p.name} - ${p.price}
          </div>
        ))}
        <div className="custom-place">
          <input
            type="text"
            placeholder="Add custom place"
            value={customPlace}
            onChange={(e) => setCustomPlace(e.target.value)}
          />
          <button onClick={handleAddCustomPlace}>Add Place</button>
        </div>
      </div>

      {/* Games */}
      <div className="planner-section">
        <label>Select Games/Activities:</label>
        {games.map((g, idx) => (
          <div key={idx}>
            <input
              type="checkbox"
              value={g.name}
              checked={selectedGames.includes(g)}
              onChange={() => handleGameChange(g)}
            />{" "}
            {g.name} - ${g.price}
          </div>
        ))}
      </div>

      {/* People and Days */}
      <div className="planner-section">
        <label>Number of People:</label>
        <input
          type="number"
          min="1"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
        />
      </div>

      <div className="planner-section">
        <label>Trip Duration (Days):</label>
        <input
          type="number"
          min="1"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
        />
      </div>

      {/* Budget */}
      <h2>Total Budget: ${calculateBudget()}</h2>

      {/* Submit */}
      <button onClick={handleSubmit}>Book Trip</button>

      {/* Live Summary */}
      <div className="trip-summary">
        <h3>Trip Summary:</h3>
        <p><strong>Package:</strong> {selectedPackage?.name || "-"}</p>
        <p><strong>Transport:</strong> {selectedTransport?.name || "-"}</p>
        <p><strong>Places:</strong> {selectedPlaces.map(p => p.name).join(", ") || "-"}</p>
        <p><strong>Games:</strong> {selectedGames.map(g => g.name).join(", ") || "None"}</p>
        <p><strong>People:</strong> {people}</p>
        <p><strong>Days:</strong> {days}</p>
        <p><strong>Budget:</strong> ${calculateBudget()}</p>
      </div>
    </div>
  );
}

export default Planner;
