import React, {Fragment, useState, useEffect, useContext} from 'react'
import { DataContext } from '../context/DataProvider';

function InputHome() {
  const { movies, setMovies, page } = useContext(DataContext);
  const [input, setInput] = useState({
      titleMovie: ""
  });
  const onChange = e => {
    const {name, value} = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name] : value
    }))
  };
  // code to get the api.
  const getApi = async () => {
    const urlInfo = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=87c0c98e&page=${page}&s=${input.titleMovie}`);
    const res_JSON = await urlInfo.json();
    setMovies(res_JSON.Search);
  }
  useEffect(() => {
    getApi();
    // eslint-disable-next-line  
  }, [])
  const sendInfo = e => {
    e.preventDefault();
    console.log(movies);
    getApi();
  }
  return (
    <Fragment>
      <form action="" onSubmit={sendInfo}>
        <input 
          type="text"
          name="titleMovie"
          placeholder="Type any movie here!"
          value={input.titleMovie}
          onChange={onChange} />
          <button>search</button>
      </form>
    </Fragment>
  );
}

export default InputHome;