import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import Comments from "./comments";
import * as homeServices from "../../Services/home-page-services";

class BlogDetails extends React.Component {
  state = {
    blog: "",
  };

  async componentDidMount() {
    const path = window.location.href.split("/");

    const response = await homeServices.getBlogContent(path[5]);
    if (response.status >= 200) {
      this.setState({ blog: response.data });
    }
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    const { blog } = this.state;
    const renderHTML = (escapedHTML: String) =>
      React.createElement("div", {
        dangerouslySetInnerHTML: { __html: escapedHTML },
      });
    return (
      <div className="blog-area margin-top-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-md-12">
                  <div className="blog-content">
                    {/* {renderHTML({ blog })} */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog,
                      }}
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

export default BlogDetails;
