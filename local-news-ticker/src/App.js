import React from 'react';
import {TimeBar} from './TimeBar';
import {Ticker} from './ticker';
import './App.css';
import { NewsStories } from './NewsStories';
import {Map} from './Map'
import { NewsApi } from './NewsApi';

class App extends React.Component {
  constructor(props){
    super(props);
    this.mapSelection = this.mapSelection.bind(this);
    this.handleNewsStories = this.handleNewsStories.bind(this);
    this.state = {
      region: 'all', 
      regionProper: 'Around the World',
      NewsStoryList: []
  }

  }
  
  mapSelection(country, region){
    this.setState({region: country})
    this.setState({regionProper: region})
  }


  handleNewsStories(country){
    NewsApi.fetchNewsStories(country).then(results=> {
      this.setState({NewsStoryList: results})})
    }

  // importNewsStories(){
  //   this.setState(NewsApi.fetchNewsStories
  // }
  
  
  render(){
  return (
    <div>
      <h1>Local News from {this.state.regionProper}</h1>
      <div className = "line"></div>
      <TimeBar  />
      <div className = "App">
        <NewsStories articles = {this.state.NewsStoryList} />
        <div className = 'verticalLine'></div>
        <Map onMapSelect = {this.mapSelection} onRegionSelect = {this.handleNewsStories}/>
      </div>
      <Ticker />
    </div>
  );
  }
}

export default App;
