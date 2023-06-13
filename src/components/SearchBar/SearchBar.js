import React from 'react';

//CSS
import "./SearchBar.css"

//MUI Components
import TextField from '@mui/material/TextField';

export default function SearchBar({ setSearchInput }) {
    return (
        <div className='search-bar-input'>
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setSearchInput(e.target.value)} />
            {/* <input type='text' placeholder='Name' className='search-bar-input' onChange={(e) => setSearchInput(e.target.value)} /> */}

        </div>
    );
}