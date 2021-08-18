import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header-v2";
import Books from "./shop-components/books";
// import Delivery from "./section-components/delivery";
// import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";
import ScrollButton from './ScrollButton';
import { Content, Heading } from './Styles';

const Book = () => {
  return (
    <div>
   
      <Navbar />
      <PageHeader headertitle="Books" />
      <Books />
      <Footer />
      <ScrollButton/>
    </div>
  );
};

export default Book;
