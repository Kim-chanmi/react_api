import React from "react";

const referInfo = [
  {
    num: 1,
    name: "background",
    desc: "백그라운드 속성을 일괄적으로 설정합니다.",
    star: "★★★★★",
  },
  {
    num: 2,
    name: "align-content",
    desc: "콘텐츠 아이템의 상하관계 정렬 상태를 설정합니다.",
    star: "★☆☆☆☆",
  },
  {
    num: 3,
    name: "align-items",
    desc: "align-items는 flex나 grid의 위치를 설정합니다.",
    star: "★★★☆☆",
  },
  {
    num: 4,
    name: "align-self",
    desc: "특정 아이템의 정렬을 따로 정하고 싶을 때 사용합니다. 기본값은 align-items 속성의 값을 상속 받습니다.",
    star: "★☆☆☆☆",
  },
  {
    num: 5,
    name: "all",
    desc: "요소의 속성을 초기화 또는 상속을 설정합니다.",
    star: "★☆☆☆☆",
  },
  {
    num: 6,
    name: "animation",
    desc: "애니메이션과 관련된 속성을 일괄적으로 설정합니다.",
    star: "★★★★★",
  },
  {
    num: 7,
    name: "animation-delay",
    desc: "애니메이션 지연 시간을 설정합니다.",
    star: "★★★★★",
  },
  {
    num: 8,
    name: "animation-direction",
    desc: "애니메이션 움직임 방향을 설정합니다.",
    star: "★★★☆☆",
  },
  {
    num: 9,
    name: "animation-duration",
    desc: "애니메이션 움직임 시간을 설정합니다.",
    star: "★★☆☆☆",
  },
  {
    num: 10,
    name: "aanimation-fill-modell",
    desc: "애니메이션이 끝난 후의 상태를 설정합니다.",
    star: "★☆☆☆☆",
  },
];

const ReferText = ({ num, name, desc, star }) => {
  return (
    <li>
      <a href="/">
        <span className="num">{num}</span>
        <span className="name">{name}</span>
        <span className="desc">{desc}</span>
        <span className="star">{star}</span>
      </a>
    </li>
  );
};

const ReferCont = () => {
  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {referInfo.map((info, index) => (
              <ReferText
                key={index}
                num={info.num}
                name={info.name}
                desc={info.desc}
                star={info.star}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
