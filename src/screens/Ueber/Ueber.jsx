import React, { useEffect, useState } from "react";
import uri from "../../service/server";
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
          setEvents(data);
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
  console.log("DATA", events[0]);
  return (
    <div className="event-cards-container ">
      {events[0] &&
        Object.values(events[0]).map((event, index) => (
                
          <>
            {event && event.name ? (
              <div key={event._id} className="event-card">
                <div className="event-details">
                  <p className="event-name">{event.name}</p>
                  <p className="event-type">{event.desc}</p>
                </div>
              </div>
            ) : null}
          </>
        ))}
    </div>
  );
};

export default Ueber;
