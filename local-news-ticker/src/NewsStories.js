import React from "react";
import './NewsStories.css';

export class NewsStories extends React.Component{



    render(){
        return(
            <div className = 'StoryContainer'>
                <h3>Top Stories</h3>
                <div className = 'StoryTile'>
                    <h4>{this.props.articles[0]? this.props.articles[0].title: 'No News Stories'}</h4>
                    <p>This is the story</p>
                </div>
                <div className = 'StoryTile'>
                    <h4>{this.props.articles[1]? this.props.articles[1].title: 'No News Stories'}</h4>
                    <p>This is the story</p>
                </div>
                <div className = 'StoryTile'>
                    <h4>{this.props.articles[2]? this.props.articles[2].title: 'No News Stories'}</h4>
                    <p>This is the story</p>
                </div>
            </div>
        )
    }
}