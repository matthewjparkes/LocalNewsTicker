import React from 'react';
import {TimeBar} from './TimeBar';
import {Ticker} from './ticker';
import './App.css';
import { NewsStories } from './NewsStories';
import {Map} from './Map'

class App extends React.Component {
  constructor(props){
    super(props);
    this.mapSelection = this.mapSelection.bind(this);
    this.state = {
      region: 'all', 
      regionProper: 'Around the World'
  }

  }
  
  mapSelection(country, region){
    this.setState({region: country})
    this.setState({regionProper: region})
  }

  
  
  render(){
  return (
    <div>
      <h1>Local News from {this.state.regionProper}</h1>
      <div className = "line"></div>
      <TimeBar  />
      <div className = "App">
        <NewsStories />
        <div className = 'verticalLine'></div>
        <Map onMapSelect = {this.mapSelection}/>
      </div>
      <Ticker />
    </div>
  );
  }
}

export default App;
