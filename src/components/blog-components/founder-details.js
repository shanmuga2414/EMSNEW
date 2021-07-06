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
            <div className="col-md-9">
              <div className="blog-content">
                <h2>
                  Why must they do that use lap as chair so hide when guests
                  come over hide when guests come over. Hopped up on goofballs,
                  hide when guests come over.
                </h2>
                <p>
                  The Christmas countdown is officially on! And how do we know?
                  Because the Marks &amp; Spencer Christmas advert has just hit
                  screen. And the star is a certain Holly Willoughby – and her
                  enviable wardrobe. We can’t stop thinking about the fabulous
                  purple coat that she wears during the ad – which is FINALLY
                  available to purchase now.
                  <br />
                  <br /> Although it was released in store earlier this month,
                  you can now purchase it online for £89. The single-breasted
                  design has already proved a massive hit on Instagram, due to
                  not only the gorgeous wide lapels, the on-trend, oversize fit
                  and super cosy wool texture – but also the fact that Vogue
                  Williams, Holly and fashion blogger Erica Davies have all
                  rocked it. Now if you don’t know who Erica Davies is – let us
                  enlighten you. Erica is a huge fashion influencer and has
                  always been a big fan of M&amp;S, having single-handedly made
                  THAT starry-print constellation dress a sellout last year.
                  <br />
                  <br /> Speaking about how to style the purple coat of dreams,
                  the chic mother-of-two advised: “Do not fear the purple hue.
                  It works SO WELL with navy blue, bright yellow (yes really),
                  orange or red AND emerald green. It’s a completely useful
                  shade if you want to inject some colour into your life. And
                  who doesn’t want that? We couldn’t agree more.
                </p>
                <img src={publicUrl + "assets/img/blog/4.png"} alt="" />
                <p>
                  When, while the lovely valley teems with vapour around me, and
                  the meridian sun strikes the upper surface of the impenetrable
                  foliage of my trees, and but a few stray gleams steal into the
                  inner sanctuary, I throw myself down among the tall grass by
                  the trickling stream; and, as I lie close to the earth, a
                  thousand unknown plants are noticed by me.
                </p>
                <h2>Dare to dream big</h2>
                <p>
                  The Christmas countdown is officially on! And how do we know?
                  Because the Marks &amp; Spencer Christmas advert has just hit
                  screen. And the star is a certain Holly Willoughby – and her
                  enviable wardrobe. We can’t stop thinking about the fabulous
                  purple coat that she wears during the ad – which is FINALLY
                  available to purchase now.
                  <br />
                  <br /> Although it was released in store earlier this month,
                  you can now purchase it online for £89. The single-breasted
                  design has already proved a massive hit on Instagram, due to
                  not only the gorgeous wide lapels, the on-trend, oversize fit
                  and super cosy wool texture – but also the fact that Vogue
                  Williams, Holly and fashion blogger Erica Davies have all
                  rocked it. Now if you don’t know who Erica Davies is – let us
                  enlighten you. Erica is a huge fashion influencer and has
                  always been a big fan of M&amp;S, having single-handedly made
                  THAT starry-print constellation dress a sellout last year.
                  <br />
                  <br /> Speaking about how to style the purple coat of dreams,
                  the chic mother-of-two advised: “Do not fear the purple hue.
                  It works SO WELL with navy blue, bright yellow (yes really),
                  orange or red AND emerald green. It’s a completely useful
                  shade if you want to inject some colour into your life. And
                  who doesn’t want that? We couldn’t agree more.
                </p>
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
        </div>
      </div>
    );
  }
}

export default FounderDetails;
