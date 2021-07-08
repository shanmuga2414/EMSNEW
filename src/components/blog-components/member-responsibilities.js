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
            <div className="col-lg-12 col-md-9">
              <div className="blog-content">
                <h2> சீடர்களின் பொறுப்புகள் </h2>
                <p>
                    உமவிய்ய ஆட்சி முடிய அப்பாஸிகள் ஆட்சி ஆரம்பமாயிற்று. அது அறிவிற்கொரு முக்கிய காலமாயிற்றெனக் கூறலாம். எல்லாம் கலைகளும் ஆங்கிருந்தே அக்காலை வெளியாயின என்பது வெள்ளிடைமலை.
                </p>
                <p>
                    அப்பாஸிய ஆட்சிக் காலத்திலே ஆட்சி வித்திரணமானதோடு மொழி விரிவும், வளர்ச்சியும் அடைந்தது. செய்யுள் நூல்கள் இயற்றுவதிலும், நூதன இலக்கியங்கள் இயற்றுவதிலும் முயற்சியெடுத்தார்கள். அப்பாஸியப் புரட்சியினால் விவேகமும், அறிவு வளர்ச்சியும் எழுத்தாளர்களைக் கொண்டு விரிவுபட்டன.
                </p>
                <p>
                    உமவிய்ய ஆட்சி முடிய அப்பாஸிகள் ஆட்சி ஆரம்பமாயிற்று. அது அறிவிற்கொரு முக்கிய காலமாயிற்றெனக் கூறலாம். எல்லாம் கலைகளும் ஆங்கிருந்தே அக்காலை வெளியாயின என்பது வெள்ளிடைமலை.
                </p>
                <p>
                    அப்பாஸிய ஆட்சிக் காலத்திலே ஆட்சி வித்திரணமானதோடு மொழி விரிவும், வளர்ச்சியும் அடைந்தது. செய்யுள் நூல்கள் இயற்றுவதிலும், நூதன இலக்கியங்கள் இயற்றுவதிலும் முயற்சியெடுத்தார்கள். அப்பாஸியப் புரட்சியினால் விவேகமும், அறிவு வளர்ச்சியும் எழுத்தாளர்களைக் கொண்டு விரிவுபட்டன.
                </p>
                <div className="container collection-banner margin-top-30">
                <div className="row">
                  <div className="col-lg-4 ">
                    <div className="img_div">
                        <img className="book_img" src={publicUrl + "assets/img/books/Irai Arulpa.jpg"} alt="" />
                       
				    	<h5 className="img-title"> இறையருட்பா </h5>
				    	<p className="img-content"> பிரபஞ்சமே ஓருடல். அதிற் காண்பன அதன் அங்கங்கள்.கடவுளெனத் தனித் தொருவன் நின்றனன். </p>
                        
                        </div>
                  </div>
                  <div className="col-lg-4">
                  <div className="img_div">
                    <img className="book_img" src={publicUrl + "assets/img/books/Iraivali Syed Moulana.jpg"} alt="" />
                    <h5 className="img-title"> இறையருட்பா </h5>
				    <p className="img-content"> பிரபஞ்சமே ஓருடல். அதிற் காண்பன அதன் அங்கங்கள்.கடவுளெனத் தனித் தொருவன் நின்றனன். </p>
                   
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                  <div className="img_div">
                    <img className="book_img" src={publicUrl + "assets/img/books/Kurunji Suvai.jpg"} alt="" />
                    <h5 className="img-title"> இறையருட்பா </h5>
				    	<p className="img-content"> பிரபஞ்சமே ஓருடல். அதிற் காண்பன அதன் அங்கங்கள்.கடவுளெனத் தனித் தொருவன் நின்றனன். </p>
                   
                  </div>
                  </div>
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
