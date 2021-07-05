import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import * as homeServices from "../../Services/home-page-services";

class Brand extends Component {
  state = {
    activities: [],
  };

  async componentDidMount() {
    // console.log(homeServices.getActivities);
    const result = await homeServices.getActivities();
    // console.log(result);
    this.setState({ activities: result.data.records });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    const { activities } = this.state;
    const regex = /(<([^>]+)>)/gi;

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
                {activities.map((activity) => (
                  <div className="brant-item">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={activity.image}
                        alt="Card  cap"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          {activity.description.replace(regex, "")}
                        </p>
                        <a href="/" className="">
                          Read more{" "}
                          <i className="fa fa-angle-double-right fa-lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;
