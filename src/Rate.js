import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';


export default class Rate extends Component {

  render(){

    const{lower, upper, phrase} = this.props
    return(<div className="half-rounded-card">
        <h4>
          {phrase}:
        </h4>
        <p >
          ${lower} - ${upper}
        </p>

      </div>)
  }
}