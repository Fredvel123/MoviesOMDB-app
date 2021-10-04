import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputHome from './HeaderInput';

function HomePage() {
  const [homePage, setHomePage] = useState([]);
  let movies = ["avengers", "superman",  "spider man", "thor", "captain america"];
  let randomMovie = [];
  useEffect(() =>{
    let item = movies[Math.floor(Math.random()*movies.length )];
    randomMovie.push(item);
    const getApi = async () => {
      const urlInfo = await fetch(`https://www.omdbapi.com/?apikey=87c0c98e&page=1&s=${randomMovie}`);
      const res_JSON = await urlInfo.json();
      setHomePage(res_JSON.Search);
    }
    getApi();
    // eslint-disable-next-line
  }, [])
  return (
    <Fragment>
      <InputHome />
      <div className="card-back">
        {homePage.map((item) => (
          <div key={item.imdbID} className="home-card">
            <Link to={`/movies/${item.imdbID}`}>
              <img src={item.Poster} alt="" />
              <div className="text">
                <h3>{item.Title}</h3>
                <p>See More information</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default HomePage
