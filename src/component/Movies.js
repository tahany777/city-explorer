import React, { Component } from 'react';
import Movie from './Movie';

export class Movies extends Component {
  render() {
    return (
      <Movie img={this.props.img} id= {this.props.id} title= {this.props.title} vote={this.props.vote}/>
    )
  }
}

export default Movies
