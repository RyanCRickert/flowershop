import React from "react";
import AttentionItem from "./AttentionItem";

const items = [
  {
    name: "100 Roses",
    path: "images/100-roses.jpg"
  },
  {
    name: "Fresh Fauna",
    path: "images/fresh-fauna.jpg"
  },
  {
    name: "Orchid Bouquet",
    path: "images/orchid.jpg"
  },
  {
    name: "Dozen Pink Roses",
    path: "images/pink-roses.jpg"
  },
  {
    name: "Violet Surprise",
    path: "images/violet-surprise.jpg"
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