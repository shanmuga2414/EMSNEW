import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
class BlogDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
      <div className="blog-area margin-top-65">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-md-9">
		        <div className="blog-content">
		          <h2>குத்புல் அக்தாப் ஜமாலிய்யா அஸ்ஸெய்யித்...</h2>
				  <img src={publicUrl + "assets/img/books/img-01.jpg"} alt="" />
				  
				  <p>உமவிய்ய ஆட்சி முடிய அப்பாஸிகள் ஆட்சி ஆரம்பமாயிற்று. அது அறிவிற்கொரு முக்கிய காலமாயிற்றெனக் கூறலாம். எல்லாம் கலைகளும் ஆங்கிருந்தே அக்காலை வெளியாயின என்பது வெள்ளிடைமலை.</p>
		         	<p>அப்பாஸிய ஆட்சிக் காலத்திலே ஆட்சி வித்திரணமானதோடு மொழி விரிவும், வளர்ச்சியும் அடைந்தது. செய்யுள் நூல்கள் இயற்றுவதிலும், நூதன இலக்கியங்கள் இயற்றுவதிலும் முயற்சியெடுத்தார்கள். அப்பாஸியப் புரட்சியினால் விவேகமும், அறிவு வளர்ச்சியும் எழுத்தாளர்களைக் கொண்டு விரிவுபட்டன.</p> 

					 <h2>குத்புல் அக்தாப் ஜமாலிய்யா அஸ்ஸெய்யித்...</h2>
					 <img src={publicUrl + "assets/img/books/img-01.jpg"} alt="" />
					 <p>உமவிய்ய ஆட்சி முடிய அப்பாஸிகள் ஆட்சி ஆரம்பமாயிற்று. அது அறிவிற்கொரு முக்கிய காலமாயிற்றெனக் கூறலாம். எல்லாம் கலைகளும் ஆங்கிருந்தே அக்காலை வெளியாயின என்பது வெள்ளிடைமலை.</p>
						<p>அப்பாஸிய ஆட்சிக் காலத்திலே ஆட்சி வித்திரணமானதோடு மொழி விரிவும், வளர்ச்சியும் அடைந்தது. செய்யுள் நூல்கள் இயற்றுவதிலும், நூதன இலக்கியங்கள் இயற்றுவதிலும் முயற்சியெடுத்தார்கள். அப்பாஸியப் புரட்சியினால் விவேகமும், அறிவு வளர்ச்சியும் எழுத்தாளர்களைக் கொண்டு விரிவுபட்டன.</p> 
					 
						<h2>குத்புல் அக்தாப் ஜமாலிய்யா அஸ்ஸெய்யித்...</h2>
				  <img src={publicUrl + "assets/img/books/img-01.jpg"} alt="" />
				  <p>உமவிய்ய ஆட்சி முடிய அப்பாஸிகள் ஆட்சி ஆரம்பமாயிற்று. அது அறிவிற்கொரு முக்கிய காலமாயிற்றெனக் கூறலாம். எல்லாம் கலைகளும் ஆங்கிருந்தே அக்காலை வெளியாயின என்பது வெள்ளிடைமலை.</p>
		         	<p>அப்பாஸிய ஆட்சிக் காலத்திலே ஆட்சி வித்திரணமானதோடு மொழி விரிவும், வளர்ச்சியும் அடைந்தது. செய்யுள் நூல்கள் இயற்றுவதிலும், நூதன இலக்கியங்கள் இயற்றுவதிலும் முயற்சியெடுத்தார்கள். அப்பாஸியப் புரட்சியினால் விவேகமும், அறிவு வளர்ச்சியும் எழுத்தாளர்களைக் கொண்டு விரிவுபட்டன.</p> 
				  
					 <h2>குத்புல் அக்தாப் ஜமாலிய்யா அஸ்ஸெய்யித்...</h2>
				  <img src={publicUrl + "assets/img/books/img-01.jpg"} alt="" />
				  <p>உமவிய்ய ஆட்சி முடிய அப்பாஸிகள் ஆட்சி ஆரம்பமாயிற்று. அது அறிவிற்கொரு முக்கிய காலமாயிற்றெனக் கூறலாம். எல்லாம் கலைகளும் ஆங்கிருந்தே அக்காலை வெளியாயின என்பது வெள்ளிடைமலை.</p>
		         	<p>அப்பாஸிய ஆட்சிக் காலத்திலே ஆட்சி வித்திரணமானதோடு மொழி விரிவும், வளர்ச்சியும் அடைந்தது. செய்யுள் நூல்கள் இயற்றுவதிலும், நூதன இலக்கியங்கள் இயற்றுவதிலும் முயற்சியெடுத்தார்கள். அப்பாஸியப் புரட்சியினால் விவேகமும், அறிவு வளர்ச்சியும் எழுத்தாளர்களைக் கொண்டு விரிவுபட்டன.</p> 
					 <div className="container collection-banner margin-top-30">
					 <div className="row">
					   <div className="col-lg-4 ">
						 <div className="img_div">
							 <img className="book_img" src={publicUrl + "assets/img/books/Irai Arulpa.jpg"} alt="" />
							
							 <h5 className="img-title"> இறையருட்பா </h5>
							 <p className="img-content"> பிரபஞ்சமே ஓருடல். அதிற் காண்பன அதன் அங்கங்கள். கடவுளெனத்...  </p>
							 
							 </div>
					   </div>
					   <div className="col-lg-4">
					   <div className="img_div">
						 <img className="book_img" src={publicUrl + "assets/img/books/Iraivali Syed Moulana.jpg"} alt="" />
						 <h5 className="img-title"> இறைவலிய் ஸெய்யித்... </h5>
						 <p className="img-content">எம் தந்தை நாயகம் ஜமாலிய்யா ஸெய்யித் யாஸீன் மௌலானா அல்ஹாஷிமிய் ரலியல்லாஹு... </p>
						
						 </div>
					   </div>
					   <div className="col-lg-4 ">
					   <div className="img_div">
						 <img className="book_img" src={publicUrl + "assets/img/books/Kurunji Suvai.jpg"} alt="" />
						 <h5 className="img-title"> குறிஞ்சிச் சுவை </h5>
							 <p className="img-content"> எங்கணுமழகு, சுற்றிப் பார்க்குமிடனெல்லாம் சுவைதரும் எழிற் காட்சிகள். பலப்பல...         </p>
						
					   </div>
					   </div>
					 </div>
				   </div>
					 <div className="author-social-area margin-top-50">
		            <div className="post-taglist">
		              <ul>
		                <li><a href="#">artical</a></li>
		                <li><a href="#">magazine</a></li>
		                <li><a href="#">lifestyle</a></li>
		                <li><a href="#">responsive</a></li>
		              </ul>
		            </div>
		            <div className="author-social-list">
		              <ul>
		                <li><a href="#"><i className="fa fa-thumbs-o-up" /> Like </a></li>
		                <li><a href="#"><i className="fa fa-facebook-f" /> Share </a></li>
		                <li><a href="#"><i className="fa fa-twitter" /> Tweet </a></li>
		                <li><a href="#"><i className="fa fa-pinterest" /> Tweet </a></li>
		              </ul>
		            </div>
		          </div>
		          <div className="user-comment">
		            <div className="d-flex">
		              <div className="thumb mt-3">
		                <img src={publicUrl+"assets/img/blog/5.png"} alt="" />
		              </div>
		              <div className="content mt-3">
		                <h4 className="name">Published by Jeremy Harville</h4>
		                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incidide ut labore dolore. incididunt ut labore et dolore. Neque turpis vitae eros praesent varius. Egestas a congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae urna blandit vitae massa placerat vulputate et magnis sapien</p>
		                <ul>
		                  <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
		                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
		                  <li><a href="#"><i className="fa fa-instagram" /></a></li>
		                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
		                  <li><a href="#"><i className="fa fa-youtube" /></a></li>
		                </ul>
		              </div>
		            </div>
		          </div>
		          <div className="read-more-area">
		            <span>Read More</span>
		            <a href="#">The Versatile Flat Shoe Style That’s Probably Missing From Your Wardrobe</a>
		            <a href="#">I’m Happy This Comfortable Trend Is Still Going to Be Cool in 2019</a>
		          </div>
		          <div className="prev-next-post margin-top-50">
		            <div className="d-md-flex">
		              <div className="prev-post">
		                <a href="#"><i className="fa fa-angle-left" aria-hidden="true" /> Previous Post</a>
		                <h6>The Versatile Flat Shoe Style That’s Probably Missing From Your Wardrobe</h6>
		              </div>
		              <div className="next-post">
		                <a href="#">Next Post <i className="fa fa-angle-right" aria-hidden="true" /></a>
		                <h6>I’m Happy This Comfortable Trend Is Still Going to Be Cool in 2020</h6>
		              </div>
		            </div>
		          </div>
		          <div id="comments" className="comments-area comments-area-wrapper">
		            <h4 className="comments-title">Comment</h4>
		            <ul className="comment-list">
		              <li className="comment">
		                <div className="single-comment justify-content-between d-flex">
		                  <div className="user justify-content-between d-flex">
		                    <div className="thumb">
		                      <img alt="" src={publicUrl+"assets/img/blog/6.png"} className="avatar" />
		                    </div>
		                    <div className="desc">
		                      <div className="d-flex justify-content-between comment_title">
		                        <h5>Christopher F. Perry</h5>  
		                        <a href><i className="fa fa-share-square-o" /> Reply</a>
		                      </div>
		                      <div className="comment-content">
		                        <p>Sausage ribeye porchetta sirloin shank, pork belly kielbasa. Picanha brisket tenderloin sirloin prosciutto corned beef shank. Porchetta sirloin shank, pork belly kielbasa.</p>
		                      </div>
		                      <span className="date">May 1, 2019 at 6:36 am</span>
		                    </div>
		                  </div>
		                </div>
		                <ul className="children">
		                  <li className="comment">
		                    <div className="single-comment justify-content-between d-flex">
		                      <div className="user justify-content-between d-flex">
		                        <div className="thumb">
		                          <img alt="" src={publicUrl+"assets/img/blog/7.png"} className="avatar" /> 
		                        </div>
		                        <div className="desc">
		                          <div className="d-flex justify-content-between comment_title">
		                            <h5>Sally Greer</h5>
		                            <a href><i className="fa fa-share-square-o" /> Reply</a>
		                          </div>
		                          <div className="comment-content">
		                            <p>Sausage ribeye porchetta sirloin shank, pork belly kielbasa. Picanha brisket tenderloin sirloin prosciutto corned beef shank.</p>
		                          </div>
		                          <span className="date">May 1, 2019 at 6:36 am</span>
		                        </div>
		                      </div>
		                    </div>
		                  </li>
		                </ul>
		              </li>
		              <li className="comment">
		                <div className="single-comment justify-content-between d-flex">
		                  <div className="user justify-content-between d-flex">
		                    <div className="thumb">
		                      <img alt="" src={ publicUrl+"assets/img/blog/8.png"} className="avatar" />
		                    </div>
		                    <div className="desc">
		                      <div className="d-flex justify-content-between comment_title">
		                        <h5>Jhon Rozario</h5>
		                        <a href><i className="fa fa-share-square-o" /> Reply</a>
		                      </div>
		                      <div className="comment-content">
		                        <p>Sausage ribeye porchetta sirloin shank, pork belly kielbasa. Picanha brisket tenderloin sirloin prosciutto corned beef shank.</p>
		                      </div>
		                      <span className="date">May 1, 2019 at 6:36 am</span>
		                    </div>
		                  </div>
		                </div>
		              </li>
		            </ul>
		          </div>
		          {/* reply-area start  */}
		          <div className="reply-area">
		            <h5 className="text-uppercase">LEAVE A REPLY</h5>
		            <span>Your email address will not be published. Required fields are marked *</span>
		            <form>
		              <div className="form-row margin-bottom-10">
		                <div className="col">
		                  <input type="text" className="form-control" placeholder="Name" />
		                </div>
		                <div className="col">
		                  <input type="email" className="form-control" placeholder="Email" />
		                </div>
		                <div className="col">
		                  <input type="text" className="form-control" placeholder="Website" />
		                </div>
		              </div>
		              <div className="form-group margin-bottom-10">
		                <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} placeholder="Comment" defaultValue={""} />
		              </div>
		              <div className="form-check margin-top-30">
		                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
		                <label className="form-check-label" htmlFor="exampleCheck1">Save my name, email, and website in this browser for the next time I comment.</label>
		              </div>
		              <button type="submit" className="btn btn-submit text-uppercase">Post a comment</button>
		            </form>
		          </div>
		          {/* reply-area end  */}
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

    )
  }
}

export default BlogDetails;
