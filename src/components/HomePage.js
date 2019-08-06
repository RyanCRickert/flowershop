import React from "react";
import Attention from "./Attention";
import Guarantee from "./Guarantee";
import Specials from "./Specials";

const HomePage = () => {

  return (
    <div className="content-container main">
      <Attention />
      <Guarantee />
      <Specials />
    </div>
  )
}

export default HomePage;