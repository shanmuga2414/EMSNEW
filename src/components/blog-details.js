import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import BlogDetails from "./blog-components/blog-details";

import Footer from "./global-components/footer";
import { camelCase } from "lodash";

const About = () => {
  function toCamelCase(s) {
    return s.replace(/\w\S*/g, function (t) {
      return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
  }

  const path = window.location.href.split("/");
  console.log();
  let subtitle = path[5];
  subtitle = toCamelCase(subtitle.replace("_", " "));
  return (
    <div>
      <Navbar />
      <PageHeader headertitle={subtitle}  />
      <BlogDetails />

      <Footer />
    </div>
  );
};

export default About;
