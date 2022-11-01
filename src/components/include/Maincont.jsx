import React from "react";

const mainInfo = [
  { text: "we provide" },
  { text: "visual coding" },
  { text: "solutions" },
  { text: "for you API" },
];

const MainText = ({ text }) => {
  return <div>{text}</div>;
};

const Maincont = () => {
  return (
    <section className="cont__main">
      <div className="container">
        <div className="main__inner">
          {mainInfo.map((text) => (
            <MainText text={text.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maincont;
