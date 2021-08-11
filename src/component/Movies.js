import React, { Component } from 'react'

export class Movies extends Component {
  render() {
    return (
      <div>
        {this.props.title}
        {this.props.vote}
        {this.props.img}
      </div>
    )
  }
}

export default Movies
