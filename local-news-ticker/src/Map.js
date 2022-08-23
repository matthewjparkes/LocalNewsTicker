import React from "react";
import './map.css';
import MapImage1 from './30-307132_world-map-vector-clipart-world-map-outline-png.png'

export class Map extends React.Component{
    constructor(props){
        super(props);
        
        this.handleSelection = this.handleSelection.bind(this);
        
    }

    handleSelection(e){
        let regionName;
        if(e.target.id ==='NorthAmerica'){
            regionName = 'North America'
          } else if(e.target.id ==='SouthAmerica'){
            regionName ='South America'
          } else if(e.target.id ==='Europe'){
            regionName = 'Europe'
          } else if(e.target.id ==='Asia'){
            regionName = 'Asia'
          } 
          else if(e.target.id ==='Africa'){
            regionName = 'Africa'
          } else if(e.target.id ==='Australasia'){
            regionName = 'Australasia'
          } else{ regionName = 'All Around the World'

          }
        this.props.onMapSelect(e.target.id, regionName);
        this.props.onRegionSelect(regionName);
    }
    render(){
        return (
            <div className="MapContainer">
                <img src={MapImage1} id='MapImage' alt='Map of the World'></img>
                <div className='MapBox' id ='NorthAmerica' onClick={this.handleSelection}></div>
                <div className='MapBox' id ='SouthAmerica' onClick={this.handleSelection}></div>
                <div className='MapBox' id ='Europe' onClick={this.handleSelection}></div>
                <div className='MapBox' id ='Africa' onClick={this.handleSelection}></div>
                <div className='MapBox' id ='Asia' onClick={this.handleSelection}></div>
                <div className='MapBox' id ='Australasia' onClick={this.handleSelection}></div>
            </div>

        )
    }
}