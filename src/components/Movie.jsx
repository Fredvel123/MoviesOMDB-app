import React, {useEffect, useState, Fragment} from 'react'
import HeaderTwo from './HeaderTwo';
import '../styles/singleMovie.css'
import Footer from './Footer';


function Movie({match}) {
  const [singleMovie, setSingleMovie] = useState([]);
  useEffect(() => {
    const getSingleMovieInfo = async () => {
      const url_info = await fetch(`http://www.omdbapi.com/?i=${match.params.imdbID}&apikey=87c0c98e`);
      const res_JSON = await url_info.json();
      setSingleMovie(res_JSON);
    }
      getSingleMovieInfo();
      // eslint-disable-next-line
  }, [match])
  return (
    <Fragment>
      <HeaderTwo />
      <div className="single-movie" key={singleMovie.imdbID}>
        <div className="card-single-movie">
          <img src={singleMovie.Poster} alt="" />
          <p><span>Title: </span> {singleMovie.Title}</p>
          <p><span>Resume: </span>{singleMovie.Plot}</p>
          <p><span>Released: </span>{singleMovie.Released}</p>
          <p><span>Duration: </span>{singleMovie.Runtime}</p>
          <p><span>Actors: </span>{singleMovie.Actors}</p>
          <p><span>Writers: </span>{singleMovie.Writer}</p>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Movie
