import React, {createContext, useState} from 'react';
export const DataContext = createContext();

function DataProvider({children}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  return(
    <DataContext.Provider value={{
      movies, setMovies,
      page, setPage
    }}>
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider;