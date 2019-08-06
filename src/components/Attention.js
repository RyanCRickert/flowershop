import React from "react";
import AttentionItem from "./AttentionItem";

const items = [
  {
    name: "Special 1",
    path: ""
  },
  {
    name: "Special 2",
    path: ""
  },
  {
    name: "Special 3",
    path: ""
  },
  {
    name: "Special 4",
    path: ""
  },
  {
    name: "Special 5",
    path: ""
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