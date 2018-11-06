import React, { Component } from 'react'

export default class SearchBar extends Component{
  state={
    term:""
  }


  changeHandler = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render(){
    return(
      <form onSubmit={e => this.props.submitHandler(e, this.state.term)}>

          <div className="searchbar-div">
            <input name="term" onChange={this.changeHandler} value={this.state.term} className="searchbar" type="text" />
          </div>


          <div className="searchbtn-div">
            <input className="searchbtn" value="Search" type= 'submit'></input>
          </div>

      </form>
    )
  }
}
