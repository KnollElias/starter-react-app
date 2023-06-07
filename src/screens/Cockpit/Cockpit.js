import React, { useState } from 'react'
//CSS
import "./Cockpit.css"

//Components
import LocationSelector from '../../components/LocationSelector/LocationSelector'
import EventCards from '../../components/EventCards/EventCards'
import DateRangeSelector from '../../components/DateRangeSelector/DateRangeSelector'
import SearchBar from '../../components/SearchBar/SearchBar'

const Cockpit = () => {

  const [selectedLocation, setSelectedLocation] = useState("Alle")
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState()
  const [finishDate, setFinishDate] = useState()


  return (
    <div style={{ width: "100%", backgroundColor: "#F8EDC8" }}>
      <div className='filter-components-container'>
        <div className='location-selector-filter-container'>
          <h1 className='location-selector-filter-title'>Events Filtern aktuell</h1>
          <LocationSelector selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
        </div>
        <div className='search-bar-filter'>
          <SearchBar setSearchInput={setSearchInput} />
        </div>
        <div className='date-selector-filter'>
          <DateRangeSelector setStartDate={setStartDate} setFinishDate={setFinishDate} startDate={startDate}/>
        </div>
      </div>
      <EventCards selectedLocation={selectedLocation} searchInput={searchInput} startDate={startDate} finishDate={finishDate} />
    </div>
  )
}

export default Cockpit