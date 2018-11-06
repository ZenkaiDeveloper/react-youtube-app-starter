import React from 'react'

const VideoCard = (props) =>{
  // debugger
  return(
    <div onClick={e => props.changeVideo(e, props.info)} className="video-card">
      <p>{props.info.snippet.title}</p>
      <img src={props.info.snippet.thumbnails.default.url} />
    </div>
  )
}


export default VideoCard
