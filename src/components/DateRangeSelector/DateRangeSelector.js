import React, { useState, useEffect } from "react";

//CSS
import "./DateRangeSelector.css";

//MUI Components
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateRangeSelector({
  setStartDate,
  setFinishDate,
  startDate,
}) {
  return (
    <div className="date-selector-container">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <div className="start-date-selector">
            <DatePicker
              label="Startdatum"
              onChange={(e) => {
                setStartDate(e.$d);
              }}
            />
          </div>

          <div className="finish-date-selector">
            <DatePicker
              label="Enddatum"
              onChange={(e) => setFinishDate(e.$d)}
            />
          </div>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
