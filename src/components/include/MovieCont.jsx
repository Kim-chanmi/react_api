import React from "react";

// const MovieText = ({ adult, backdrop_path, genre_ids, original_language }) => {
//   return (
//     <li>
//       <span>{adult}</span>
//       <span>{backdrop_path}</span>
//       <span>{genre_ids}</span>
//       <span>{original_language}</span>
//     </li>
//   );
// };

const MovieCont = ({ results }) => {
  return (
    <section className="cont_movie">
      <div className="container">
        <div className="movie__inner">
          <div className="movie_box">
            {/* {results.map((refer, idx) => (
              <MovieText
                key={idx}
                adult={refer.adult}
                backdrop_path={refer.backdrop_path}
                genre_ids={refer.genre_ids}
                original_language={refer.original_language}
              />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MovieCont;
