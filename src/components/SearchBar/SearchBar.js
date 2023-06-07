import React from 'react';

//CSS
import "./SearchBar.css"

//MUI Components
import TextField from '@mui/material/TextField';

export default function SearchBar({ setSearchInput }) {
    return (
        <div className='search-bar'>
            <TextField id="outlined-basic" label="Suchen" variant="outlined" onChange={(e) => setSearchInput(e.target.value)} />
        </div>
    );
}