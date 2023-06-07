import React, { useState, useEffect } from 'react';

//CSS
import "./DateRangeSelector.css"

//MUI Components
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateRangeSelector({ setStartDate, setFinishDate }) {
    return (
        <div className='date-selector-container'>
            <div className='start-date-selector'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Startdatum" onChange={e => setStartDate(e)} />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
            <div className='finish-date-selector'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Enddatum" onChange={e => setFinishDate(e)} />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
        </div>
    );
}