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

function MoviePopularItem(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.moviesPopular.id}`}>
        {/* <img src="" alt="" /> */}
        <img
          src={`https://image.tmdb.org/t/p/w500${props.moviesPopular.poster_path}`}
          alt={props.original_title}
        />
        <span className="title">{props.moviesPopular.original_title}</span>
        <span className="star">{props.moviesPopular.vote_average}</span>
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
        <div className="movie__popular_inner">
          <ul>
            {props.moviesPopular.map((moviesPopular, index) => (
              <MoviePopularItem key={index} moviesPopular={moviesPopular} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MoviePopular;
