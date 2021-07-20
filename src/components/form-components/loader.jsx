import React from "react";
import "./assets/css/loader.css";

const Loader = () => {
  const imageUrl = "https://www.selemco.com/assets/img/general/loading.gif";
  return (
    <div id="loader">
      <div className="element">
        <img src={imageUrl} className="loadingImg" alt="" />
      </div>
    </div>
  );
};

export default Loader;
