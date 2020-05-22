import React from "react";
import AttentionItem from "./AttentionItem";

const items = [
  {
    name: "100 Roses",
    path: "https://i.imgur.com/3p2IsxX.jpg",
    price: "$49.99"
  },
  {
    name: "Fresh Fauna",
    path: "https://i.imgur.com/xEgmHzm.jpg",
    price: "$69.99"
  },
  {
    name: "Orchid Bouquet",
    path: "https://i.imgur.com/h9DC0R8.jpg",
    price: "$39.99"
  },
  {
    name: "Dozen Pink Roses",
    path: "https://i.imgur.com/IbA8LPM.jpg",
    price: "$49.99"
  },
  {
    name: "Violet Surprise",
    path: "https://i.imgur.com/9LcZMVH.jpg",
    price: "$59.99"
  }
]

const Attention = () => {

  return (
    <div className="attention-container">
      {items.map(item => (
        <AttentionItem key={item.name} {...item} />
      ))}
    </div>
  )
}

export default Attention;