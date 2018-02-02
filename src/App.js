import React from "react";
import ReactDOM from "react-dom";
import TitleBar from './components/TitleBar/TitleBar'
import AccordionContainer from './containers/AccordionContainer'

import './App.scss'

const CATEGORY_URL = "https://api.chucknorris.io/jokes/categories"

class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "center", paddingBottom: "20px" }}><TitleBar /></div>
        <div style={{ color: "lightBlack", textAlign: "center", fontFamily: 'Heebo, sans-serif' }}><h1>Categories</h1></div>
        <AccordionContainer url={CATEGORY_URL}/>
      </div>
    )
  }
}

export default App