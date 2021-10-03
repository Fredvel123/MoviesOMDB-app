import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardsMovies from "./components/CardsMovies";
import InputHome from "./components/InputHome";
import Movie from "./components/Movie";
import DataProvider from "./context/DataProvider";
// importing components and styles css.

function Home() {
  return (
    <DataProvider>
      <Router>
        this wil be the proyect here
        <InputHome />
        <Switch>
          <Route path="/:imdbID" component={Movie}/>
        </Switch>
        <CardsMovies />

      </Router>
    </DataProvider>
  );
}
export default Home;
