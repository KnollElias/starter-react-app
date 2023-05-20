import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventCards.css'; 

const EventCards = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        console.log("Making REquest... ")
        const response = await axios.get(`http://16.16.197.20:8080/system`);
        console.log("Made REquest... ", response)
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
        setIsError(true);
        setErrorMessage(
          `Status: ${error.response?.status || "unknown"} - ${error.response?.data?.message || "An error occurred while fetching data."} - Error: ${JSON.stringify(error)}`
        );
        
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="event-cards-container">
      {isError && <div style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        events.map((event, index) => (
          <div key={index} className="event-card">
            <img className="event-image" src="Your_image_source" alt="event" />
            <div className="event-details">
              <p className="event-name">{event.name}</p>
              <p className="event-time">{new Date(event.startTime).toLocaleString()}</p>
              <p className="event-type">{event.type}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default EventCards;