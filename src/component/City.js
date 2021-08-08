import React, { Component } from 'react'

export class City extends Component {
  render() {
    return (
      <div>
        {this.props.city}
        {this.props.lat}
        {this.props.lon}
      </div>
    )
  }
}

export default City
