import React, { useEffect, useState } from "react";
import uri from "../../service/server";
import objectFilter from "filtered-object";
const BASE_URL = uri.uri;

const Ueber = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Making Request... ");
        const response = await fetch("/about");
        console.log("Made Request... ", response);
        if (response.ok) {
          const data = await response.json();
          console.log("RESPONSE", data);
          setEvents(objectFilter(data[0], "_id"));
        } else {
          const errorStatus = response.status;
          throw new Error(`Failed to fetch data. Status: ${errorStatus}`);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);
  console.log("DATA", Object.values(events).length);
  return (
    <div className="event-cards-container ">
      {events &&
        Object.values(events).map((event, index) => (
          <>
            {(Object.values(events).length % 6 === 0 || Object.values(events).length % 6 === 1)  ? (
              <>
                {event ? (
                  <div key={index} className="event-card">
                    <div className="event-details">
                      <p className="event-name">{event.name}</p>
                      <p className="event-type">{event.desc}</p>
                    </div>
                  </div>
                ) : null}
              </>
            ) : (
              <div key={event._id} className="event-card event-card-last-two">
                <div className="event-details">
                  <p className="event-name">{event.name}</p>
                  <p className="event-type">{event.desc}</p>
                </div>
              </div>
            )}
          </>
        ))}
    </div>
  );
};

export default Ueber;
