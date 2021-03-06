import React, {Fragment, useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';
import logo from '../icons/logo-icon.jpg';
import icon from '../icons/search.png';
import '../styles/header.css'

function InputHome() {
  const { input, setInput } = useContext(DataContext);
  const [icon2, setIcon2] = useState(false);
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
    console.log(input);
  }
  return (
    <Fragment>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" width="50px" />
            <p>Movie Search</p>
          </Link>
        </div>

        <form action="" onSubmit={sendInfo} className={!icon2 ? "form2" : ""}>
          <input
            type="text"
            name="titleMovie"
            placeholder="Type any movie here!"
            value={input.titleMovie}
            onChange={onChange}
          />
          <Link to="/movies">
            <button>search</button>
          </Link>
        </form>

        <div className="icon">
          <img src={icon} alt="" width="50px" onClick={() => setIcon2(!icon2)}/>
        </div>
      </header>
    </Fragment>
  );
}

export default InputHome;