import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ReferCont from "../include/ReferCont";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

function Reference() {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["reference", "book"]} />
        <ReferCont />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Reference;
