import React from 'react'


export default class VideoShow extends React.Component{
  render(){

    if (this.props.currentVideo.id) {
      const embedUrl = `https://www.youtube.com/embed/${this.props.currentVideo.id.videoId}`;
      return(
        <div className="video-show">
          <iframe src={embedUrl} />
          <div>
            <h1>Title: {this.props.currentVideo.snippet.title}</h1>
            <hr/>
            <button className="channelName">{this.props.currentVideo.snippet.channelTitle}</button>
            <h3 className="description">{this.props.currentVideo.snippet.description}</h3>
          </div>
        </div>
      )
    }else{
      return <div className="video-show">Please select a video!</div>
    }

  }
}
