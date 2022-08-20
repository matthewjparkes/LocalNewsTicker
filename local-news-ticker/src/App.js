import React from 'react';
import {TimeBar} from './TimeBar';
import {Ticker} from './ticker';
import './App.css';

class App extends React.Component {
  
  
  
  render(){
  return (
    <div>
      <h1>Local News from Around the World</h1>
      <div className = "line"></div>
      <TimeBar />
      <div className = "App">
      </div>
      <Ticker />
    </div>
  );
  }
}

export default App;
