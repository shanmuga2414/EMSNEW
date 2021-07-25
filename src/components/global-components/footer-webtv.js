import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer_v1 extends Component {
  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    // let imgattr = "Footer logo";

    return (
      <footer className="footer-area footer-style-1">
        <div className="footer-top padding-bottom-50">
          <div className="row footer-address-bar-webtv">
            <div className="container">
              <div className="row mt-25">
                <div className=" col-xl-3 col-lg-4 col-md-6  mobile-location">
                  <div className="method-box">
                    <div className="method-box__icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="method-box__content tab-contact">
                      <span>+123-456-789</span>
                      <p class="address-additional">Free support line!</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mobile-location">
                  <div className="method-box">
                    <div className="method-box__icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div className="method-box__content tab-contact">
                      <span>contact@onlinbookshops.com</span>
                      <p class="address-additional">Orders Support!</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mobile-location">
                  <div className="method-box margin-bottom-9">
                    <div className="method-box__icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="method-box__content">
                      <span>888 South Avenue Street, New York City. </span>
                      <p class="address-additional">Our Address</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mob-newsletter">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control newsletter"
                      placeholder="Enter email for Newsletter"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-orange"
                        type="button"
                        id="button-addon2"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mobile-location">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">CONTACT US</h4>

                  <ul className="stone-go-top">
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" /> Brands
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" />
                        Gift Vouchers
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" />
                        Affiliates
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" />
                        Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" />
                        Order History
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" />
                        Track Your Order
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">CUSTOMER SERVICE</h4>

                  <ul className="stone-go-top">
                    <li>
                      <Link to="/contact">
                        {" "}
                        <i className="fa fa-angle-right" />
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {" "}
                        <i className="fa fa-angle-right" />
                        Returns
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {" "}
                        <i className="fa fa-angle-right" />
                        Order History
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {" "}
                        <i className="fa fa-angle-right" />
                        Site Map
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {" "}
                        <i className="fa fa-angle-right" />
                        My Account
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {" "}
                        <i className="fa fa-angle-right" />
                        Unsubscribe Notification
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">INFORMATION</h4>
                  <ul className="stone-go-top">
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" /> About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" />
                        Delivery Information
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" />
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" />
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" />
                        Warranty
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" />
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" />
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget">
                  <h4 className="widget-title">DOWNLOAD APP</h4>
                  <Link to="/">
                    <img
                      className="playstore-btn"
                      src={publicUrl + "assets/img/apple.png"}
                      alt=""
                    />
                  </Link>
                  &nbsp;
                  <Link to="/">
                    <img
                      className="playstore-btn"
                      src={publicUrl + "assets/img/google-play.png"}
                      alt=""
                    />
                  </Link>
                  <h4 className="widget-title mt-4">FOLLOW US</h4>
                  <div className="text-secondary">
                    <Link className="mr-3" to="/">
                      {" "}
                      <i className="fab fa-facebook fa-lg"></i>
                      
                    </Link>
                    <Link className="mr-3" to="/">
                      {" "}
                      <i className="fab fa-twitter fa-lg"></i>
                    </Link>
                    <Link className="mr-3" to="/">
                      {" "}
                      <i className="fab fa-pinterest fa-lg" />
                    </Link>
                    <Link className="mr-3" to="/">
                      {" "}
                      <i className="fab fa-linkedin fa-lg" />
                    </Link>
                    <Link className="mr-3" to="/">
                      {" "}
                      <i className="fab fa-vimeo fa-lg " />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>
                  Copyright © 2020{" "}
                  <a href="/">
                    <span className="color-black">EMS Media </span> All Rights
                    Reserved
                  </a>
                </p>
              </div>
              <div className="col-md-6 align-right">
                <p>
                  Powered by{" "}
                  <a href="/">
                    <span className="color-black">ilife Technologies.</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer_v1;