import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
export class Movie extends Component {
  render() {
    return (
      <div>
        <div style={{ width: '18rem', display: 'felx', margin: '0 auto' }}>
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
      </div>
    )
  }
}

export default Movie
