import React, {Fragment, useContext} from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';

function InputHome() {
  const { input, setInput } = useContext(DataContext);
  
  const onChange = e => {
    const {name, value} = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name] : value
    }))
  };
  // code to get the api.
  const sendInfo = e => {
    e.preventDefault();
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
          <Link to="/movies"><button>search</button></Link>
      </form>
    </Fragment>
  );
}

export default InputHome;