import React, { useEffect, useState } from 'react'
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


  useEffect(() => {
    console.log("startDate", startDate)
    console.log("finishDate", finishDate)
  }, [startDate, finishDate])

  return (
    <div style={{ width: "100%", backgroundColor: "#F8EDC8" }}>
      <div className='filter-components-container'>
        <div className='left-filter-cluster'>
          <h1 className='left-filter-cluster-title'>Events Filtern</h1>
          <LocationSelector selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
        </div>
        <div className='right-filter-cluster'>
          <DateRangeSelector className='date-selector-filter' setStartDate={setStartDate} setFinishDate={setFinishDate} startDate={startDate} />
          <SearchBar className='search-bar-filter' setSearchInput={setSearchInput} />
        </div>
      </div>
      <EventCards selectedLocation={selectedLocation} searchInput={searchInput} startDate={startDate} finishDate={finishDate} />
    </div>
  )
}

export default Cockpit