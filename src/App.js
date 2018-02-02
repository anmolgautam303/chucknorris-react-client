import React from "react";
import ReactDOM from "react-dom";
import Collapsible from 'react-collapsible';
import TitleBar from './components/TitleBar/TitleBar'

import './App.scss'

class App extends React.Component {
render() {
    return (
      <div>
        <div style={{textAlign: "center", paddingBottom: "20px"}}><TitleBar /></div>
        <div style={{color: "lightBlack", textAlign: "center", fontFamily: 'Heebo, sans-serif'}}><h1>Categories</h1></div>
        <Collapsible classParentString="App-Collapsible" trigger="Start here" onOpening={()=> alert('opening that shit...')}>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
        <Collapsible classParentString="App-Collapsible" trigger="Start here">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
      </div>
    )
  }
}

export default App