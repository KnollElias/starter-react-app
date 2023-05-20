import "./Header.css"
import React, { useState } from 'react'

import Card from "./Card"

const Header = () => {
  const [kidAvailability, setKidAvailability] = useState({ kids: 50, available: 20 })
  return (
    <div style={{display: "flex", width: "100%"}}>
      <div className="row">
         <Card 
            mainColor={"#FF9BA6"}
            rootText={"Kinder"}
            dataText={"Anwesend"}
            dataCount={20}
            imgSrc={"./assets/header/NAv.png"} />
         <Card 
            mainColor={"#A59FFA"} 
            rootText={"Kinder"}
            dataText={"Abwesend"}
            dataCount={30}
            imgSrc={"./assets/header/Av.png"} />
         <Card 
            mainColor={"#FDB77A"} 
            rootText={"Zusatztag"}
            dataText={"Ausstehend"}
            dataCount={5}
            imgSrc={"./assets/header/NAv.png"} />
         </div>
    </div>
  )
}

export default Header
