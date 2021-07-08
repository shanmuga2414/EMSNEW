import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
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

      // Save cart
      function saveCart() {
        sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
      }

      // Load cart
      function loadCart() {
        cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
      }
      if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
      }

      // =============================
      // Public methods and propeties
      // =============================
      var obj = {};

      // Add to cart
      obj.addItemToCart = function (name, price, count, img) {
        for (var item in cart) {
          if (cart[item].name === name) {
            cart[item].count++;
            saveCart();
            return;
          }
        }
        var item = new Item(name, price, count, img);
        cart.push(item);
        saveCart();
      };
      // Set count from item
      obj.setCountForItem = function (name, count) {
        for (var i in cart) {
          if (cart[i].name === name) {
            cart[i].count = count;
            break;
          }
        }
      };
      // Remove item from cart
      obj.removeItemFromCart = function (name) {
        for (var item in cart) {
          if (cart[item].name === name) {
            cart[item].count--;
            if (cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
        }
        saveCart();
      };

      // Remove all items from cart
      obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
          if (cart[item].name === name) {
            cart.splice(item, 1);
            break;
          }
        }
        saveCart();
      };

      // Clear cart
      obj.clearCart = function () {
        cart = [];
        saveCart();
      };

      // Count cart
      obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
          totalCount += cart[item].count;
        }
        return totalCount;
      };

      // Total cart
      obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
          totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
      };

      // List cart
      obj.listCart = function () {
        var cartCopy = [];
        var i = "0";
        for (i in cart) {
          item = cart[i];
          itemCopy = {};
          for (p in item) {
            itemCopy[p] = item[p];
          }
          itemCopy.total = Number(item.price * item.count).toFixed(2);
          cartCopy.push(itemCopy);
        }
        return cartCopy;
      };

      return obj;
    })();

    // *****************************************
    // Triggers / Events
    // *****************************************
    // Add item
    $(document).on("click", ".add-to-cart", function (event) {
      event.preventDefault();
      var name = $(this).data("name");
      var img = $(this).data("img");
      var price = Number($(this).data("price"));
      shoppingCart.addItemToCart(name, price, 1, img);
      displayCart();

      $(this).prepend('<div class="succes-message">Item Added</div>');
      $(".succes-message").show(0).delay(500).hide(0);
      setTimeout(function () {
        $(".succes-message").remove();
      }, 600);
    });

    $(document).on("click", ".add-to-cart-two", function (event) {
      event.preventDefault();
      var name = $(this).data("name");
      var img = $(this).data("img");
      var price = Number($(this).data("price"));
      shoppingCart.addItemToCart(name, price, 1, img);
      displayCart();
      $(this).prepend('<div class="succes-message-v3">Item Added</div>');
      $(".succes-message-v3").show(0).delay(500).hide(0);
      setTimeout(function () {
        $(".succes-message-v3").remove();
      }, 600);
    });

    // Clear items
    $(document).on("click", ".clear-cart", function (event) {
      shoppingCart.clearCart();
      displayCart();
    });

    function displayCart() {
      var cartArray = shoppingCart.listCart();
      var output = "";
      for (var i in cartArray) {
        output +=
          "<li>" +
          '<div class="d-flex">' +
          '<div class="thumb">' +
          '<img src="' +
          publicUrl +
          cartArray[i].img +
          '" alt="">' +
          "</div>" +
          '<div class="content">' +
          '<h6 class="title"><span >' +
          cartArray[i].name +
          "</span></h6>" +
          '<span class="price">$' +
          cartArray[i].price +
          "</span>" +
          "</div>" +
          ' <div class="action">' +
          '<input type="number" disabled data-name="' +
          cartArray[i].name +
          '" value="' +
          cartArray[i].count +
          '">' +
          '<a href="#" class="remove delete-item" data-name="' +
          cartArray[i].name +
          '">Remove</a>' +
          " </div>" +
          "</div>" +
          "</li>";
      }

      $(".show-cart").html(output);
      $(".total-cart").html(shoppingCart.totalCart());
      $(".total-count").html(shoppingCart.totalCount());
    }

    // Delete item button

    $(".show-cart").on("click", ".delete-item", function (event) {
      var name = $(this).data("name");
      shoppingCart.removeItemFromCartAll(name);
      displayCart();
    });

    // Item count input
    $(".show-cart").on("change", ".item-count", function (event) {
      var name = $(this).data("name");
      var count = Number($(this).val());
      shoppingCart.setCountForItem(name, count);
      displayCart();
    });

    displayCart();
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
    return (
      <div>
        <div className="stoon-navbar">
          <div className="header-top d-none d-sm-block">
            <div className="container-fluid">
              <div className="row align-right">
                <div className="col-lg-12 col-12">
                  <a href="/">Register</a>
                  <span className="space">|</span>
                  <a href="/">Login</a>
                  <button type="button" className="btn btn-sm btn-tvchannel">
                    <i className="fa fa-play-circle fa-lg" /> EMS Web TV Channel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-grey ">
            <div className="row">
              <div className="col-lg-9">
                <div className="logo">
                  <Link to="/">
                    <img src={publicUrl + "assets/img/logo.jpg"} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3">
                <form>
                  <div className="form-group searchbox">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your search"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <nav className="navbar navbar-area navbar-expand-lg nav-style-01">
            <div className="container-fluid nav-container">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#shop-menu"
              >
                <span className="navbar-toggler-icon">
                  <i className="fas fa-bars"></i>
                </span>
              </button>
              <div className="row">
                <div className="col-lg-12 order-3 order-lg-2">
                  <div className="collapse navbar-collapse" id="shop-menu">
                    <ul className="navbar-nav menu-open">
                      <li className="menu-item-has-children">
                        <a href="#">
                          எங்களைப் பற்றி <i className="fa fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <Link to="founder">நிறுவனர்</Link>
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
                            <a href="#">
                              அஹ்லுல்பைத் <br />
                              (அநந்தரர்கள்)
                            </a>
                          </li>
                          <li>
                            <a href="/">கொள்கைகள் </a>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">
                          நூற்கள் <i className="fa fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/akarathi">அகராதி</a>
                          </li>
                          <li>
                            <a href="/ubathesa_korvai">உபதேசக் கோர்வை </a>
                          </li>
                          <li>
                            <a href="/kavithai_noolkal">கவிதை நூற்கள் </a>
                          </li>
                          <li>
                            <a href="/gnana_vilaka_noolkal">
                              ஞான விளக்க நூற்கள்{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/tamil_ilakiya_noolkal">
                              தமிழ் இலக்கிய நூல்{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/moulith_noolkal">மௌலித் நூற்கள் </a>
                          </li>
                          <li>
                            <a href="/yaseen_noolkal">
                              யாஸீன் மௌலானா(ரலி) <br />
                              நூற்கள்
                            </a>
                          </li>
                          <li>
                            <a href="/varalatru_noolkal">வரலாற்று நூற்கள் </a>
                          </li>
                          <li>
                            <a href="/vahapiya_ethirpu_noolkal">
                              வஹ்ஹாபிய்ய எதிர்ப்பு <br></br>நூற்கள்{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/varithathukkal">
                              வாரிதாதத்துக்கள் <br />
                              (இறை ஞான வெளிப்பாடு){" "}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          நிகழ்ச்சிகள் <i className="fa fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <Link to="books">புகைப்படங்கள்</Link>
                          </li>
                          <li>
                            <Link to="videos">காணொளி</Link>
                          </li>
                          <li>
                            {" "}
                            <a href="/">ஆடியோ </a>
                          </li>
                          <li>
                            <a href="# ">நிகழ்வுகள்</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          கல்வி <i className="fa fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">ஜாமீஆ யாசீன் அறபுக் கல்லூரி </a>
                          </li>
                          <li>
                            <a href="#">மதரஸா நிறுவனர் பற்றி </a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">கல்விக்கு உதவிடுவோம் </a>
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
                            <a href="#"> மஹாங்களின் சரிதைகள்</a>
                          </li>
                          <li>
                            <a href="#"> வஹ்தத்துல் வுஜூத்</a>
                          </li>

                          <li>
                            <a href="#">உறுப்பினர்கள் </a>
                            <ul className="sub-menu" id="third_menu">
                              <li>
                                <Link to="founder">சீடர்களின் பொறுப்புகள்</Link>
                              </li>
                              <li>
                                <Link to="founder">
                                  உறுப்பினர்களின் செயல்பாடுகள்
                                </Link>
                              </li>
                              <li>
                                <Link to="founder">கலந்தாய்வு</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">நாகரீக வளர்ச்சி </a>
                          </li>
                          <li>
                            <a href="#">கலந்தாய்வு </a>
                          </li>
                          <li>
                            <a href="#">மகான்கள் </a>
                          </li>
                          <li>
                            <a href="#">அமுத மொழிகள் </a>
                          </li>
                          <li>
                            <a href="#">சிந்திக்க சில நொடிகள் </a>
                          </li>
                          <li>
                            <a href="#">ஐயமும் - தெளிவும் </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          ஒரே உள்ளமை <i className="fa fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">ஏக உள்ளமை</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="#">ஏக காட்சி</a>
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
                            <Link to="founder">மதரஸாவைப்பற்றி</Link>
                          </li>
                          <li>
                            <Link to="founder">மதரஸா நிறுவனர் பற்றி</Link>
                          </li>
                          <li>
                            <Link to="founder">தொகுப்பு </Link>
                          </li>
                          <li>
                            <Link to="founder">பங்குகொள்ள </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="/contact">
                          அத்வைதம் <i className="fa fa-angle-down" />
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="founder">கடவுளும் / படைப்பும்</Link>
                          </li>
                          <li>
                            <Link to="founder">பிரபஜ்சவியல்</Link>
                          </li>
                          <li>
                            <Link to="founder">ஐம்பூதங்கள் </Link>
                          </li>
                          <li>
                            <Link to="founder">வேதநூற்கள் </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-8 justify-content-end d-flex order-2 order-lg-3">
                  <div className="nav-right-part">
                    <ul>
                      <li>
                        <a href="#" id="search">
                          <i className="icon-search" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-heart" />
                          <span className="badge">2</span>
                        </a>
                      </li>
                      <li className="has-dropdown">
                        <a href="#">
                          <i className="icon-add-to-cat" />
                          <span className="badge  total-count"></span>
                        </a>
                        <ul>
                          <span className="show-cart"></span>
                          <li>
                            <h6>
                              <span>Total price: $</span>
                              <span className="total-cart"></span>
                            </h6>
                            <div className="btn-wrapper">
                              {" "}
                              <Link to="/shoping-cart" className="btn btn-cart">
                                Go to cart
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="d-none d-lg-block">
                        <a href="#" id="navigation-button">
                          <i className="icon-bar-icon" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="responsive-mobile-menu">
                    <div
                      className="menu toggle-btn d-block d-lg-none"
                      data-toggle="collapse"
                      data-target="#shop-menu"
                      aria-expanded="false"
                      role="button"
                    >
                      <div className="icon-left" />
                      <div className="icon-right" />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
