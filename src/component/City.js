import React, { Component } from 'react'

export class City extends Component {
  render() {
    return (
      <div style={{ margin: '2em'}}>
        <h2>{this.props.city}</h2>
        <h3 >{this.props.lat}</h3>
        <h3>{this.props.lon}</h3>
      </div>
    )
  }
}

export default City
