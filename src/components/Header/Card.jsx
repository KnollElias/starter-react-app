import "./Header.css"
import React from 'react';

const Card = ({ mainColor, rootText, dataText, dataCount, imgSrc }) => {
    return (
      <div style={{ backgroundColor: mainColor }} className="card">
        <img src={imgSrc} alt="logo" className="image" />
  
        <div className="textContainer">
          <p className="rootText">{rootText}</p>
          <p className="dataText">{dataText}</p>
        </div>
  
        <p className="dataCount">{dataCount}</p>
      </div>
    );
  };
  
export default Card;
