import React, { Component } from 'react';
import VideoCard from './VideoCard'


export default class VideoDisplay extends Component{



  makeCards = () =>{
    return this.props.List.map(video=>{
      return <VideoCard changeVideo={this.props.changeVideo} info={video} />
    })
  }

  render(){
    return(
      <div className="video-list">{this.makeCards()}</div>
    )
  }




}
