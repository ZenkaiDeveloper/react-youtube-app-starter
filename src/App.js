import React, { Component } from "react";
import SearchBar from "./Components/SearchBar"
import ContentContainer from "./Components/ContentContainer"
import "./App.css"

class App extends Component {
  state={
    videoArr: [],
    currentVideo: {}
  }

  getVideos = (term) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAhOhVPMm6GkQHFgJM7-pt_ldJjzrqgAdA&q=${term}&type=video`)
      .then(r=>r.json())
      .then(result=>{
        this.setState({
          videoArr : result.items
        }, ()=>{
          this.setState({
            currentVideo: this.state.videoArr[0]
          })
        })
      })
  }

  componentDidMount = ()=>{
    this.getVideos("hello")
  }

  changeVideo = (e, videoObj) =>{
    this.setState({
      currentVideo : videoObj
    })
  }

  submitHandler = (e, searchTerm)=>{
    e.preventDefault();
    this.getVideos(searchTerm)
  }


  render() {
    return (
      <div>
        <SearchBar submitHandler={this.submitHandler} />
        <ContentContainer changeVideo={this.changeVideo} currentVideo={this.state.currentVideo} videoList={this.state.videoArr} />
      </div>

    )
  }
}

export default App;
