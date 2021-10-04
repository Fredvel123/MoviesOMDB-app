import React, {useContext, Fragment, useEffect} from 'react'
import { DataContext } from '../context/DataProvider';
import { Link } from 'react-router-dom';
function CardsMovies({match}) {
  console.log(match);
  const { movies, setMovies, input, page } = useContext(DataContext);
  useEffect(() =>{
    const getApi = async () => {
      const urlInfo = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=87c0c98e&page=${page}&s=${input.titleMovie}`);
      const res_JSON = await urlInfo.json();
      setMovies(res_JSON.Search);
    }
    getApi();
    
  }, [])
  return (
    <Fragment>
      {movies 
        ? movies.map(item => (
            <div key={item.imdbID} >
              <Link to={`/movies/${item.imdbID}`}>
                <img src={item.Poster} alt="" />
              </Link>
            </div>
          ))
        : null}
    </Fragment>
  );
}

export default CardsMovies;
