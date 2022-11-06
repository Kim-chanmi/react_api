import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ReferCont from "../include/ReferCont";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

// 클래스 컴퍼넌트 / 함수형 컴퍼넌트 --> 리액트 푹
// 변수 : 저장, 추가, 변경 --> 자동

const Reference = () => {
  const [references, setRefernces] = useState([]);

  useEffect(() => {
    fetch(
      "https://kim-chanmi.github.io/react_api/src/utils/cssReference_me.json"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setRefernces(result.cssRefer))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["reference", "book"]} />
        <ReferCont references={references} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Reference;
