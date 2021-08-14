import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export class Movies extends Component {
  render() {
    return (
    <div style={{ width: '18rem', display: 'felx' }}>
      <Card>
      <Card.Img variant="top" src={this.props.img} />
      <Card.Body>
        <Card.Title>{this.props.id}{this.props.title}</Card.Title>
        <Card.Text>
          Votes : {this.props.vote}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
    )
  }
}

export default Movies
