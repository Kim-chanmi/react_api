// import React from "react";

// function MoviePopularItem(props) {
//   return (
//     <li>
//       <a href={`https://www.themoviedb.org/movie/${props.popular.id}`}>
//         <img
//           src={`https://image.tmdb.org/t/p/w500/${props.popular.poster_path}`}
//           alt={props.popular.title}
//         />
//         <em>
//           <span className="title">{props.popular.title}</span>
//           <span className="star">{props.popular.vote_average}</span>
//         </em>
//       </a>
//     </li>
//   );
// }

// const MoviePopular = (props) => {
//   return (
//     <div className="movie__popular">
//       <div className="container">
//         <h2>인기영화</h2>
//         <div className="moviePopular__inner">
//           <ul>
//             {props.moviepopular.map((popular, index) => (
//               <MoviePopularItem key={index} popular={popular} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoviePopular;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

function MoviePopularItem(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.moviesPopular.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.moviesPopular.poster_path}`}
          alt={props.original_title}
        />
        <span className="title">{props.moviesPopular.original_title}</span>
        <span className="star">{props.index + 1}위</span>
      </a>
    </li>
  );
}

// 6번 : 매개변수에 담긴 값을 가져옴
function MoviePopular(props) {
  console.log(props.moviesPopular);
  return (
    <section className="cont__popular__movie">
      <div className="container">
        <div className="movie__pop">
          <div className="movie__popular_inner">인기 TOP10</div>
          <ul>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              initialSlide="1"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {props.moviesPopular.map((moviesPopular, index) =>
                index < 10 ? (
                  <SwiperSlide key={index}>
                    <MoviePopularItem
                      key={index}
                      moviesPopular={moviesPopular}
                      index={index}
                    />
                  </SwiperSlide>
                ) : null
              )}
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MoviePopular;
