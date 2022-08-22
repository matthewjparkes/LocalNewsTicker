import React from "react";
import './NewsStories.css';

export class NewsStories extends React.Component{
    render(){
        return(
            <div className = 'StoryContainer'>
                <h3>Top Stories</h3>
                <div className = 'StoryTile'>
                    <h4>Story Title 1</h4>
                    <p>This is the story</p>
                </div>
                <div className = 'StoryTile'>
                    <h4>Story Title 2</h4>
                    <p>This is the story</p>
                </div>
                <div className = 'StoryTile'>
                    <h4>Story Title 3</h4>
                    <p>This is the story</p>
                </div>
            </div>
        )
    }
}