import React from "react";
import Attention from "./Attention";
import Guarantee from "./Guarantee";
import Seasonal from "./Seasonal";

const HomePage = () => {

  return (
    <div className="content-container main">
      <Attention />
      <Guarantee />
      <Seasonal />
    </div>
  )
}

export default HomePage;