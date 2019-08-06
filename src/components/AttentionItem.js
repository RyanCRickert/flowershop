import React from "react";

const AttentionItem = props => {
  return (
    <div className="attention-item">
      <div className="attention-item__img">
      </div>
      <div className="attention-item__desc">
        {props.name}
      </div>
      <div className="attention-item__cart">
        Add to cart
      </div>
    </div>
  )
}

export default AttentionItem;