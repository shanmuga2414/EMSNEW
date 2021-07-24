import { array } from "joi";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as homeServices from "../../Services/home-page-services";

class Navbar extends Component {
  state = {
    menus: [],
  };

  async componentDidMount() {
    const result = await homeServices.getMenu();
    const menuList = result.data.records;
    this.setState({ menus: result.data.records });
    //console.log(menuList);
    // const childItems = Object.keys(menuList);
    // childItems.map((item) => {
    //   const childs = menuList[item];
    //   childs.map((aa) => console.log(aa));
    // });

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

  render() {
    const { menus } = this.state;
    const mainMenu = Object.keys(menus);
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
    return (
      <div>
        <div className="stoon-navbar">
          <div className="header-top d-none d-block">
            <div className="container">
              <div className="row ">
                <div
                  class=""
                  className="col-lg-6 col-md-6 col-12 mt-1 hide-mobile-view"
                >
                  <span>
                    <i class="fas fa-envelope"></i>
                    <span className="text-space"> info@emsmedia.net</span>
                  </span>
                  <span class="top-contact">
                    <i class="fas fa-phone-volume"></i>{" "}
                    <span className="text-space">
                      <Link to="contact" className="color-white">
                        Contact Us
                      </Link>
                    </span>
                  </span>
                </div>
                <div className="col-lg-6 col-md-6 col-12 text-right hide-mobile-view">
                  <Link className="top-content-size color-white" to="login">
                    <i class="fas fa-sign-in-alt"></i> Login
                  </Link>
                  <span className="space">|</span>
                  <Link className="top-content-size color-white" to="register">
                    <i class="fas fa-user-plus"></i> Register
                  </Link>
                  <Link
                    to="webtv"
                    target="_blank"
                    type="button"
                    className="btn btn-sm btn-tvchannel top-content-size hide-mobile-view color-white"
                  >
                    <i className="fa fa-play-circle fa-lg" />{" "}
                    <span className="tab">EMS</span> Web TV{" "}
                    <span className="tab">Channel</span>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-12 hide-large-view">
                  <div className="row mobile-tv">
                    <div className="col-8">
                      <Link className="top-content-size color-white" to="login">
                        <i class="fas fa-sign-in-alt"></i> Login
                      </Link>
                      <span className="space">|</span>
                      <Link
                        className="top-content-size color-white"
                        to="register"
                      >
                        <i class="fas fa-user-plus"></i> Register
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link
                        to="webtv"
                        type="button"
                        className="btn btn-sm btn-tvchannel top-content-size hide-large-view"
                      >
                        <i className="fa fa-play-circle fa-lg" /> Web TV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid logo-bg-color">
            <div className="row">
              <div className="col-xl-8 col-lg-5 hide-mobile-view tab-hide">
                <div className="logo">
                  <Link to="/">
                    <img
                      class="logo-img"
                      src={publicUrl + "assets/img/logo.jpg"}
                      alt="EMS Media"
                    />
                  </Link>
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
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row  logo-bg-color hide-large-view1">
              <div className="col-lg-5 col-9 ">
                <div className="logo">
                  <Link to="/">
                    <img
                      src={publicUrl + "assets/img/logo.jpg"}
                      alt="EMS Media"
                    />
                  </Link>
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
                                <Link to="construction">
                                  மதரஸா நிறுவனர் பற்றி{" "}
                                </Link>
                              </li>
                              <li className="menu-item-has-children">
                                <Link to="construction">
                                  கல்விக்கு உதவிடுவோம்{" "}
                                </Link>
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
                                <Link to="construction"> மஹாங்களின் சரிதைகள்</Link>
                              </li>
                              <li>
                                <Link to="spiritual">
                                  {" "}
                                  வஹ்தத்துல் வுஜூத்
                                </Link>
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
                                <Link to="construction">
                                  ஐயமும் - தெளிவும்{" "}
                                </Link>
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
                                <Link to="construction">
                                  மதரஸா நிறுவனர் பற்றி
                                </Link>
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
                                <Link to="construction">
                                  கடவுளும் / படைப்பும்
                                </Link>
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
                      {/* {menus.map((menu) => ( */}

                      {mainMenu.map((item, i) => {
                        const subMenus = menus[item];
                        return (
                          <li className="menu-item-has-children">
                            <Link to="#">
                              {item}
                              {subMenus.length > 1 && (
                                <i className="fa fa-angle-down" />
                              )}
                            </Link>
                            {subMenus.length > 1 && (
                              <ul className="sub-menu">
                                {subMenus.map((childmenu) => {
                                  return (
                                    <li className="menu-item-has-children">
                                      <Link to={childmenu.url}>
                                        {childmenu.submenu}
                                      </Link>
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
