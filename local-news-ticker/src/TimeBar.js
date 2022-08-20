import React from "react";
import './TimeBar.css';

export class TimeBar extends React.Component{
    render(){
        const LondonTime = new Date()
        const LondonHours = LondonTime.getHours();
        const LondonMinutes= LondonTime.getMinutes();
        return(
        <div className="TimeBarContainer">
            <div className='TimeBar'>
                <div className='TimeSegment'>
                    <p>London: <span>{LondonHours + ':' + LondonMinutes}</span></p>
                    <div className="smallLine"></div>
                </div>
                <div className='TimeSegment'>
                    <p>New York: <span>20:15</span></p>
                    <div className="smallLine"></div>
                </div>
                <div className='TimeSegment'>
                    <p>Dubai: <span>20:15</span></p>
                    <div className="smallLine"></div>
                </div>
                <div className='TimeSegment'>
                    <p>Hong Kong: <span>20:15</span></p>
                    <div className="smallLine"></div>
                </div>
            </div>
        </div>
        )
    }
}

