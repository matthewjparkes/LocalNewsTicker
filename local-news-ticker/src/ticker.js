import React from 'react';
import './ticker.css';

export class Ticker extends React.Component{
    render(){
        return(
        <div className ='TickerContainer'>
            <div className = 'LiveNews'><h3>Live News:</h3></div>
            <div className = 'Ticker'>
            </div>

        </div>
        )
    }
}