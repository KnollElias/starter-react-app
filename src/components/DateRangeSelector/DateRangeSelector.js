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

  const handleDateInput = (inputDate) => {
    let objectDate = inputDate
    let day = objectDate.getDate();
    let month = objectDate.getMonth();
    let year = objectDate.getFullYear();

    return `${day}-${month}-${year}`;
  }


  return (
    <div className="date-selector-container">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <div className="start-date-selector">
            <DatePicker
              label="Datum von"
              onChange={(e) => setStartDate(handleDateInput(e.$d))}
            />
          </div>

          <div className="finish-date-selector">
            <DatePicker
              label="Datum bis"
              onChange={(e) => setFinishDate(handleDateInput(e.$d))}
            />
          </div>
        </DemoContainer>
      </LocalizationProvider>
    </div>

  );
}
