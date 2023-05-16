import "./Header.css"
import React, { useState } from 'react'

const Header = () => {
  const [kidAvailability, setKidAvailability] = useState({ kids: 50, available: 20 })
  return (
    <div>
      <div className="availableDiv">
        <img src="./assets/header/Av.png" 
        alt="logo" 
        className="image"
        ></img>
        Available 
      </div>
      <div className="notAvailableDiv">
        <img src="./assets/header/NAv.png" 
        alt="logo" 
        className="image"
        ></img>
        Available 
      </div>
    </div>
  )
}

export default Header