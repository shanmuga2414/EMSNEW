import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import SingleEvent from "./blog-components/single_event";
// import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="News and Events" />
      
      <SingleEvent />
      <Footer />
    </div>
  );
};

export default About;
