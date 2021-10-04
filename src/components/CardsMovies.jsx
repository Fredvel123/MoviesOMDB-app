import React, {useContext, Fragment} from 'react'
import { DataContext } from '../context/DataProvider';
import { Link } from 'react-router-dom';
function CardsMovies() {
  const { movies,open } = useContext(DataContext);
  console.log(movies);
  return (
    <Fragment>
      {movies && open
        ? movies.map(item => (
            <div key={item.imdbID}>
              <Link to={`/${item.imdbID}`}>
                <img src={item.Poster} alt="" />
              </Link>
            </div>
          ))
        : null}
    </Fragment>
  );
}

export default CardsMovies;
