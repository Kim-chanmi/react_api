import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import AboutCont from "../include/AboutCont";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

const Unsplash = () => {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["unsplash", "reference api"]} />
        <AboutCont />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Unsplash;