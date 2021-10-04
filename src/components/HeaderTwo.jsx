import React, {Fragment} from 'react';
import logo from '../icons/logo-icon.jpg';
import '../styles/header.css';
import { Link } from 'react-router-dom';



function HeaderTwo() {
  return (
    <Fragment>
      <header>
      <div className="logo">
          <Link to="/">
            <img src={logo} alt="" width="50px" />
            <p>Movie Search</p>
          </Link>
        </div>
      </header>
    </Fragment>
  );
}

export default HeaderTwo
