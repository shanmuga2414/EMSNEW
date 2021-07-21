import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import * as homeServices from "../../Services/home-page-services";

class Webchannel extends Component {
  constructor() {
    super();
    this.state = {
      channels: [],
      isOpen: false,
      videoId: "",
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal = (value) => () => {
    this.setState({ videoId: value });
    this.setState({ isOpen: true });
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
    var settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container collection-banner margin-top-30">
        <div className="row">
          <div className="col-lg-3">
            <img src={publicUrl + "assets/img/image 8.png"} alt="" />
          </div>
          <div className="col-lg-9">
            <div className="web-channel">
              <div className="row ">
                <div className="col-lg-10">
                  <h3 className="tvchannel-head">EMS Web TV Channel</h3>
                </div>
                <div className="col-lg-1 m-3">
                  <button className="btn btn-blue tv-head-btn">View All</button>
                </div>
              </div>

              <Slider {...settings}>
                {channels.map((channel) => (
                  <div className="single-team-item" key={channel.vid}>
                    <div className="thumb">
                      <img
                        onClick={this.openModal(channel.url)}
                        src={`http://img.youtube.com/vi/${channel.url}/0.jpg`}
                      ></img>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.state.videoId}
          onClose={() => this.setState({ isOpen: false })}
        />
      </div>
    );
  }
}

export default Webchannel;
