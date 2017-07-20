import React, { Component } from 'react';

export default class Cards extends Component {
  render() {
    let vehicles = this.props.state.vehicles.map(e => {
      return (
        <div key={e.name}>
          <h1>{e.name}</h1>
        </div>
      );
    });
    return (
      <div className="card">
        {vehicles}
      </div>
    )
  }
}