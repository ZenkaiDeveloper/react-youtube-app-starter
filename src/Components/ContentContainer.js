import React, { Component } from 'react';
import VideoShow from './VideoShow'
import VideoList from './VideoList'

export default class ContentContainer extends Component{
  render(){
    return(
      <div className="content-container">
        <VideoShow currentVideo={this.props.currentVideo} />
        <VideoList changeVideo={this.props.changeVideo} List={this.props.videoList} />
      </div>
    )
  }
}
