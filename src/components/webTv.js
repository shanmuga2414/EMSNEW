import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header-v2";
import WebTV from "./shop-components/webTV";

import Footer from "./global-components/footer";

const WebTv = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Web TV" />
      <WebTV />
      <Footer />
    </div>
  );
};

export default WebTv;
