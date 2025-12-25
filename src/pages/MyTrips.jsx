import { useEffect, useState } from "react";
import "./MyTrips.css";

function MyTrips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem("myTrips")) || [];
    setTrips(savedTrips);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this trip?")) {
      const updatedTrips = trips.filter((trip) => trip.id !== id);
      setTrips(updatedTrips);
      localStorage.setItem("myTrips", JSON.stringify(updatedTrips));
    }
  };

  if (trips.length === 0) {
    return <h2 className="no-trips">No trips booked yet!</h2>;
  }

  return (
    <div className="mytrips-container">
      <h1>My Trips</h1>
      {trips.map((trip) => (
        <div key={trip.id} className="trip-card">
          <h3>Package: {trip.package}</h3>
          <p>Transport: {trip.transport}</p>
          <p>Places: {trip.places.join(", ")}</p>
          <p>Games/Activities: {trip.games.join(", ") || "None"}</p>
          <p>People: {trip.people}</p>
          <p>Days: {trip.days}</p>
          <h4>Total Budget: ${trip.totalBudget}</h4>
          <button className="delete-btn" onClick={() => handleDelete(trip.id)}>
            Delete Trip
          </button>
        </div>
      ))}
    </div>
  );
}

export default MyTrips;
