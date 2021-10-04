import React, {useEffect, useState, Fragment} from 'react'
import { Link } from 'react-router-dom';
import InputHome from './InputHome';
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
      <InputHome/>
      <div className="single-movie" key={singleMovie.imdbID}>
        <img src={singleMovie.Poster} alt="" />
        <h1>{singleMovie.Title}</h1>
        <h1>{singleMovie.Plot}</h1>
        <h1>{singleMovie.Released}</h1>
        <h1>{singleMovie.Runtime}</h1>
        <h1>{singleMovie.Actors}</h1>
        <h1>{singleMovie.Writer}</h1>
      </div>
      <Link to="/">Back to home page</Link>
    </Fragment>
  );
}

export default Movie
