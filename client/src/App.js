import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import "./components/Header.css";

import Header from "./components/Header";

const Home = () => {
  return(
    <div>home</div>
  )
}

const NewSpot = () => {
  return(
    <div>new spot</div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/"    component={Home} />
            <Route exact path="/add" component={NewSpot} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
