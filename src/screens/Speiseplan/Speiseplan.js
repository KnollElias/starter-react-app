import React, { useState, useEffect } from 'react'

//CSS
import "./Speiseplan.css"

import LocationSelector from "../../components/LocationSelector/LocationSelector"
import uri from "../../service/server";
import objectFilter from "filtered-object";
import MealCard from '../../components/Cards/MealCard/MealCardindex';
import { Grid } from "@mui/material";
const BASE_URL = uri.uri;

const Speiseplan = () => {

  const [selectedLocation, setSelectedLocation] = useState("Alle")
  const [aboutData, setAboutData] = useState([]);
  const [referenceAboutData, setReferenceAboutData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Making Request... ");
        const response = await fetch("/about");
        console.log("Made Request... ", response);
        if (response.ok) {
          const data = await response.json();
          console.log("RESPONSE", data);
          // setAboutData(objectFilter(data[0], "_id"));
          // setReferenceAboutData(objectFilter(data[0], "_id"));
          setAboutData(data[0]);
          setReferenceAboutData(data[0]);
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

  // const filteredAboutData = Object.keys(aboutData).map((item) => {
  //  console.log(item.)
  // });


  useEffect(() => {
    console.log("aboutData", aboutData)
    console.log(typeof aboutData)
    Object.keys(aboutData).map((item) => {
      console.log(item.name)
    })
  }, [aboutData])


  return (
    <div>
      <div className='speiseplan-main-container'>
        <h1 className='speiseplan-plan-title'>Speiseplan Filtern</h1>
        <LocationSelector selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
      </div>

      <Grid
        container
        display={"grid"}
        sx={{
          gridTemplateColumns: "repeat( auto-fill, minmax( 370px , 1fr))",
          padding: " 0 1.4rem",
          gap: "2.3rem",
        }}
      >
        {aboutData &&
          Object.values(aboutData).map(({ name, desc }, index) => (
            <>
              {name ? (
                <Grid item>
                  <MealCard
                    className="meal-card-item"
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
    </div>
  )
}

export default Speiseplan