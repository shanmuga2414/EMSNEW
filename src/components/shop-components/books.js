import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { DatePicker, Space, Divider, Button } from "antd";
import Pagination from "../global-components/pagination";
import { paginate } from "../../paginate";
import * as homeServices from "../../Services/home-page-services";

function onChange(date, dateString) {
  console.log(date, dateString);
}

class Books extends Component {
  state = {
    bookCategories: [],
    booksList: [],
    pageSize: 9,
    currentPage: 1,
    displayBookRage: 1,
  };

  async componentDidMount() {
    // console.log(homeServices.getActivities);
    const result = await homeServices.getBookCategories();
    const bookResult = await homeServices.getAllBooks();
    this.setState({ bookCategories: result.data.records });
    this.setState({ booksList: bookResult.data.records });
    // const booksList = this.state.booksList.filter((e) => e._id !== id);
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    this.setState({
      displayBookRage: this.state.currentPage * this.state.pageSize + 1,
    });
  };
  render() {
    const {
      bookCategories,
      booksList,
      pageSize,
      currentPage,
      displayBookRage,
    } = this.state;
    console.log(booksList);
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
    const getBooks = paginate(booksList, currentPage, pageSize);
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
                      <option>Sort by average rating</option>
                      <option>Sort by latest</option>
                      <option>Sort by price: low to high</option>
                      <option>Sort by price: high to low</option>
                    </select>
                    <i className="fa fa-chevron-down" />
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                      Showing {displayBookRage} to {currentPage * pageSize} of{" "}
                      {booksList.length} Books
                    </h6>

                    <Pagination
                      itemsCount={booksList.length}
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
                    {getBooks.map((book) => (
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <div className="product-style-03  border-grey margin-top-40 book-div">
                          <div className="thumb ">
                            <img
                              src={book.original_image}
                              alt={book.book_name}
                            />
                          </div>
                          <div className=" align-center">
                            <div className="content book_content">
                            <h6 className="title stone-go-top">
                              <Link to="/product-details">
                                {book.book_name}
                              </Link>
                            </h6>
                            <div className="content-price d-flex align-self-center justify-content-center">
                              <span className="new-price">
                                ${book.book_price}
                              </span>
                            </div>
                          </div>
                            <a
                              className="btn btn-sm buyButton"
                              href={book.book_url}
                              target="_blank"
                            >
                              {" "}
                              Buy Now
                            </a>
                          </div>
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
                      Showing {displayBookRage} to {currentPage * pageSize} of{" "}
                      {booksList.length} Books
                    </h6>

                    <Pagination
                      itemsCount={booksList.length}
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
                    type="text"
                    className="side-input"
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
                          {bookCategories.map((bookCategory) => (
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck"
                              >
                                {bookCategory.category}
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
