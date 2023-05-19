import React from 'react'

import LocationSelector from '../../components/LocationSelector/LocationSelector'
import EventCards from './EventCards'

const Cockpit = () => {
  return (
    <div>
      <div style={{textAlign: "left", fontWeight: "bold", marginLeft: 20}}>Events Filtern</div>
      <LocationSelector />
      <EventCards />
    </div>
  )
}

export default Cockpit