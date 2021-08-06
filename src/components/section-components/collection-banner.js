import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class CollectionBanner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="container collection-banner">
        <div className="row">
          <div className="col-lg-6">
            <a target="_blank" href="http://emsmedia.net/magazine/"><img src={publicUrl + "assets/img/image 6.jpg"} alt="" /></a>
          </div>
          <div className="col-lg-6">
            <img src={publicUrl + "assets/img/image 7.png"} alt="" />
          </div>
        </div>
      </div>

      // <div className="collection-banner">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-lg-6 stone-go-top">
      //         <div className="collection-style-01 margin-top-20">
      //           <div className="thumb">
      //             <img src={publicUrl + "assets/img/image 6.png"} alt="" />
      //           </div>
      //         </div>
      //       </div>
      //       <div className="col-lg-6 stone-go-top">
      //         <div className="collection-style-01 margin-top-20">
      //           <div className="thumb">
      //             <img src={publicUrl + "assets/img/image 7.png"} alt="" />
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default CollectionBanner;
