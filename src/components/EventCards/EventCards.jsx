import React, { useState, useEffect } from "react";
//CSS
import "./EventCards.css";

//HELPERS
import getEvents from "../../helpers/getEvents";

const EventCards = ({
  selectedLocation,
  searchInput,
  startDate,
  finishDate,
}) => {
  const [events, setEvents] = useState([]);
  const [referenceData, setReferenceData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getEvents({
      setEvents,
      setReferenceData,
      setIsLoading,
      setIsError,
      setErrorMessage,
    });
  }, []);

  const handleDateInput = (inputDate) => {
    let objectDate = inputDate;
    let day = objectDate.getDate();
    let month = objectDate.getMonth();
    let year = objectDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  // useEffect(() => {
  //   console.log("events", events);
  // }, [events]);

  const filteredEvents = events.filter((event) => {
    if (searchInput.length !== 0) {
      return event.name.toLowerCase().includes(searchInput.toLowerCase());
    }
    // if (selectedLocation) {
    // }
  });
  const filterByDate = events.filter((event) => {
    if (startDate && finishDate) {
      return (
        Date.now(event.startTime) > Date.now(startDate) &&
        Date.now(event.endTime) < Date.now(finishDate)
      );
    } else {
      return false;
    }
  });
  useEffect(() => {
    if (filteredEvents && searchInput !== "") {
      setEvents(filteredEvents);
    } else {
      setEvents(referenceData);
    }
  }, [searchInput]);

  useEffect(() => {
    if (startDate && finishDate && filterByDate.length) {
      setEvents(filterByDate);
    } else {
      setEvents(referenceData);
    }
  }, [startDate, finishDate]);
  return (
    <div className="event-cards-container">
      {isError && (
        <div style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</div>
      )}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        events.map((event) => (
          <div key={event._id} className="event-card">
            <img className="event-image" src="Your_image_source" alt="event" />
            <div className="event-details">
              <p className="event-name">{event.name}</p>
              <p className="event-time">
                {new Date(event.startTime).toLocaleString()}
              </p>
              <p className="event-type">{event.type}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default EventCards;
