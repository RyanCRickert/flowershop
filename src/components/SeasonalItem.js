import React from "react";

const SeasonalItem = props => {
  return (
    <div className="seasonal-item">
      <div className="seasonal-item__desc">
      <img className="seasonal-item__img" src={props.icon}/> | 
        Shop {props.name}
      </div>
      <div className="seasonal-item__button">
        {props.name} Flowers
      </div>
    </div>
  )
}

export default SeasonalItem;