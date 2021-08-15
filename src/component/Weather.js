import React, { Component } from 'react'
import WeatherDay from './WeatherDay'

export class Weather extends Component {
  render() {
    return (
      <WeatherDay date={this.props.date} desc={this.props.desc}/>  
    )
  }
}

export default Weather
