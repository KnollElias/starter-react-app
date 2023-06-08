import React, { useEffect, useState } from "react";
import uri from "../../service/server";
import objectFilter from "filtered-object";
import CardComponent from "../../components/Cards/UeberCard/UeberCardIndex";
import { Grid } from "@mui/material";
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
  return (
    <Grid
      container
      display={"grid"}
      sx={{
        gridTemplateColumns: "repeat( auto-fill, minmax( 370px , 1fr))",
        padding: " 0 1.4rem",
        gap: "2.3rem",
      }}
    >
      {events &&
        Object.values(events).map(({ name, desc }, index) => (
          <>
            {name ? (
              <Grid item>
                <CardComponent
                  title={name}
                  phoneNumber={desc.split("\n")[0]}
                  emergencyNumber={desc.split("\n")[1]}
                  postAddress={
                    desc.split("\n")[3] +
                    desc.split("\n")[4] +
                    desc.split("\n")[5] +
                    desc.split("\n")[6]
                  }
                  email={desc.split("\n")[8]}
                />
              </Grid>
            ) : null}
          </>
        ))}
    </Grid>
  );
};

export default Ueber;
