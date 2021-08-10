import { array } from "joi";
import React, { Component } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as homeServices from "../../Services/home-page-services";

class Navbar extends Component {
  state = {
    menus: [],
  };

  async componentDidMount() {
    const result = await homeServices.getMenu();
    const menuList = result.data.records;
    this.setState({ menus: result.data.records });
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";

    var shoppingCart = (function () {
      // =============================
      // Private methods and propeties
      // =============================
      var cart = [];
      var item;
      var itemCopy;
      var p;

      // Constructor
      function Item(name, price, count, img) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.img = img;
      }
    })();
  }
  searchChange = (e) => {
    let query = e.target.value.trim();
    if (this.query === query) return;

    if (e.key === "Enter") {
      this.doSearch(query);
      e.preventDefault();
    }
  };

  doSearch(query) {
    if (!query) return;
    window.location.href = `/search/${query}`;
  }

  render() {
    const { menus } = this.state;
    const mainMenu = Object.keys(menus);
    // mainMenu.shift();
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <div className="stoon-navbar">
          <div className="header-top d-none d-block">
            <div className="container">
              <div className="row ">
                <div
                  className=""
                  className="col-xl-5 col-lg-4 col-md-5 col-12 mt-1 hide-mobile-view"
                >
                  <span>
                    <i className="fas fa-envelope"></i>
                    <span className="text-space"> info@emsmedia.net</span>
                  </span>
                  <span className="top-contact">
                    <i className="fas fa-phone-volume"></i>{" "}
                    <span className="text-space">
                      <a href="#/contact" className="color-white">
                        Contact Us
                      </a>
                    </span>
                  </span>
                </div>
                <div className="col-xl-7 col-lg-8 col-md-7 col-12 text-right hide-mobile-view">
                  <a
                    href="http://emsmedia.net/magazine/"
                    target="_blank"
                    type="button"
                    className="btn btn-sm magazine btn-tvchannel top-content-size hide-mobile-view color-white tab-hide"
                    style={{ "margin-right": "15px" }}
                  >
                    <i className="fa fa-book" />{" "}
                    <span className="tab">EMS</span> Magazine{" "}
                  </a>
                  <a className="top-content-size color-white" href="#/login">
                    <i className="fas fa-sign-in-alt"></i> Login
                  </a>
                  <span className="space">|</span>
                  <a className="top-content-size color-white" href="#/register">
                    <i className="fas fa-user-plus"></i> Register
                  </a>
                  <a
                    href="#/webtv"
                    target="_blank"
                    type="button"
                    className="btn btn-sm btn-tvchannel top-content-size hide-mobile-view color-white"
                  >
                    <i className="fa fa-play-circle fa-lg" />{" "}
                    <span className="tab">EMS</span> Web TV{" "}
                    <span className="tab">Channel</span>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-12 hide-large-view">
                  <div className="row mobile-tv">
                    <div className="col-8">
                      <a
                        className="top-content-size color-white"
                        href="#/login"
                      >
                        <i className="fas fa-sign-in-alt"></i> Login
                      </a>
                      <span className="space">|</span>
                      <a
                        className="top-content-size color-white"
                        href="#/register"
                      >
                        <i className="fas fa-user-plus"></i> Register
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        href="#/webtv"
                        type="button"
                        className="btn btn-sm btn-tvchannel top-content-size hide-large-view"
                      >
                        <i className="fa fa-play-circle fa-lg" /> Web TV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid logo-bg-color">
            <div className="row">
              <div className="col-xl-8 col-lg-5  hide-mobile-view tab-hide">
                <div className="logo">
                  <a href="/">
                    <img
                      className="logo-img"
                      src={publicUrl + "assets/img/logo.jpg"}
                      alt="EMS Media"
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-4 col-lg-5">
                <form>
                  <div className="form-group searchbox hide-mobile-view tab-hide">
                    <div className="input-icons input-size">
                      <i className="fa fa-search"></i>
                      <input
                        type="text"
                        className="input-field form-control"
                        id="phone"
                        placeholder="search here..."
                        onKeyPress={this.searchChange}
                        onBlur={(e) => this.doSearch(e.target.value.trim())}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row  logo-bg-color hide-large-view1">
              <div className="col-lg-5 col-9 ">
                <div className="logo">
                  <a href="/">
                    <img
                      src={publicUrl + "assets/img/logo.jpg"}
                      alt="EMS Media"
                    />
                  </a>
                </div>
              </div>

              <div className=" col-lg-5 view-large mt-2">
                <form className="">
                  <div className="form-group searchbox ">
                    <div className="input-icons">
                      <i className="fa fa-search"></i>
                      <input
                        type="text"
                        className="input-field form-control"
                        id="phone"
                        placeholder="search here..."
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-2 ">
                <button
                  className="navbar-toggler mobile-btn hide-large-view1"
                  type="button"
                  data-toggle="collapse"
                  data-target="#shop-menu"
                >
                  <span className="navbar-toggler-icon">
                    <i className="fas fa-bars"></i>
                  </span>
                </button>
              </div>

              <nav className="navbar navbar-area navbar-expand-xl nav-style-01  hide-large-view1 ">
                <div className="container-fluid nav-container">
                  <div className="row mtop">
                    <div className="col-lg-12 order-3 order-lg-2">
                      <div className="collapse navbar-collapse" id="shop-menu">
                        <ul className="navbar-nav menu-open">
                          {mainMenu.map((item, i) => {
                            const subMenus = menus[item];
                            return (
                              <li className="menu-item-has-children" key={i}>
                                <a href="#">
                                  {item}
                                  <i className="fa fa-angle-down" />
                                </a>
                                {subMenus.length > 0 && (
                                  <ul className="sub-menu">
                                    {subMenus.map((childmenu, ch) => {
                                      const subSubMenu = childmenu.third_child;
                                      return (
                                        <li
                                          key={ch}
                                          className={
                                            subSubMenu
                                              ? "menu-item-has-children"
                                              : ""
                                          }
                                        >
                                          <a href={childmenu.url}>
                                            {childmenu.submenu}
                                          </a>
                                          {subSubMenu && (
                                            <ul
                                              className="sub-menu"
                                              id="third_menu"
                                            >
                                              {subSubMenu.map(
                                                (thirdMenu, tm) => (
                                                  <li key={tm}>
                                                    <a href={thirdMenu.url}>
                                                      {thirdMenu.thirdmenu}
                                                    </a>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          )}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              <div className="col-12 hide-large-view1 tab-top hide-large">
                <form>
                  <div className="form-group searchbox">
                    <div className="input-icons">
                      <i className="fa fa-search"></i>
                      <input
                        type="text"
                        className="input-field form-control"
                        id="phone"
                        placeholder="search here..."
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <nav className="navbar navbar-area navbar-expand-xl nav-style-01 hide-mobile-view mtwo tab-hide logo-bg-color">
            <div className="container-fluid nav-container">
              <div className="row">
                <div className="col-lg-12 order-3 order-lg-2">
                  <div className="collapse navbar-collapse" id="shop-menu">
                    <ul className="navbar-nav menu-open">
                      {mainMenu.map((item, i) => {
                        const subMenus = menus[item];
                        return (
                          <li className="menu-item-has-children" key={i}>
                            <a href="#">
                              {item}
                              <i className="fa fa-angle-down" />
                            </a>
                            {subMenus.length > 0 && (
                              <ul className="sub-menu">
                                {subMenus.map((childmenu, ch) => {
                                  const subSubMenu = childmenu.third_child;
                                  return (
                                    <li
                                      key={ch}
                                      className={
                                        subSubMenu
                                          ? "menu-item-has-children"
                                          : ""
                                      }
                                    >
                                      <a href={childmenu.url}>
                                        {childmenu.submenu}
                                      </a>
                                      {subSubMenu && (
                                        <ul
                                          className="sub-menu"
                                          id="third_menu"
                                        >
                                          {subSubMenu.map((thirdMenu, tm) => (
                                            <li key={tm}>
                                              <a href={thirdMenu.url}>
                                                {thirdMenu.thirdmenu}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
