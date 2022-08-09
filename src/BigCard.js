import React, { Component } from 'react';
import './BigCard.css';

export class BigCard extends Component {
  render() {
    return (
      <div className="BigCard">
          <h4>{this.props.title}</h4>
          <img src={this.props.photo} alt="" />
      </div>
    )
  }
}

export default BigCard
