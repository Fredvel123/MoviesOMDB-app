import React, {useContext, Fragment, useEffect} from 'react'
import { DataContext } from '../context/DataProvider';
import { Link } from 'react-router-dom';
import '../styles/cards.css'
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';
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
      <HeaderTwo />
      <div className="card-back">
        {movies
          ? movies.map((item) => (
              <div key={item.imdbID} className="home-card">
                <Link to={`/movies/${item.imdbID}`}>
                  <img src={item.Poster} alt="" />
                  <div className="text">
                    <h3>{item.Title}</h3>
                    <p>See More information</p>
                  </div>
                </Link>
              </div>
            ))
          : null}
      </div>
      <Footer/>
    </Fragment>
  );
}

export default CardsMovies;
