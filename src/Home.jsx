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
        <Switch>
          <Route path="/" exact component={InputHome} />
          <Route path="/movies" exact component={CardsMovies} />
          <Route path="/movies/:imdbID" component={Movie}/>
        </Switch>
      </Router>
    </DataProvider>
  );
}
export default Home;