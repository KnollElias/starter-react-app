import React, { useState } from "react";

//CSS
import "./LocationSelector.css"

//MUI Components
import { Divider, Grid, TextField, Typography } from "@mui/material";
import Tabs from "../TabComponent";
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
      <Grid item className="location-selector-container">
        <Tabs
          value={selectedLocation}
          handleChange={handleChangeLocation}
          tabs={locationData}
          classes={"location-selector-item"}
        />
      </Grid>
    </Grid>

  );
};

export default LocationSelector;
