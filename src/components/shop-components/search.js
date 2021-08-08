import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import ReactAudioPlayer from "react-audio-player";
import "antd/dist/antd.css";
import Pagination from "../global-components/pagination";
import { paginate } from "../../paginate";
import * as homeServices from "../../Services/home-page-services";

const publicUrl = process.env.PUBLIC_URL + "/";

class Search extends Component {
  state = {
    searchList: [],
    pageSize: 8,
    currentPage: 1,
    displaySearchRange: 1,
  };

  async componentDidMount() {
    const result = await homeServices.doSearch({ search: this.props.query });
    this.setState({ searchList: result.data.records || [] });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    this.setState({
      displaySearchRange: this.state.currentPage * this.state.pageSize + 1,
    });
  };
  render() {
    const {
      searchList,
      pageSize,
      currentPage,
      displaySearchRange,
    } = this.state;
    
    const getSearches = paginate(searchList, currentPage, pageSize);
    
    return (
      <div className="collection-area">
        <div className="container">
          <div className="row flex-row-reverse">

            <div className="col-12">
              <div className="row mb-5">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                      Showing {displaySearchRange} to {currentPage * pageSize} of{" "}
                      {searchList.length} Searches
                    </h6>

                    <Pagination
                      itemsCount={searchList.length}
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
                    {getSearches.map((search, key) => (
                      generateComponent(search, key)
                    ))}
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                      Showing {displaySearchRange} to {currentPage * pageSize} of{" "}
                      {searchList.length} Searches
                    </h6>

                    <Pagination
                      itemsCount={searchList.length}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={this.handlePageChange}
                    />
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

function generateComponent(search, key) {
  let type = search.type.trim().toUpperCase();
  switch(type) {
    case 'AUDIO':
      return audioComponent(search, key);
    case 'VIDEO':
      return videoComponent(search, key);
    case 'BOOK':
      return bookComponent(search, key);
    case 'EVENTS':
      return eventComponent(search, key);
    case 'ARTICLE':
      return articleComponent(search, key);
    default:
      return null;
  }
}

function eventComponent(event, key) {
  return (
    <div key={key} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
      <a className="col-sm-12 col-12 eventList" type="button" href="/events">
        <div className="thumb">
          <img src={event.image} alt={event.name} width="100%"/>
        </div>
      </a>
      <div className="col-sm-12 col-12">
        <div className="content">
          <h6 className="title stone-go-top" id="event-title">
            <Link to="/product-details">{event.name}</Link>
          </h6>

          <p>{event.description.replace(/(<([^>]+)>)/gi, "")}</p>
        </div>
        <a class="btn btn-native" href="#/blog-details">
          Read more
        </a>
      </div>
    </div>
  )
}

function audioComponent(audio, key) {
  return (
    <div key={key} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="product-style-audio webVideo margin-top-40">
      <div className="thumb " type="button" href="/audios">
      <img src={publicUrl + "assets/img/audio.jpg"} alt="" />
      </div>
        <div className="thumb ">
          <ReactAudioPlayer src={audio.url} controls />
        </div>
      </div>
    </div>
  )
}

function videoComponent(video, key) {
  return (
    <div key={key} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="product-style-03 webVideo imageHover margin-top-40">
        <a className="thumb youtubeVideo" type="button" href="/videos">
          <img src={`http://img.youtube.com/vi/${video.url}/0.jpg`}></img>
        </a>

        <h6 className="title stone-go-top margin-top-20">
          <span></span>
          <span>
            {video.name}
          </span>
        </h6>
      </div>
    </div>
  )
}

function bookComponent(book, key) {
  return (
    <div key={key} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
      <div className="product-style-03  border-grey margin-top-40 book-div">
        <div className="thumb ">
          <Link to="/books" target="_blank">
          <img
            src={book.image}
            alt={book.name}
          />
          </Link>
        </div>
        <div className=" align-center">
          <div className="content book_content">
          <h6 className="title stone-go-top">
            <Link to="/product-details" target="_blank">
              {book.name}
            </Link>
          </h6>
          <div className="content-price d-flex align-self-center justify-content-center">
            <span className="new-price">
              ${book.price}
            </span>
          </div>
        </div>
          <a
            className="btn btn-sm buyButton"
            href={book.url}
            target="_blank"
          >
            {" "}
            Buy Now
          </a>
        </div>
      </div>
    </div>
  )
}

function articleComponent(article, key) {
  return (
    <div key={key} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
      <div className="col-sm-12 col-12 margin-top-40">
        <div className="content article-content">
          <h6 className="title stone-go-top" id="event-title">
            <Link to="/product-details">{article.name}</Link>
          </h6>

          <p>{article.description.replace(/(<([^>]+)>)/gi, "")}</p>
        </div>
        <a class="btn btn-native" href="#">
          Read more
        </a>
      </div>
    </div>
  )
}

export default Search;
