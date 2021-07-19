import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { DatePicker, Divider, Space } from "antd";
import Pagination from "../global-components/pagination";
import { paginate } from "../../paginate";
import * as homeServices from "../../Services/home-page-services";

function onChange(date, dateString) {
  console.log(date, dateString);
}

class Events extends Component {
  state = {
    events: [],
    pageSize: 4,
    currentPage: 1,
    displayEventsRage: 1,
  };

  async componentDidMount() {
    // console.log(homeServices.getActivities);
    const result = await homeServices.getAllEvents();
    console.log(result);
    this.setState({ events: result.data.records });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    this.setState({
      displayEventsRage: this.state.currentPage * this.state.pageSize + 1,
    });
  };
  render() {
    const regex = /(<([^>]+)>)/gi;
    const { events, pageSize, currentPage, displayEventsRage } = this.state;
    const monthNameList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const getEvents = paginate(events, currentPage, pageSize);
    return (
      <div className="collection-area ">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-8 col-5"></div>
                <div className="col-lg-4 col-7">
                  <form action="#">
                    <select className="form-control sort-select">
                      <option>Default sorting</option>
                      <option>Sort by popularity</option>
                      <option>Sort by latest</option>
                    </select>
                    <i className="fa fa-chevron-down" />
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                      Showing {displayEventsRage} to {currentPage * pageSize} of{" "}
                      {events.length} Events
                    </h6>

                    <Pagination
                      itemsCount={events.length}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={this.handlePageChange}
                    />
                  </div>
                </div>
              </div>
              <div className="tab-content tab-margin-43">
                <div
                  className="tab-pane fade in show active list-item"
                  id="two"
                >
                  {getEvents.map((event) => (
                    <div className="row product-style-03 ">
                      <div className="col-md-3 col-sm-12 col-12 eventList">
                        <div className="thumb">
                          <img src={event.image} alt={event.title} />
                        </div>
                      </div>
                      <div className="col-md-9 col-sm-12 col-12">
                        <div className="content">
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">{event.title}</Link>
                          </h6>

                          <p>{event.description.replace(regex, "")}</p>
                        </div>
                        <a
                          class="btn btn-orange"
                          href="#/blog-details"
                        >
                          Read more
                        </a>
                      </div>
                      <Divider />
                    </div>
                  ))}
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                      Showing {displayEventsRage} to {currentPage * pageSize} of{" "}
                      {events.length} Events
                    </h6>

                    <Pagination
                      itemsCount={events.length}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={this.handlePageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 margin-top-20">
              <div className="widget search-widget">
                <form className="search" action="#">
                <button type="submit">
                  <i className="icon-search" />
                </button>
                <input
                  type="text" className="side-input"
                  placeholder="Search Category"
                  name="search"
                />
              </form>
              </div>

              <div className="widget ptype-widget">
                <div className="accordion-style-2" id="accordionExample3">
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <p className="mb-0">
                        <a
                          href="#"
                          role="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          Year
                        </a>
                      </p>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse show"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <form action="#">
                          <div className="custom-control custom-checkbox mb-3">
                            <Space direction="vertical">
                              <DatePicker onChange={onChange} picker="year" />
                            </Space>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="widget size-widget">
                <div className="accordion-style-2" id="accordionExample6">
                  <div className="card">
                    <div className="card-header" id="headingSix">
                      <p className="mb-0">
                        <a
                          href="#"
                          role="button"
                          data-toggle="collapse"
                          data-target="#collapseSix"
                          aria-expanded="true"
                          aria-controls="collapseSix"
                        >
                          Month
                        </a>
                      </p>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse show"
                      aria-labelledby="headingSix"
                      data-parent="#accordionExample6"
                    >
                      <div className="card-body">
                        <ul className="size-list">
                          {monthNameList.map((month) => (
                            <li>
                              <a href="#">{month}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
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

export default Events;
