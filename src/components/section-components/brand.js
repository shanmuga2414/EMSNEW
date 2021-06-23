import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import * as homeServices from "../../Services/home-page-services";

class Brand extends Component {
  state = {
    activity: {},
  };

  componentDidMount() {
    console.log(homeServices.getActivities);
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="brand-area padding-top-30 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 ems-heading">
              <h3>Event Activities</h3>
            </div>
            <div className="col-lg-1">
              <button className="btn btn-orange">View All</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-slider">
                <div className="brant-item">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={publicUrl + "assets/img/image 2.png"}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="">
                        Read more{" "}
                        <i className="fa fa-angle-double-right fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="brant-item">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={publicUrl + "assets/img/image 3.png"}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="">
                        Read more{" "}
                        <i className="fa fa-angle-double-right fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="brant-item">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={publicUrl + "assets/img/image 4.png"}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="">
                        Read more{" "}
                        <i className="fa fa-angle-double-right fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="brant-item">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={publicUrl + "assets/img/image 5.png"}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="">
                        Read more{" "}
                        <i className="fa fa-angle-double-right fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="brant-item">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={publicUrl + "assets/img/image 4.png"}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="">
                        Read more{" "}
                        <i className="fa fa-angle-double-right fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="brant-item">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={publicUrl + "assets/img/image 5.png"}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="">
                        Read more{" "}
                        <i className="fa fa-angle-double-right fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="brant-item">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={publicUrl + "assets/img/image 4.png"}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="">
                        Read more{" "}
                        <i className="fa fa-angle-double-right fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="brant-item">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={publicUrl + "assets/img/image 4.png"}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="">
                        Read more{" "}
                        <i className="fa fa-angle-double-right fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;
