import React, { Component } from 'react'

export class Movies extends Component {
  render() {
    return (
      <div>
        <h1>ID: {this.props.key}</h1>
        <h2>Title: {this.props.title}</h2>
        <h3>Votes: {this.props.vote}</h3>
        <img src={this.props.img} alt=""/>
      </div>
    )
  }
}

export default Movies
