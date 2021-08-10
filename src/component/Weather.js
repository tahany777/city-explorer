import React, { Component } from 'react'

export class Weather extends Component {
  render() {
    return (
      <div style={{ margin: '2em', color: '#FFC93C', display: this.props.dis, textAlign: 'center'}}>
        <h4>Date : {this.props.date}</h4>
        <h4>Description: {this.props.desc}</h4>
      </div>
    )
  }
}

export default Weather
