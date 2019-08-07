import React from "react";

const SeasonalItem = props => {
  return (
    <div className="seasonal-item">
      <div className="seasonal-item__desc">
        Shop {props.name}
      </div>
      <div className="seasonal-item__button">
        {props.name} Flowers
      </div>
    </div>
  )
}

export default SeasonalItem;