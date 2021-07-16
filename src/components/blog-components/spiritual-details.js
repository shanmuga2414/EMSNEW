import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import ReactStars from "react-rating-stars-component";
import * as homeServices from "../../Services/home-page-services";

class FounderDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      
      <div className="blog-area margin-top-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
            <div className="blog-content">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="img_div img-tab">
                            <img className="spiritual_img" src={publicUrl + "assets/img/event-list/img-01.jpg"} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5>ஆன்மீக நிகழ்வுகள் 1</h5>
                        <p className="spiritual-content">இவர்கள் 1937 ஆம் ஆண்டு டிசம்பர் 20 ஆம் திகதி (ஹிஜ்ரி 1356ஆம் வ‌ருட‌ம் ஷ‌வ்வால் மாத‌ம் பிறை 16)
                         திங்க‌ட்கிழ‌மை காலை 8.30 மணிக்கு இலங்கையில் வெலிகமை எனும் ஊரில் பிறந்தார்கள். 
                         இவர்கள் கண்மணி நாயகம் ﷺ. <Link className="view" to="construction"> View detail</Link> </p>
                    </div>
                </div>
             
                <div className="row">
                    <div className="col-lg-3">
                        <div className="img_div img-tab">
                            <iframe class="iframe-spiritual" src="https://www.youtube.com/embed/Y-se4N-9jWA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5>ஆன்மீக நிகழ்வுகள் 2</h5>
                        <p className="spiritual-content">இவர்கள் 1937 ஆம் ஆண்டு டிசம்பர் 20 ஆம் திகதி (ஹிஜ்ரி 1356ஆம் வ‌ருட‌ம் ஷ‌வ்வால் மாத‌ம் பிறை 16)
                            திங்க‌ட்கிழ‌மை காலை 8.30 மணிக்கு இலங்கையில் வெலிகமை எனும் ஊரில் பிறந்தார்கள். 
                            இவர்கள் கண்மணி நாயகம் ﷺ.  <Link className="view" to="construction"> View detail</Link>  </p>

                            <Link className="btn" to="construction">View Details</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3  img-tab" >

                    </div>
                    <div className="col-lg-6">
                        <h5>ஆன்மீக நிகழ்வுகள் 3</h5>
                        <p className="spiritual-content">இவர்கள் 1937 ஆம் ஆண்டு டிசம்பர் 20 ஆம் திகதி (ஹிஜ்ரி 1356ஆம் வ‌ருட‌ம் ஷ‌வ்வால் மாத‌ம் பிறை 16) திங்க‌ட்கிழ‌மை காலை 8.30 மணிக்கு இலங்கையில் வெலிகமை எனும் ஊரில் பிறந்தார்கள். இவர்கள் கண்மணி நாயகம் ﷺ. <Link className="view" to="construction"> View detail</Link></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <div className="img_div  img-tab">
                            <iframe class="iframe-spiritual" src="https://www.youtube.com/embed/Y-se4N-9jWA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5>ஆன்மீக நிகழ்வுகள் 4</h5>
                        <p className="spiritual-content">இவர்கள் 1937 ஆம் ஆண்டு டிசம்பர் 20 ஆம் திகதி (ஹிஜ்ரி 1356ஆம் வ‌ருட‌ம் ஷ‌வ்வால் மாத‌ம் பிறை 16) திங்க‌ட்கிழ‌மை காலை 8.30 மணிக்கு இலங்கையில் வெலிகமை எனும் ஊரில் பிறந்தார்கள். இவர்கள் கண்மணி நாயகம் ﷺ. <Link className="view" to="construction"> View detail</Link></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3  img-tab">
                    
                    </div>
                    <div className="col-lg-6">
                        <h5>ஆன்மீக நிகழ்வுகள் 5</h5>
                        <p className="spiritual-content">இவர்கள் 1937 ஆம் ஆண்டு டிசம்பர் 20 ஆம் திகதி (ஹிஜ்ரி 1356ஆம் வ‌ருட‌ம் ஷ‌வ்வால் மாத‌ம் பிறை 16) திங்க‌ட்கிழ‌மை காலை 8.30 மணிக்கு இலங்கையில் வெலிகமை எனும் ஊரில் பிறந்தார்கள். இவர்கள் கண்மணி நாயகம் ﷺ. <Link className="view" to="construction"> View detail</Link></p>
                    </div>
                </div>
            </div>						
        </div>							
                <div className="author-social-area margin-top-50">
                  <div className="post-taglist">
                    <ul>
                      <li>
                        <a href="#">artical</a>
                      </li>
                      <li>
                        <a href="#">magazine</a>
                      </li>
                      <li>
                        <a href="#">lifestyle</a>
                      </li>
                      <li>
                        <a href="#">responsive</a>
                      </li>
                    </ul>
                  </div>
                  <div className="author-social-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-thumbs-o-up" /> Like{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook-f" /> Share{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" /> Tweet{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest" /> Tweet{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* reply-area start  */}

                {/* reply-area end  */}
                <br />
              
            
          </div>
        </div>
      </div>
    );
  }
}

export default FounderDetails;