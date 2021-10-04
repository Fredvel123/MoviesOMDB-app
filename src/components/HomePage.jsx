import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputHome from './HeaderInput';

function HomePage() {
  const [homePage, setHomePage] = useState([]);
  useEffect(() =>{
    const getApi = async () => {
      const urlInfo = await fetch(`https://www.omdbapi.com/?apikey=87c0c98e&page=1&s=Avengers`);
      const res_JSON = await urlInfo.json();
      setHomePage(res_JSON.Search);
    }
    getApi();
    // eslint-disable-next-line
  }, [])
  console.log(homePage);
  return (
    <Fragment>
        <InputHome/>
      {homePage.map(item => <div key={item.imdbID} className="home-card">
          <Link to={`/movies/${item.imdbID}`}>
            <img src={item.Poster} alt="" />
            <h1>{item.Title }</h1>
          </Link>
        </div>)
      }
    </Fragment>
  );
}

export default HomePage
