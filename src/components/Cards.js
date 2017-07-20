import React, { Component } from 'react';

export default class Cards extends Component {
  render() {
    let vehicles = this.props.state.vehicles.map(e => {
      return (
        <div key={e.name} className="card" >
          <div className="card-block">
            <h4 className="card-title">Vehicle: {e.name}</h4>
            <h5 className="card-subitle text-muted">Model: {e.model}</h5>
          </div>
          <div className="card">
          <div className="card-block">
            <h5 className="card-subitle text-muted">Specs</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Manufacturer: {e.manufacturer}</li>
              <li className="list-group-item">Class: {e.vehicle_class}</li>
              <li className="list-group-item">Passengers: {e.passengers}</li>
              <li className="list-group-item">Crew: {e.crew}</li>
              <li className="list-group-item">Length: {e.length}</li>
              <li className="list-group-item">Max Speed: {e.max_atmosphering_speed}</li>
              <li className="list-group-item">Cargo Capacity: {e.cargo_capacity}</li>
            </ul>
          </div>
          </div>
        </div>
      );
    });
    return (
      <div className="row">
        <div className="col-sm-4">
            {vehicles}
        </div>
      </div>
    )
  }
}