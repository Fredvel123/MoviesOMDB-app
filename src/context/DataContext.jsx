import React, {createContext, useState} from "react";
export const DataContext = createContext();

function DataProvider({children}) {
  const [count, setcount] = useState(0)
  return(
    <DataContext.Provider value={{
        count, setcount
    }}>
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider;