import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import ReactStars from "react-rating-stars-component";

class Magazine extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    const firstExample = {
      size: 20,
      value: 3,
      edit: false,
    };

    return (
      <div className="container collection-banner margin-top-30">
        <div className="row">
          <div className="col-lg-3">
            <img src={publicUrl + "assets/img/image 24.png"} alt="" />
          </div>
          <div className="col-lg-9">
            <div className="row books">
              <div className="col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={publicUrl + "assets/img/image 25.png"}
                    alt="Card image cap"
                  />
                  <div className="card-body align-center">
                    <h6>Pellentesque position</h6>
                    <div className="ml-4">
                      <ReactStars {...firstExample} />
                    </div>
                    <h5 className="align-center">
                      <b>$80.00</b>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={publicUrl + "assets/img/image 26.png"}
                    alt="Card image cap"
                  />
                  <div className="card-body align-center">
                    <h6>Pellentesque position</h6>
                    <div className="ml-4">
                      <ReactStars {...firstExample} />
                    </div>
                    <h5 className="align-center">
                      <b>$80.00</b>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={publicUrl + "assets/img/image 27.png"}
                    alt="Card image cap"
                  />
                  <div className="card-body align-center">
                    <h6>Pellentesque position</h6>
                    <div className="ml-4">
                      <ReactStars {...firstExample} />
                    </div>
                    <h5 className="align-center">
                      <b>$80.00</b>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={publicUrl + "assets/img/image 25.png"}
                    alt="Card image cap"
                  />
                  <div className="card-body align-center">
                    <h6>Pellentesque position</h6>
                    <div className="ml-4">
                      <ReactStars {...firstExample} />
                    </div>
                    <h5 className="align-center">
                      <b>$80.00</b>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={publicUrl + "assets/img/image 26.png"}
                    alt="Card image cap"
                  />
                  <div className="card-body align-center">
                    <h6>Pellentesque position</h6>
                    <div className="ml-4">
                      <ReactStars {...firstExample} />
                    </div>
                    <h5 className="align-center">
                      <b>$80.00</b>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={publicUrl + "assets/img/image 27.png"}
                    alt="Card image cap"
                  />
                  <div className="card-body align-center">
                    <h6>Pellentesque position</h6>
                    <div className="ml-4">
                      <ReactStars {...firstExample} />
                    </div>
                    <h5 className="align-center">
                      <b>$80.00</b>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={publicUrl + "assets/img/image 25.png"}
                    alt="Card image cap"
                  />
                  <div className="card-body align-center">
                    <h6>Pellentesque position</h6>
                    <div className="ml-4">
                      <ReactStars {...firstExample} />
                    </div>
                    <h5 className="align-center">
                      <b>$85git add.00</b>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={publicUrl + "assets/img/image 23.png"}
                    alt="Card image cap"
                  />
                  <div className="card-body align-center">
                    <h6>Pellentesque position</h6>
                    <div className="ml-4">
                      <ReactStars {...firstExample} />
                    </div>
                    <h5 className="align-center">
                      <b>$80.00</b>
                    </h5>
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

export default Magazine;
