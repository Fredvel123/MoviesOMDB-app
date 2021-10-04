import React, {useEffect, useState} from 'react'

function Movie({match}) {
  const [singleMovie, setSingleMovie] = useState([]);
  useEffect(() => {
    const getSingleMovieInfo = async () => {
      const url_info = await fetch(`http://www.omdbapi.com/?i=${match.params.imdbID}&apikey=87c0c98e`);
      const res_JSON = await url_info.json();
      setSingleMovie(res_JSON);

    }
      getSingleMovieInfo();
      console.log(singleMovie);
      // eslint-disable-next-line
  }, [match])
  return <h1>{singleMovie.Title}</h1>
}

export default Movie
