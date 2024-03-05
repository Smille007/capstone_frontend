
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";




const Events = () => {
  const [loading, setLoading] = useState(true);
  const [eventsData, setEventsData] = useState([]);
  const [mobilizeEvents, setMobilizeEvents] = useState([]);
  const [virtualEvents, setVirtualEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMobilizeEvents = async () => {
      try {
        const response = await axios.get("https://api.mobilize.us/v1/events", {
          params: {
            location: "New York",
          },
        });
        const events = response.data.data;
        const virtualEvents = events.filter(
          (event) => event.is_virtual === true
        );
        setMobilizeEvents(events);
        setVirtualEvents(virtualEvents);
      } catch (error) {
        console.error("Error fetching Mobilize Events:", error);
      } finally {
        //finally: This block executes after the try and catch blocks, regardless of the outcome.
        setLoading(false);
      }
    };
    fetchMobilizeEvents();
  }, []);

  const handleCardClick = (event) => {
    navigate("/discover/events-details", { state: { event } });
  };

  console.log(virtualEvents);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {virtualEvents.map((event) => (
            <Card
              key={event.id}
              title={event.title}
              imageSrc={event.sponsor.logo_url}
              text={event.description}
              onLoad={handleImageLoad}
              onClick={() => handleCardClick(event)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
