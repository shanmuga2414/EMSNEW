import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import * as homeServices from "../../Services/home-page-services";

class SingleEvent extends Component {
  state = {
    event: [],
  };

  async componentDidMount() {
    const result = await homeServices.getSingleEvent({ id: this.props.eventid });
    this.setState({ event: result.data.records || [] });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      
      <div className="blog-area margin-top-65">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="blog-content">
              <h2>
              சொற்பொழிவு
              </h2>
              <img src="http://emsmedia.net/magazine/web_control/books/image/book3.png" alt="சொற்பொழிவு" />
              <span>10-09-2020</span>
              <p>
              மௌலானா நாயகமவர்கள் இரண்டு தலையங்கத்தில் பேசினார்கள். முதற் தலையங்கம் ஹலாலும், ஹராமும், இரண்டாம் தலையங்கம் அறபு இலக்கிய 
              வளர்ச்சியும் ஆகும். இரண்டாவது தலையங்கம் 21-07-1961 இல பேசப்பட்டது. இது பல பிரசங்கங்களையுடையது. முதலில் அன்றைய அறபு மக்களின் நிலை 
              கூறப்பட்டுள்ளது. இச்சரித்திரமே இன்று மிளிர்ந்து இலக்கியமாயுள்ளது காணக் கிடைக்கிறது. இலக்கியத்தைப் பற்றி நாம் அறியத் துணிவது இலக்கியச் 
              சரித்திரமாகும். இதை மூன்று காலங்களாகப் பிரிக்கிறார்கள். 
              அஞ்ஞான காலம் உமவிய்ய ஏகாதிபத்தியம் அப்பாஸிய்ய காலம்
                </p>
               
           
                
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

export default SingleEvent;
