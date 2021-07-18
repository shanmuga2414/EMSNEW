import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import Modal from "react-modal";
import ImageGallery from "react-image-gallery";
import Pagination from "../global-components/pagination";
import { paginate } from "../../paginate";
import "react-image-gallery/styles/css/image-gallery.css";

import * as homeServices from "../../Services/home-page-services";

function onChange(date, dateString) {
  console.log(date, dateString);
}

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      showModal: false,
      pageSize: 6,
      currentPage: 1,
      displayGalleryRage: 1,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    this.setState({
      displayGalleryRage: this.state.currentPage * this.state.pageSize + 1,
    });
  };
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  async componentDidMount() {
    // console.log(homeServices.getActivities);
    const result = await homeServices.getAlbums();
    // const imgresults = await homeServices.getAlbumImages();
    this.setState({ albums: result.data.records });
    // this.setState({ images: imgresults.data });
  }

  render() {
    const { albums, pageSize, currentPage, displayGalleryRage } = this.state;
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
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
    const images = [
      {
        original:
          "http://emsmedia.net/magazine/web_control/books/image/book1.png",
        thumbnail:
          "http://emsmedia.net/magazine/web_control/books/image/book1.png",
      },
      {
        original:
          "http://emsmedia.net/magazine/web_control/books/image/book2.png",
        thumbnail:
          "http://emsmedia.net/magazine/web_control/books/image/book2.png",
      },
      {
        original:
          "http://emsmedia.net/magazine/web_control/books/image/book3.png",
        thumbnail:
          "http://emsmedia.net/magazine/web_control/books/image/book3.png",
      },
      {
        original:
          "http://emsmedia.net/magazine/web_control/books/image/book4.png",
        thumbnail:
          "http://emsmedia.net/magazine/web_control/books/image/book4.png",
      },
      {
        original:
          "http://emsmedia.net/magazine/web_control/books/image/book5.png",
        thumbnail:
          "http://emsmedia.net/magazine/web_control/books/image/book5.png",
      },
      {
        original:
          "http://emsmedia.net/magazine/web_control/books/image/book6.png",
        thumbnail:
          "http://emsmedia.net/magazine/web_control/books/image/book6.png",
      },
    ];
    const getGallery = paginate(albums, currentPage, pageSize);
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
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                      Showing {displayGalleryRage} to {currentPage * pageSize}{" "}
                      of {albums.length} Albums
                    </h6>

                    <Pagination
                      itemsCount={albums.length}
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
                    {getGallery.map((album) => (
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="product-style-03 imageHover webVideo margin-top-40">
                          <div className="thumb">
                            <span onClick={this.handleOpenModal}>
                              <img src={album.image} alt="" />
                            </span>
                          </div>
                          <h6 className="title stone-go-top  margin-top-20">
                            <span onClick={this.handleOpenModal}>
                              {album.title}
                            </span>
                          </h6>
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
                      Showing {displayGalleryRage} to {currentPage * pageSize}{" "}
                      of {albums.length} Albums
                    </h6>

                    <Pagination
                      itemsCount={albums.length}
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
                <form action="#">
                  <button type="submit">
                    <i className="icon-search" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search Category"
                    name="search"
                  />
                </form>
              </div>
              <div className="widget categories-widget">
                {/* <div className="accordion-style-2" id="accordionExample1">
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
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Social
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck2"
                            >
                              Family
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck3"
                            >
                              AAN Songs
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck4"
                            >
                              Book Release
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              J S K A A H Moulana
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck2"
                            >
                              Childrens [293]
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck3"
                            >
                              Women [125]
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck4"
                            >
                              History [698]
                            </label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div> */}
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

        {/* <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={false}
        >
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal> */}

        <Modal
          isOpen={this.state.showModal}
          // onAfterOpen={afterOpenModal}
          onRequestClose={this.handleCloseModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button align="right" onClick={this.handleCloseModal}>
            X
          </button>
          <ImageGallery items={images} />
          {/* <h2>Hello</h2>
          <button onClick={this.handleCloseModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form> */}
        </Modal>
      </div>
    );
  }
}

export default Gallery;
