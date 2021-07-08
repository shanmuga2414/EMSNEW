import React, { Component } from "react";
import { Link } from "react-router-dom";
class Books extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="collection-area">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-8 col-5">
                  {/* <ul className="nav nav-pills shop-tab">
                    <li>
                      <a data-toggle="pill" href="#one" className="active">
                        <i className="fa fa-th-large" />
                      </a>
                    </li>
                    <li>
                      <a data-toggle="pill" href="#two">
                        <i className="fa fa-bars" />
                      </a>
                    </li> 
                  </ul>*/}
                </div>
                <div className="col-lg-4 col-7">
                  <form action="#">
                    <select className="form-control sort-select">
                      <option>Default sorting</option>
                      <option>Sort by popularity</option>
                      <option>Sort by average rating</option>
                      <option>Sort by latest</option>
                      <option>Sort by price: low to high</option>
                      <option>Sort by price: high to low</option>
                    </select>
                    <i className="fa fa-chevron-down" />
                  </form>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade in show active" id="one">
                  <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-style-03 margin-top-40">
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/shop/1.jpeg"}
                            alt=""
                          />
                        </div>
                        <div className="content text-center">
                          <ul className="justify-content-center margin-bottom-20">
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">
                              Islam on Service Humanity
                            </Link>
                          </h6>
                          <div className="content-price d-flex align-self-center justify-content-center">
                            <span className="new-price">$450.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-style-03 margin-top-40">
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/shop/3.jpeg"}
                            alt=""
                          />
                        </div>
                        <div className="content text-center">
                          <ul className="justify-content-center margin-bottom-20">
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">Studies in Islam</Link>
                          </h6>
                          <div className="content-price d-flex align-self-center justify-content-center">
                            <span className="new-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-style-03 margin-top-40">
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/shop/9.jpeg"}
                            alt=""
                          />
                        </div>
                        <div className="content text-center">
                          <ul className="justify-content-center margin-bottom-20">
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">
                              365 Tales from Islam
                            </Link>
                          </h6>
                          <div className="content-price d-flex align-self-center justify-content-center">
                            <span className="new-price">$300.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-style-03 margin-top-40">
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/shop/2.png"}
                            alt=""
                          />
                        </div>
                        <div className="content text-center">
                          <ul className="justify-content-center margin-bottom-20">
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">
                              The History of Islam
                            </Link>
                          </h6>
                          <div className="content-price d-flex align-self-center justify-content-center">
                            <span className="new-price">$400.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-style-03 margin-top-40">
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/shop/4.jpeg"}
                            alt=""
                          />
                        </div>
                        <div className="content text-center">
                          <ul className="justify-content-center margin-bottom-20">
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">
                              Islam your Birthright
                            </Link>
                          </h6>
                          <div className="content-price d-flex align-self-center justify-content-center">
                            <span className="new-price">$450.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-style-03 margin-top-40">
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/shop/5.jpeg"}
                            alt=""
                          />
                        </div>
                        <div className="content text-center">
                          <ul className="justify-content-center margin-bottom-20">
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">
                              The Future of Humanity
                            </Link>
                          </h6>
                          <div className="content-price d-flex align-self-center justify-content-center">
                            <span className="new-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-style-03 margin-top-40">
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/shop/1.jpeg"}
                            alt=""
                          />
                        </div>
                        <div className="content text-center">
                          <ul className="justify-content-center margin-bottom-20">
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">
                              Islam on Service Humanity
                            </Link>
                          </h6>
                          <div className="content-price d-flex align-self-center justify-content-center">
                            <span className="new-price">$450.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-style-03 margin-top-40">
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/shop/3.jpeg"}
                            alt=""
                          />
                        </div>
                        <div className="content text-center">
                          <ul className="justify-content-center margin-bottom-20">
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">Studies in Islam</Link>
                          </h6>
                          <div className="content-price d-flex align-self-center justify-content-center">
                            <span className="new-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-style-03 margin-top-40">
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/shop/9.jpeg"}
                            alt=""
                          />
                        </div>
                        <div className="content text-center">
                          <ul className="justify-content-center margin-bottom-20">
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">
                              365 Tales from Islam
                            </Link>
                          </h6>
                          <div className="content-price d-flex align-self-center justify-content-center">
                            <span className="new-price">$300.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-style-03 margin-top-40">
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/shop/2.png"}
                            alt=""
                          />
                        </div>
                        <div className="content text-center">
                          <ul className="justify-content-center margin-bottom-20">
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">
                              The History of Islam
                            </Link>
                          </h6>
                          <div className="content-price d-flex align-self-center justify-content-center">
                            <span className="new-price">$400.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-style-03 margin-top-40">
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/shop/4.jpeg"}
                            alt=""
                          />
                        </div>
                        <div className="content text-center">
                          <ul className="justify-content-center margin-bottom-20">
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">
                              Islam your Birthright
                            </Link>
                          </h6>
                          <div className="content-price d-flex align-self-center justify-content-center">
                            <span className="new-price">$450.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-style-03 margin-top-40">
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/shop/5.jpeg"}
                            alt=""
                          />
                        </div>
                        <div className="content text-center">
                          <ul className="justify-content-center margin-bottom-20">
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-star-o" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="title stone-go-top">
                            <Link to="/product-details">
                              The Future of Humanity
                            </Link>
                          </h6>
                          <div className="content-price d-flex align-self-center justify-content-center">
                            <span className="new-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>Showing 1 to 12 of 19 Books</h6>
                    <ul>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                    </ul>
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
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              God [124]
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
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Social[124]
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
                              Family [293]
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
                </div>
              </div>

              <div className="widget price-widget">
                <div className="accordion-style-2" id="accordionExample4">
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <p className="mb-0">
                        <a
                          href="#"
                          role="button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          Filter by price
                        </a>
                      </p>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse show"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample4"
                    >
                      <div className="price_filter">
                        <div className="price_slider_amount">
                          <input type="submit" defaultValue="Price:" />
                          <input type="text" id="amount" name="price" />
                        </div>
                        <div id="slider-range" />
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

export default Books;
