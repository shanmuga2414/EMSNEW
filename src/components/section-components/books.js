import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import * as homeServices from "../../Services/home-page-services";

class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    // console.log(homeServices.getActivities);
    const result = await homeServices.getBooks();
    // console.log(result);
    this.setState({ books: result.data.records });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    const { books } = this.state;

    return (
      <div className="container collection-banner margin-top-30">
        <div className="row  ">
          <div className="col-lg-3">
            <img src={publicUrl + "assets/img/image 20.png"} alt="" />
          </div>
          <div className="col-lg-9 ">
            <div className="row books">
              {books.slice(0, 8).map((book) => (
                <div
                  className="col-xl-3 col-lg-4 col-sm-4 col-12"
                  key={book.bid}
                >
                  <div className="card book-height">
                    <img
                      className="card-img-top"
                      src={
                        "http://emsmedia.net/magazine/web_control/books/image/" +
                        book.book_image
                      }
                      alt="Card image cap"
                    />
                    <div className="card-body align-center card-padding card-body-height">
                      <h6>{book.book_name}</h6>

                      <h5 className="align-center">
                        <b>&#8377; {book.book_price}</b>
                      </h5>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
