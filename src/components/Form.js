import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="card">
            <h3>What is your name, pilot?</h3>
            <form onSubmit={this.props.setPilot}>
              <input type="text" placeholder="Enter your name" name="tempValue" onKeyUp={this.props.inputAction}/>
              <br/>
              <input type="submit" value="Submit" disabled={!this.props.tempPilot} />
            </form>
            <h2>{this.props.pilot}</h2>
        </div>
      </div>
    )
  }
}