import React, {createContext, useState} from 'react';
export const DataContext = createContext();

function DataProvider({children}) {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState(1);
  return(
    <DataContext.Provider value={{
      movies, setMovies,
      page, setPage,
      open, setOpen
    }}>
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider;