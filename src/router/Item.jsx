import React from 'react';
import useFetch from '../customHooks/useFetch';

function Item({match}) {
  const {Data} = useFetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
  return (
    <div>
      <h1>{Data.name}</h1>
      <h1>{Data.username}</h1>
      <h1>{Data.email}</h1>
    </div>
  );
}

export default Item;
