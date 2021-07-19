import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import ReactAudioPlayer from "react-audio-player";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import Pagination from "../global-components/pagination";
import { paginate } from "../../paginate";
import * as homeServices from "../../Services/home-page-services";

function onChange(date, dateString) {
  console.log(date, dateString);
}

class Audios extends Component {
  state = {
    audioCategories: [],
    audioList: [],
    pageSize: 6,
    currentPage: 1,
    displayAudioRange: 1,
  };

  async componentDidMount() {
    const category = await homeServices.getAudioCategory();
    const result = await homeServices.getAllAudios();
    console.log(result);
    this.setState({ audioList: result.data.records });
    this.setState({ audioCategories: category.data.records });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    this.setState({
      displayAudioRange: this.state.currentPage * this.state.pageSize + 1,
    });
  };
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const {
      audioCategories,
      audioList,
      pageSize,
      currentPage,
      displayAudioRange,
    } = this.state;
    console.log(audioList);
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
    const getAudio = paginate(audioList, currentPage, pageSize);
    return (
      <div className="collection-area">
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
              <div className="row mb-5">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                      Showing {displayAudioRange} to {currentPage * pageSize} of{" "}
                      {audioList.length} Audios
                    </h6>

                    <Pagination
                      itemsCount={audioList.length}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={this.handlePageChange}
                    />
                  </div>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade in show active" id="one">
                  <div className="row">
                    {getAudio.map((audio) => (
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="product-style-audio webVideo margin-top-40">
                        <div className="thumb ">
                        <img src={publicUrl + "assets/img/audio.jpg"} alt="" />
                        </div>
                          <div className="thumb ">
                            <ReactAudioPlayer src={audio.audio} controls />
                          </div>
                          {/* <h6 className="title stone-go-top margin-top-20">
                          <Link to="/"></Link>
                        </h6> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                      Showing {displayAudioRange} to {currentPage * pageSize} of{" "}
                      {audioList.length} Audios
                    </h6>

                    <Pagination
                      itemsCount={audioList.length}
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
              <div className="widget categories-widget">
                <div className="accordion-style-2" id="accordionExample1">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <p className="mb-0">
                        <a
                          href="#"
                          role="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Categories
                        </a>
                      </p>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample1"
                    >
                      <div className="card-body">
                        <form action="#">
                          {audioCategories.map((audioCategory) => (
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck"
                              >
                                {audioCategory.category}
                              </label>
                            </div>
                          ))}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Audios;
