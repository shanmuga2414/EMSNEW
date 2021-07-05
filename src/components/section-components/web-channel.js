import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import ReactPlayer from "react-player";
import * as homeServices from "../../Services/home-page-services";

class Webchannel extends Component {
  state = {
    channels: [],
  };

  async componentDidMount() {
    // console.log(homeServices.getActivities);
    const result = await homeServices.getWebchannels();
    console.log(result);
    this.setState({ channels: result.data.records });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const { channels } = this.state;

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
              <div className="team-slider">
                {channels.map((channel) => (
                  <div className="single-team-item">
                    <div className="thumb">
                      <ReactPlayer url="https://www.youtube.com/embed/ySZW8DNDfPk" />
                    </div>
                  </div>
                  // <div className="single-team-item">
                  //   <div className="thumb">
                  //     <ReactPlayer url="https://www.youtube.com/embed/ySZW8DNDfPk" />
                  //   </div>
                  // </div>
                  // <div className="single-team-item">
                  //   <div className="thumb">
                  //     <ReactPlayer url="https://www.youtube.com/embed/ySZW8DNDfPk" />
                  //   </div>
                  // </div>
                  // <div className="single-team-item">
                  //   <div className="thumb">
                  //     <ReactPlayer url="https://www.youtube.com/embed/ySZW8DNDfPk" />
                  //   </div>
                  // </div>
                  // <div className="single-team-item">
                  //   <div className="thumb">
                  //     <ReactPlayer url="https://www.youtube.com/embed/ySZW8DNDfPk" />
                  //   </div>
                  // </div>
                ))}
              </div>
              {/* <div className="team-slider">
                {channels.map((channel) => (
                  <div className="brant-item">
                    <ReactPlayer url={channel.url} />
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Webchannel;
