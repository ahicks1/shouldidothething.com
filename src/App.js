import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div></div>
      <div className="item2">
        <header className="item item1 App-header">
          <h1 className="Title">Should You Do The Thing?</h1>
          <p className="Subtext">
            Decision making made easy <br/>
            Developed by Alexander Hicks
          </p>
          <div className="circleBorder">
            <p className="circleInner Subtext">Start</p>
          </div>
          <hr size="200"></hr>
        </header>
        </div>
      </div>
    );
  }
}

export default App;
