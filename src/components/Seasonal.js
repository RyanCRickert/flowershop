import React from "react";
import SeasonalItem from "./SeasonalItem";

  const items = [
    {
      name: "Birthday"
    },
    {
      name: "Summer"
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