import React, { Component } from 'react';
import Draggable from 'react-draggable'

export default class Frame extends Component {
    

  constructor(props) {
    super(props);

      this.state = {
        
        deltaPosition: {
          x:0,y:-16
          
        },
        bounds:{
          max:620, min:0
        }
        
      };
  }

  handleDrag(e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y:y
      }
    },()=>{
      let loan = this.calculateLoan.call(this,this.state.deltaPosition.x)
      this.props.setLoan(loan)
    
    });
  }


  calculateLoan(value){
    let interval = this.state.bounds.max / 32 //the amount of discrete values in the slide bar
    console.log(interval,"interval",value, this.state.bounds.max)
    let notch = Math.round(value / interval)
    let ret = notch * 1000 + 3000
    return ret
  }

  updateDimensions() {

    this.setState({width: document.body.clientWidth});


    let sliderWidth = document.getElementById('slider').clientWidth
    
    this.setState({deltaPosition:{x:0,y:this.state.deltaPosition.y},bounds:{max:sliderWidth*.85,min:this.state.bounds.min}})
  }

  componentWillMount() {
    //adds an even for every time the window changes size
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }


  render(){
    const {deltaPosition} = this.state;
    const style = {"width": "" + 100*(deltaPosition.x/(this.state.bounds.max)) + "%"};
    const {max} = this.state.bounds    
    return(
      <div id="slider" className="slider"> 
        <div className="cover" style={style}> 
          <Draggable className="drag" position={deltaPosition} bounds={{left: this.state.bounds.min, right: max}} onDrag={this.handleDrag.bind(this)} grid={[max/32, max/32] } axis="x">
              <div className="box">${this.props.numberWithCommas(this.calculateLoan.call(this,deltaPosition.x))}</div>
              
          </Draggable>
        </div>
      </div>
    )
  }
}