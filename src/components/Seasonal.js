import React from "react";
import SeasonalItem from "./SeasonalItem";

  const items = [
    {
      name: "Birthday",
      icon: "images/present.png"
    },
    {
      name: "Summer",
      icon: "images/sun.png"
    }
  ]

const Seasonal = () => {

  return (
    <div className="seasonal-container">
      {items.map(item => (
        <SeasonalItem key={item.name} {...item} />
      ))}
    </div>
  )
}

export default Seasonal;