import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as homeServices from "../../Services/home-page-services";
import Slider from "react-slick";

class RelatedVideos extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }
  async componentDidMount() {
    const result = await homeServices.getWebTvVideos();
    this.setState({ videos: result.data.records });
  }
  render() {
    const { videos } = this.state;
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    var settings = {
      dots: false,
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
      <div className="related-product-section">
        <div className="container">
          <div className="related-product">
            <div className="row">
              <div className="col-lg-12">
                <div className="title">
                  <h2>RELATED VIDEOS</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Slider {...settings}>
                  {videos.map((video) => (
                    <div className="webtv-related-video">
                      <div className="product-style-03 webVideo imageHover margin-top-40">
                        <div className="thumb youtubeVideo">
                          <img
                            src={`http://img.youtube.com/vi/${video.url}/0.jpg`}
                          ></img>
                        </div>

                        <h6 className="title stone-go-top margin-top-20">
                          <span></span>
                          <span>{video.video_name}</span>
                        </h6>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedVideos;
