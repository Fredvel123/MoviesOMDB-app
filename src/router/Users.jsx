import React from 'react'
import useFetch from '../customHooks/useFetch';
import {Link} from 'react-router-dom';

function Users() {
  const { Data } = useFetch('https://jsonplaceholder.typicode.com/users');
  console.log(Data);  
  return (
    <div>
      <h1>User Section</h1>
      {Data.map(item => <div key={item.id}>
        <Link to={`/users/${item.id}`}>{item.name}</Link>
      </div> )}
    </div>
  );
}

export default Users
