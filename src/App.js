/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import City from "./component/City";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Modal,
  Form,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Weather from "./component/Weather";
import Movies from "./component/Movies";
require('dotenv').config();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityName: "",
      show1: "none",
      show2: "none",
      lat: "0.0",
      lon: "0.0",
      show: false,
      sho: false,
      msg: "",
      weather: [],
      movies: []
    };
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value,
    });
    console.log(this.state.city);
  };

  handleClose = () => {
    this.setState({
      show: false,
      sho: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    let url = `https://eu1.locationiq.com/v1/search.php?key=pk.2cfa141171698879ce730811971fb4b9&q=${this.state.city}&format=json`;
    axios
      .get(url)
      .then((res) => {
        let data = res.data[0];
        this.setState({
          cityName: data.display_name,
          lat: data.lat,
          lon: data.lon,
          show1: "block",
        });
        this.showWeather(this.state.cityName);
        this.showMovies(this.state.cityName);
      })
      .catch((err) => {
        if (err.request) {
          this.setState({
            show: true,
          });
          console.log(err.request);
        }
      });
  };

  /*showWeather = (cityN) => {
    // eslint-disable-next-line
    let url1 = `http://localhost:8000/weather/${cityN.split(",")[0]}`;
    axios
      .get(url1)
      .then((res) => {
        let data = res.data;
        this.setState({
          date: data.map((el) => `${el.date} , `),
          desc: data.map((el) => `${el.description} , `),
          show2: "block",
        });
      })
      .catch((err) => {
        if (err.request) {
          this.setState({
            date: "",
            desc: "",
            sho: true,
            show2: "none",
          });
          console.log(err.request);
        }
      });
  };*/
  showWeather = () => {
    // eslint-disable-next-line
    let url1 = `https://city-explorer777.herokuapp.com/weather/${this.state.lat}/${this.state.lon}`;
    console.log(url1);
    axios
      .get(url1)
      .then((res) => {
        let data = res.data;
        this.setState({
          weather: data,
          show2: "block",
        });
      })
      .catch((err) => {
        if (err.request) {
          this.setState({
            date: "",
            desc: "",
            sho: true,
            show2: "none",
          });
        }
      });
  };
  showMovies = () => {
    let url1 = `https://city-explorer777.herokuapp.com/movies/${this.state.city}`;
    console.log(url1);
    axios.get(url1).then(res => {
      let data = res.data;
      console.log(data)
      this.setState({
        movies: data
      });
    }).catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <Container style={{fontFamily: "'Georama', sans-serif"}}>
        <Modal size="lg" show={this.state.show}>
          <Modal.Header closeButton onClick={this.handleClose}>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>Incorrect Entry</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal size="lg" show={this.state.sho}>
          <Modal.Header closeButton onClick={this.handleClose}>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>No Weather available</Modal.Body>
          <Modal.Footer>
            <Button style={{backgroundColor: '#FFC93C', borderColor: '#FFC93C'}} onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Row style={{color: '#99154E'}}>
          <Col>
            <Form style={{textAlign: 'center'}}
              onSubmit={(e) => {
                this.handleSubmit(e);
              }}
            >
              <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label>
                  <h2 style={{ margin: "1em 0 0.5em 0", textAlign: 'center' }}>CITY EXPLORER</h2>
                </Form.Label>
                <Form.Control
                  style={{textAlign: 'center' }}
                  size="lg"
                  type="text"
                  placeholder="Enter a City"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </Form.Group>
              <Button style={{ margin: "2em", backgroundColor: '#99154E', borderColor: '#99154E'}} type="submit">
                Search
              </Button>
            </Form>
            <City
              style={{ display: this.state.show1, margin: "2em" }}
              dis={this.state.show1}
              city={this.state.cityName}
              lat={this.state.lat}
              lon={this.state.lon}
            />
            {this.state.weather && <> {this.state.weather.map(el => (
            <Weather
              dis={this.state.show2}
              style={{margin: "0 auto"}}
              key={el.city_name}
              date={el.date}
              desc={el.description}
            />
            ))} </>}
            {this.state.movies && <> {this.state.movies.map(movie => (
            <Movies
            id={movie.key} 
            title={movie.title} 
            vote={movie.vot} 
            img={movie.img} 
            />
            ))}</> }
            
            <Image
              style={{ display: this.state.show1, margin: "0 auto", borderColor: '#99154E', borderWidth: '2px'}}
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.2cfa141171698879ce730811971fb4b9&center=${this.state.lat},${this.state.lon}&zoom=1-18&markers=45.5165,-122.6764|icon:large-blue-cutout`}
              fluid
              thumbnail
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
