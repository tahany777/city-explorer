/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import City from "./component/City";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityName: "",
      show1: "none",
      lat: "0.0",
      lon: "0.0",
      show: false.request,
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
      })
      .catch((err) => {
        if (err.request) {
          this.setState({
            show: true,
          });
          console.log(err.request);
        }
      });
    console.log(this.state.cityName);
  };
  render() {
    return (
      <div>
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
        <Form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <Form.Group className="m-3" controlId="formBasicPassword">
            <Form.Label><h1>City Explorer</h1></Form.Label>
            <Form.Control
              style={{ margin: '1em' }}
              size="lg"
              type="text"
              placeholder="Enter a City"
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </Form.Group>
          <Button style={{ margin: '2em' }} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <City
          style={{ display: this.state.show1,  margin: '2em'}}
          city={this.state.cityName}
          lat={this.state.lat}
          lon={this.state.lon}
        />
        <img
          style={{ display: this.state.show1, margin: '0 auto'}}
          src={`https://maps.locationiq.com/v3/staticmap?key=pk.2cfa141171698879ce730811971fb4b9&center=${this.state.lat},${this.state.lon}&zoom=1-18&markers=45.5165,-122.6764|icon:large-blue-cutout`}
          alt=""
        />
      </div>
    );
  }
}

export default App;
