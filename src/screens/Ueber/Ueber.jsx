import React, { useEffect, useState } from "react";
import uri from "../../service/server";
const BASE_URL = uri.uri;

const Ueber = () => {
  const [events, setEvents] = useState([]);
  // const setLocation = async () => {
  //   let request = { requestType: "About" };
  //   try {
  //     const response = await fetch(
  //       `${BASE_URL}/About/${editedLocationIndex}/${tempLocationName}/${tempLocationDescription}/?requestType=${request.requestType}`,
  //       {
  //         method: "PATCH",
  //       }
  //     );
  //     const data = await response.json();
  //     return data;
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };
  const getAllLocation = async () => {
    let request = { requestType: "About" };
    try {
      const response = await fetch(
        `${BASE_URL}/About?requestType=${request.requestType}`,
        {
          method: "GET",
          mode: "no-cors",
        }
      );
      console.log('RESPONSE', response)
      const data = await response.json();
      debugger
        setEvents(data)
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect( async () => {
    getAllLocation().then(res=>     console.log('GET ALL ', res)
    );
  }, []);
  return Object.values(events).map((event, index) => (
    <>
      {event.name ? (
        <div key={event._id} className="event-card">
          <div className="event-details">
            <p className="event-name">{event.name}</p>
            <p className="event-type">{event.desc}</p>
          </div>
        </div>
      ) : null}
    </>
  ));
};

export default Ueber;
