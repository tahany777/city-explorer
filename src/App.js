/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import City from './component/City';
import axios from 'axios';
export class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        cityName: '',
        show: 'none'
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://eu1.locationiq.com/v1/search.php?key=pk.2cfa141171698879ce730811971fb4b9&q=${this.state.cityName}&format=json`;
    axios.get(url).then(res => {
      let data = res.data[0];
      this.setState({
        cityName: data.display_name,
        lat: data.lat,
        lon: data.lon,
        show: 'block'
      });
      
    }).catch(err => console.log(err));
    
    console.log(this.state.cityName);
  }
  handleChange = (e) => {
    this.setState({
      cityName: e.target.value
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <input type='text' placeholder='Enter a City' onChange={(e) => {this.handleChange(e)}}/>
          <input type='submit' placeholder='Search'/>
        </form>
        <City style={{display: this.state.show}} city={this.state.cityName} lat={this.state.lat} lon={this.state.lon}/>
        <img style={{display: this.state.show}} src={`https://maps.locationiq.com/v3/staticmap?key=pk.2cfa141171698879ce730811971fb4b9&center=${this.state.lat},${this.state.lon}&zoom=1-18&markers=45.5165,-122.6764|icon:large-blue-cutout`} />
      </div>
    )
  }
}

export default App

