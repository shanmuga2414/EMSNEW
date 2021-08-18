import { array } from "joi";
import React, { Component } from "react";
import { Fragment } from "react";
import { Menu, Dropdown } from "antd";
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
    if (this.props.query === query) return;

    if (e.key === "Enter") {
      this.doSearch(query);
      e.preventDefault();
    }
  };

  doSearch(query) {
    if (!query || this.props.query === query) return;
    let reload = window.location.hash.startsWith("#/search");
    window.location.hash = `#/search/${query}`;

    reload && window.location.reload();
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
                    style={{ marginRight: "15px" }}
                  >
                    <i className="fa fa-book" />{" "}
                    <span className="tab">EMS</span> Magazine{" "}
                  </a>
                  {AuthLinks()}
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
                        onKeyPress={this.searchChange}
                        onBlur={(e) => this.doSearch(e.target.value.trim())}
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

              <nav className="navbar navbar-area navbar-expand-lg nav-style-01">
                  <div className="container-fluid nav-container">
                    <div className="row">
                     
                      <div className="col-lg-6 order-3 order-lg-2">
                        <div className="collapse navbar-collapse" id="shop-menu">
                        <ul className="navbar-nav menu-open">
                      <li className="menu-item-has-children">
                        <a href="#">
                          எங்களைப் பற்றி <i className="fa fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <Link to="founder">நிறுவனர் </Link>
                            <ul className="sub-menu" id="third_menu">
                              <li>
                                <Link to="founder">வாப்பா நாயகம்</Link>
                              </li>
                              <li>
                                <Link to="founder">தந்தை நாயகம்</Link>
                              </li>
                              <li>
                                <Link to="founder">அப்பா நாயகம்</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="construction">
                              அஹ்லுல்பைத் <br />
                              (அநந்தரர்கள்)
                            </Link>
                          </li>
                          <li>
                            <Link to="construction">கொள்கைகள் </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <Link to="books">நூற்கள்</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          நிகழ்ச்சிகள் <i className="fa fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <Link to="gallery">புகைப்படங்கள்</Link>
                          </li>
                          <li>
                            <Link to="videos">காணொளி</Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="audios">ஆடியோ </Link>
                          </li>
                          <li>
                            <Link to="events">நிகழ்வுகள்</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          கல்வி <i className="fa fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <Link to="construction">
                              ஜாமீஆ யாசீன் அறபுக் கல்லூரி{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="construction">மதரஸா நிறுவனர் பற்றி </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="construction">கல்விக்கு உதவிடுவோம் </Link>
                            {/* <ul>
                            <li>
                              <a href="#"> English and Arabic brochure </a>
                            </li>
                            <li>
                              <a href="#"> தமிழ் சிற்றேடு</a>
                            </li>
                          </ul> */}
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          மனிதா <i className="fa fa-angle-down" />
                        </a>

                        <ul className="sub-menu">
                          <li>
                            <Link to="member-responsibilities">
                              மனிதனின் பொறுப்புகள்
                            </Link>
                          </li>
                          <li>
                            <Link to="construction "> மஹாங்களின் சரிதைகள்</Link>
                          </li>
                          <li>
                            <Link to="spiritual"> வஹ்தத்துல் வுஜூத்</Link>
                          </li>

                          <li className="menu-item-has-children">
                            <Link to="founder">உறுப்பினர்கள் </Link>
                            <ul className="sub-menu" id="third_menu">
                              <li>
                                <Link to="member-responsibilities">
                                  சீடர்களின் பொறுப்புகள்
                                </Link>
                              </li>
                              <li>
                                <li>
                                  <Link to="construction">
                                    உறுப்பினர்களின் செயல்பாடுகள்
                                  </Link>
                                </li>
                              </li>
                              <li>
                                <li>
                                  <Link to="blog">கலந்தாய்வு</Link>
                                </li>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="construction">நாகரீக வளர்ச்சி </Link>
                          </li>
                          <li>
                            <Link to="blog">கலந்தாய்வு </Link>
                          </li>
                          <li>
                            <Link to="construction">மகான்கள் </Link>
                          </li>
                          <li>
                            <Link to="construction">அமுத மொழிகள் </Link>
                          </li>
                          <li>
                            <Link to="construction">
                              சிந்திக்க சில நொடிகள்{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="construction">ஐயமும் - தெளிவும் </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          ஒரே உள்ளமை <i className="fa fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">ஏக உள்ளமை </a>
                            <ul className="sub-menu" id="third_menu">
                              <li>
                                <Link to="construction">ஏக காட்சி</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">அறிவுக் களஞ்சியம்</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="/contact">
                          மதரஸா <i className="fa fa-angle-down" />
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="construction">மதரஸாவைப்பற்றி</Link>
                          </li>
                          <li>
                            <Link to="construction">மதரஸா நிறுவனர் பற்றி</Link>
                          </li>
                          <li>
                            <Link to="construction">தொகுப்பு </Link>
                          </li>
                          <li>
                            <Link to="construction">பங்குகொள்ள </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <Link to="/contact">
                          அத்வைதம் <i className="fa fa-angle-down" />
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="construction">கடவுளும் / படைப்பும்</Link>
                          </li>
                          <li>
                            <Link to="construction">பிரபஜ்சவியல்</Link>
                          </li>
                          <li>
                            <Link to="construction">ஐம்பூதங்கள் </Link>
                          </li>
                          <li>
                            <Link to="construction">வேதநூற்கள் </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-8 justify-content-end d-flex order-2 order-lg-3">
                        <div className="nav-right-part">
                          
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
                        onKeyPress={this.searchChange}
                        onBlur={(e) => this.doSearch(e.target.value.trim())}
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
        </div>
      </div>
    );
  }
}

function AuthLinks() {
  let user = localStorage.getItem("user");
  user = JSON.parse(user) || {};

  if (user.id) {
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/profile">
            <i className="fas fa-user fa-fw"></i> Profile
          </Link>
        </Menu.Item>
        <Menu.Item onClick={() => logout()}>
          <Link to="/">
            <i className="fas fa-sign-out-alt fa-fw"></i> Logout
          </Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <Fragment>
        <Dropdown overlay={menu}>
          <a
            type="button"
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
          <i class="fas fa-user"></i>{user.name} <i className="fas fa-chevron-down"></i>
          </a>
        </Dropdown>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Link to="/login" className="top-content-size color-white">
        <i className="fas fa-sign-in-alt"></i> Login
      </Link>
      <span className="space">|</span>
      <Link to="/register" className="top-content-size color-white">
        <i className="fas fa-user-plus"></i> Register
      </Link>
    </Fragment>
  );
}

async function logout() {
  localStorage.removeItem("user");
  const result = await homeServices.logout();
}
export default Navbar;
