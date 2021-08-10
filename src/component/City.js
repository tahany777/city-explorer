import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class City extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col style={{display: this.props.dis, textAlign: 'center' }}>
              <h3>City Name: {this.props.city}</h3>
              <h4>Lat: {this.props.lat}</h4>
              <h4>Lon: {this.props.lon}</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default City;
