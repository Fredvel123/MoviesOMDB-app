import React, {useContext, Fragment, useEffect} from 'react'
import { DataContext } from '../context/DataProvider';
import { Link } from 'react-router-dom';
import HeaderInput from './HeaderInput'
function CardsMovies() {
  const { movies, setMovies, input, page } = useContext(DataContext);
  useEffect(() =>{
    const getApi = async () => {
      const urlInfo = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=87c0c98e&page=${page}&s=${input.titleMovie}`);
      const res_JSON = await urlInfo.json();
      setMovies(res_JSON.Search);
    }
    getApi();
    // eslint-disable-next-line
  }, [])
  return (
    <Fragment>
      <HeaderInput/>
      {movies 
        ? movies.map(item => (
            <div key={item.imdbID} className="home-card">
              <Link to={`/movies/${item.imdbID}`}>
                <img src={item.Poster} alt="" />
                <h1>{item.Title}</h1>
              </Link>
            </div>
          ))
        : null}
    </Fragment>
  );
}

export default CardsMovies;
