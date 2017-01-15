import React, { Component } from 'react';
import Draggable from 'react-draggable'

export default class Frame extends Component {
    

  constructor(props) {
    super(props);

    //move represents which move state we are in. -1 is the current board.
    // 0 is the previous move, 1 the move before that, etc, till the board is at starting state
      this.state = {
        
        deltaPosition: {
          x: 0, y: 0
        },
        controlledPosition: {
          x: -400, y: 200
        }
      };
    }
  onStart() {
    console.log("starting")
  }
  onStop() {
    console.log("stopping")
  }
  render(){
    const dragHandlers = {onStart: this.onStart.bind(this), onStop: this.onStop.bind(this)};
    return(
      <div> 
        <Draggable grid={[25, 25]} {...dragHandlers}>
            <div className="box">I snap to a 25 x 25 grid</div>
        </Draggable>
      </div>
    )
  }
}