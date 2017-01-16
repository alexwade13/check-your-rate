import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Rate from './Rate.js'
import Slider from './Slider.js'
import Draggable from 'react-draggable'

export default class Frame extends Component {

  constructor(props) {
    super(props);

      this.state = {
        loan:3000
      };
    }

    setLoan(value){
      this.setState({loan:value})
    }
    //**given functions and info
    
     
    rateCalculationNominator(interestRate, loanAmount) {
      return ((interestRate / 12) * loanAmount);
    }
     
    rateCalculationDenominator(interestRate) {
      let exp = Math.pow((1 + (interestRate / 12)), -36);
      return (1 - exp);
    }
     
    getLoanAmountInfo(loan_amount_size) {
      let RATE_RANGES = {
        interest_rate_low: 0.0632,
        interest_rate_high: 0.2666,
        origination_fee_low: 0.01,
        origination_fee_high: 0.05
      }
      return {
        loan_size: (loan_amount_size),
        monthly_payment: {
          low: (this.rateCalculationNominator(RATE_RANGES.interest_rate_low, loan_amount_size) /
            this.rateCalculationDenominator(RATE_RANGES.interest_rate_low)
          ),
          high: (this.rateCalculationNominator(RATE_RANGES.interest_rate_high, loan_amount_size) /
            this.rateCalculationDenominator(RATE_RANGES.interest_rate_high)
          )
        },
        origination_fee: {
          high: (loan_amount_size * RATE_RANGES.origination_fee_high),
          low: (loan_amount_size * RATE_RANGES.origination_fee_low)
        }
      };
    };
    //**end of given functions and info

    numberWithCommas(x) {
      let parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    render() {
      let info = this.getLoanAmountInfo.call(this,this.state.loan)
      
    	return (
          <div >

            <h1> <span className="select">Select</span> Loan Amount </h1>
            
            <hr className="dotted-infinity" ></hr> 
            <Slider setLoan={this.setLoan.bind(this)} numberWithCommas={this.numberWithCommas}/>
            <hr className="spacer"/> 
            <div id="pips">
              <span className="float-left">$3,000</span>
              <span className="float-right">$35,000</span>
            </div>


            <div className="paragraph">
              The following states have minimum loan amounts above $3,000: GA ($4,000), OH ($6,000), and MA ($7,000).
            </div>
            <Rate lower={this.numberWithCommas((info.monthly_payment.low).toFixed(0))} upper={this.numberWithCommas(info.monthly_payment.high.toFixed(0))} phrase={"Monthly Payment"}/>
            <Rate lower={this.numberWithCommas(info.origination_fee.low)} upper={this.numberWithCommas(info.origination_fee.high)} phrase={"Fee at Origination"}/>
            <Rate lower={2} upper={3} phrase={"Fixed APR"}/>

            <input type="submit" className="continue" value="Continue"></input>

            <hr className="dotted-infinity" ></hr> 
            <p className="lower-paragraph">
              Your actual Monthly Payment, Fee at Origination, and Fixed APR will be determined during the application process. This process checks your eligibility for a 3-year unsecured personal loan of the amount selected above, however if this is not available you may receive a counter-offer for a loan with a lower loan amount or for a loan that would require a cosigner.
            </p>

            <p className="lower-paragraph">
              To help the government fight the funding of terrorism and money laundering activities, Federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. As a result, under our customer identification program, we must ask for your name, street address, mailing address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents.
            </p>
          </div>
        )

    }
}