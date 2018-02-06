import React from "react";
import ReactDOM from "react-dom";
import TitleBar from './components/TitleBar/TitleBar';
import AccordionContainer from './containers/AccordionContainer';
import InlineSVG from 'svg-inline-react';

import './App.scss'

const URL = {
  CATEGORIES: "https://api.chucknorris.io/jokes/categories",
  JOKE: "https://api.chucknorris.io/jokes/random?category="
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={{ textAlign: "center", paddingBottom: "20px" }}><TitleBar /></div>
        <div style={{ color: "lightBlack", textAlign: "center", fontFamily: 'Heebo, sans-serif' }}>
          <InlineSVG src={require("./images/chuck_norris_cowboy.svg")} />
          <h1 style={{margin: "0px"}}>Categories</h1>
        </div>
        <AccordionContainer categoriesUrl={URL.CATEGORIES} jokeUrl={URL.JOKE} />
      </div>
    )
  }
}

export default App