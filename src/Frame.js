import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Rate from './Rate.js'
import Slider from './Slider.js'
import Draggable from 'react-draggable'

export default class Frame extends Component {

  constructor(props) {
    super(props);

    //move represents which move state we are in. -1 is the current board.
    // 0 is the previous move, 1 the move before that, etc, till the board is at starting state
      this.state = {
        activeDrags: 0,
        deltaPosition: {
          x: 0, y: 0
        },
        controlledPosition: {
          x: -400, y: 200
        }
      };
    }

    

    render() {
      
    	return (
          <div >

            <h1> Select Loan Amount </h1>
            
            <hr className="dotted-infinity" ></hr> 
            <Slider/>
            <hr className="spacer"/> 
            
            <p className="paragraph">
              The following states have minimum loan amounts above $3,000: GA ($4,000), OH ($6,000), and MA ($7,000).
            </p>
            <Rate lower={2} upper={3} phrase={"Monthly Payment"}/>
            <Rate lower={2} upper={3} phrase={"Fee at Origination"}/>
            <Rate lower={2} upper={3} phrase={"Fixed APR"}/>

            <input type="submit" className="continue" value="Continue"></input>

            <hr className="dotted-infinity" ></hr> 
            <p className="paragraph">
              Your actual Monthly Payment, Fee at Origination, and Fixed APR will be determined during the application process. This process checks your eligibility for a 3-year unsecured personal loan of the amount selected above, however if this is not available you may receive a counter-offer for a loan with a lower loan amount or for a loan that would require a cosigner.
            </p>

            <p className="paragraph">
              To help the government fight the funding of terrorism and money laundering activities, Federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. As a result, under our customer identification program, we must ask for your name, street address, mailing address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents.
            </p>
          </div>
        )

    }
}