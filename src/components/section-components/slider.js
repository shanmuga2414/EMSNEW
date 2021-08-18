import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Slider from "react-slick";
import * as homeServices from "../../Services/home-page-services";

class Banner extends Component {
  state = {
    banners: [],
  };

  async componentDidMount() {
    const result = await homeServices.getBanners();

    this.setState({ banners: result.data.slider });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    const { banners } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="banner-style-01 stone-go-top">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div>
              <img src={banner.slider_image} />
            </div>
          ))}
        </Slider>
      </div>
      // {banners.map((banner) => (
      //     <div
      //       className="banner__bg d-flex align-items-center img-fluid index-banner"
      //       style={{
      //         background:
      //           'url("' +
      //           banner.slider_image +
      //           '") no-repeat center center/cover',
      //       }}
      //     ></div>
      //   ))}
      //  <div>
      //     <div
      //       className="banner__bg d-flex align-items-center"
      //       style={{
      //         background:
      //           'url("' +
      //           publicUrl +
      //           'assets/img/banner/11.png") no-repeat center center/cover',
      //       }}
      //     >
      //       <div className="container-fluid px-5 dis">
      //         <div className="banner-content">
      //           <h3 className="subtitle" data-animation-in="fadeInLeft">
      //             30% OFF
      //           </h3>
      //           <h2 className="title" data-animation-in="fadeInRight">
      //             EGATHUVA MEIGNANA SABAI
      //           </h2>
      //           <div className="margin-top-50 pl-1">
      //             <div className="btn-wrapper" data-animation-in="fadeInDown">
      //               <Link className="btn btn-white" to="/collection-full">
      //                 EXPLORE <i className="icon-arrow-buttom" />
      //               </Link>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
    );
  }
}

export default Banner;
