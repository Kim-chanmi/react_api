// import React from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper";

function YoutubeRan({ random }) {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${random.id.videoId}`}>
        <img
          src={random.snippet.thumbnails.medium.url}
          alt={random.snippet.description}
        />
      </a>
    </li>
  );
}

const YoutubeSlider = ({ random }) => {
  return (
    <section className="youtube__popular">
      <div className="container">
        <div className="youtube__inner">
          <h2>Youtube Random</h2>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
          >
            {random.map((random, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <YoutubeRan key={index} random={random} index={index} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSlider;
