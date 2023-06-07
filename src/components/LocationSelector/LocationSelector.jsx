import React, { useState } from "react";

//MUI Components
import { Divider, Grid, TextField, Typography } from "@mui/material";
import Tabs from "../../components/TabComponent";
const LocationSelector = ({ selectedLocation, setSelectedLocation }) => {
  const locationData = [
    { label: "Alle", tab: "alle" },
    { label: "Aesch", tab: "aesch" },
    { label: "Breite", tab: "breite" },
    { label: "St.Johan", tab: "stjohan" },
  ];

  const handleChangeLocation = (event, selectedValue) => {
    setSelectedLocation(selectedValue);
    console.log("selectedLocation", selectedLocation);
  };

  return (
    <Grid container>
      <Grid>
        <Grid container>
          <Grid item>
            <Tabs
              value={selectedLocation}
              handleChange={handleChangeLocation}
              tabs={locationData}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LocationSelector;
