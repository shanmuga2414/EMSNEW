import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class ContactInfo extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=888 south avenue,newyork city&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
        {/* contact area start  */}
        <div className="contact-info margin-top-80">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-center">
                  <h3>CONTACT US FOR ANY QUERY</h3>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="single-contact-box">
                  <div className="row ">
                    <div className="col-xl-6 col-lg-3 col-md-4 col-3">
                      <div className="icon float-right contact-icon">
                        <i className="icon-call-header" /> 
                      </div>
                    </div>
                    <div className="col-6 Address-title-div">
                      <span className="Address-title ">Mobile</span> <br></br>
                      <a href="tel:+12345678910">+123-456-789</a> <br></br>
                      <a href="tel:+12345678911">+123456 78911</a>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-12 " id="icon2">
                <div className="single-contact-box">
                  <div className="row" >
                    <div className="col-xl-6 col-lg-3 col-md-4 col-3">
                      <div className="icon float-right contact-icon ">
                        <i className="fa fa-envelope-open" />
                      </div>
                    </div>
                    <div className="col-6 Address-title-div">
                      <span className="Address-title ">Email</span> <br></br>
                      <a href="#">contact@onlinbookshops.com</a><br></br>
                      <a href="#">support@emsmedia.com</a>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-12 contact-third-div">
                <div className="single-contact-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-3 col-md-4 col-3">
                      <div className="icon float-right contact-icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                    </div>
                    <div className="col-6 Address-title-div">
                    <span className="Address-title ">Address</span> <br></br>
                      <span>
                      888 South Avenue Street,
                      <br /> New York City, USA.
                      <br /> 
                      </span>
                    </div>
                  </div> 
                </div>
              </div>
  
            </div>
          </div>
        </div>
        {/* contact area end  */}
      </div>
    );
  }
}

export default ContactInfo;
