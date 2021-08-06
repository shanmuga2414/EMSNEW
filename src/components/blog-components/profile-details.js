import React, { Component } from "react";
import { Link } from "react-router-dom";

class FounderDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      
      <div className="blog-area margin-top-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-12"></div>
            <div className="col-lg-12 col-md-12 profile-content">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="user-div">
                        <h4 className="user3-details profile-head profile-detail">Personal Details</h4>
                            <img className="user-img" src={publicUrl + "assets/img/user.png"} alt=""/>
                            <div className="user3-details">
                                <p><span className="user-title">Name:</span> XXXX</p>
                                <p><span className="user-title">E-Mail:</span> XXXX@gmail.com</p>
                                
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="user-div user3-details">
                            <h4 className="profile-head">About</h4>
                            <div className="row ">
                              <div className="col-lg-6">
                                <div className="row profilediv margin_right">
                                  <div className="col-lg-6">
                                    <p className="user-title1">Father Name: </p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="user-title1 "> abc</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <p className="user-title1">Alternate Contact No: </p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="user-title1 "> 1234567890</p>
                                  </div>
                                </div>
                                <div className="row profilediv margin_right">
                                  <div className="col-lg-6">
                                    <p className="user-title1">Date Of Birth: </p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="user-title1 ">  21-05-1990</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <p className="user-title1">Date Of Baiyath: </p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="user-title1 ">  21-05-1990</p>
                                  </div>
                                </div>
                                
                                <div className="row profilediv margin_right">
                                  <div className="col-lg-6">
                                    <p className="user-title1">Gender: </p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="user-title1 ">  Male</p>
                                  </div>
                                </div>   
                                <div className="row">
                                  <div className="col-lg-6">
                                    <p className="user-title1">Country: </p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="user-title1 ">  India</p>
                                  </div>
                                </div>
                                <div className="row profilediv margin_right">
                                  <div className="col-lg-6">
                                    <p className="user-title1">State: </p>
                                  </div>
                                  <div className="col-lg-6">
                                    <p className="user-title1 ">  TamilNadu</p>
                                  </div>
                                </div> 
                                <div className="row">
                                  <div className="col-lg-6">
                                    <p className="user-title1">Permanent Addres: </p>
                                  </div>
                                  <div className="col-lg-6">
                                  <p className="user-title1 ">  Salem</p>
                                  </div>
                                </div>       
                              </div>
                              
                              <div className="col-lg-6">
                              <div className="row profilediv set-div-width">
                                <div className="col-lg-6">
                                  <p className="user-title1">Qualification: </p>
                                </div>
                                <div className="col-lg-6">
                                 <p className="user-title1 "> M.Sc.,m.Phil.,</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <p className="user-title1"> Contact No: </p>
                                </div>
                                <div className="col-lg-6">
                                  <p className="user-title1 "> 1234567890</p>
                                </div>
                              </div>
                              <div className="row profilediv set-div-width">
                                <div className="col-lg-6">
                                 <p className="user-title1">UG: </p>
                                </div>
                                <div className="col-lg-6">
                                  <p className="user-title1 ">  Computer Science</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                 <p className="user-title1">PG: </p>
                                </div>
                                <div className="col-lg-6">
                                  <p className="user-title1 ">  Computer Science</p>
                                </div>
                              </div>
                              <div className="row profilediv set-div-width">
                                <div className="col-lg-6">
                                  <p className="user-title1">Blood Group: </p>
                                </div>
                                <div className="col-lg-6">
                                  <p className="user-title1 ">  A1+</p>
                                </div>
                              </div>   
                              <div className="row">
                                <div className="col-lg-6">
                                 <p className="user-title1">Yaseeni: </p>
                                </div>
                                <div className="col-lg-6">
                                  <p className="user-title1 ">  abc</p>
                                </div>
                              </div>
                              <div className="row profilediv set-div-width">
                              <div className="col-lg-6">
                                <p className="user-title1">city: </p>
                              </div>
                              <div className="col-lg-6">
                               <p className="user-title1 ">  Salem</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                               <p className="user-title1">Present Address: </p>
                              </div>
                              <div className="col-lg-6">
                               <p className="user-title1 ">  Salem</p>
                              </div>
                            </div>
                      </div>
                    </div>
                           
                  </div>
                </div>			
              </div>  
                {/* reply-area start  */}

                {/* reply-area end  */}
                <br />
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}

export default FounderDetails;
