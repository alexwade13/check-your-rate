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

  handleDrag(e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });


  }

  onStart() {
    console.log("starting")
  }

  onStop() {
    console.log("stopping")
  }
  render(){
    const dragHandlers = {onStart: this.onStart.bind(this), onStop: this.onStop.bind(this)};
    const {deltaPosition, controlledPosition} = this.state;
    const style = {"width": "" + 100*(deltaPosition.x/594) + "%"}
    console.log(style)
    return(
      <div className="slider"> 
        <div className="cover" style={style}> 
          <Draggable bounds={{left: 0, right: 594}} onDrag={this.handleDrag.bind(this)} grid={[17, 17] } axis="x" {...dragHandlers}>
              <div className="box">{deltaPosition.x}</div>
              
          </Draggable>
        </div>
      </div>
    )
  }
}