import React from 'react'

import LocationSelector from '../../components/LocationSelector/LocationSelector'
import EventCards from './EventCards'

const Cockpit = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#F8EDC8"}}>
      <div style={{textAlign: "left", fontWeight: "bold", marginLeft: 20, }}>Events Filtern aktuell</div>
      <LocationSelector />
      <EventCards />
    </div>
  )
}

export default Cockpit