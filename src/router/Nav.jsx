import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../context/DataContext';

function Nav() {
  const {count} = useContext(DataContext);
    return (
        <div className="nav">
          <Link to="/"> <li>React Router</li></Link>
          {count}
          <div className="menu">
            <Link to="/about"> <li>About</li></Link>
            <Link to="/users"><li>Users</li></Link>
          </div>
        </div>
    )
}

export default Nav
