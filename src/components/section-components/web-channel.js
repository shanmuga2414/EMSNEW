import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import ReactPlayer from "react-player";

class Webchannel extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="container collection-banner margin-top-30">
        <div className="row">
          <div className="col-lg-3">
            <img src={publicUrl + "assets/img/image 8.png"} alt="" />
          </div>
          <div className="col-lg-9">
            <div className="web-channel">
              <div className="row ">
                <div className="col-lg-10 m-2">
                  <h3>EMS Web TV Channel</h3>
                </div>
                <div className="col-lg-1 m-2">
                  <button className="btn btn-orange">View All</button>
                </div>
              </div>
              <div className="brand-slider">
                <div className="brant-item">
                  <ReactPlayer url="https://www.youtube.com/watch?v=Y89PVasx8n4" />
                </div>
                <div className="brant-item">
                  <ReactPlayer url="https://www.youtube.com/watch?v=ug50zmP9I7s" />
                </div>
                <div className="brant-item">
                  <ReactPlayer url="https://www.youtube.com/watch?v=8Mvt70tfb9c" />
                </div>
                <div className="brant-item">
                  <ReactPlayer url="https://www.youtube.com/watch?v=AQxy6jD1lLg" />
                </div>
                <div className="brant-item">
                  <ReactPlayer url="https://www.youtube.com/watch?v=Y89PVasx8n4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Webchannel;
