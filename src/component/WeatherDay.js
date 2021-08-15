import React, { Component } from 'react'

export class WeatherDay extends Component {
  render() {
    return (
        <div style={{ margin: '2em', display: this.props.dis, textAlign: 'center', fontWeight: 'bold'}}>
        <h4>Date:<span style={{color: '#FFC93C'}}>{this.props.date}</span></h4>
        <h4>Description: <span style={{color: '#FFC93C'}}>{this.props.desc}</span></h4>
      </div>
    )
  }
}

export default WeatherDay
