import React, { Component } from 'react';
import { render } from 'react-dom';

class Button extends Component{
  constructor(props,state){
    super(props,state);
  }
  render(){
    return(
      <div className='yearBtn' style={{height:'12%', marginBottom:'4px'}}>
        <button onClick={()=>{this.props.changeYear(this.props.year)}} key={this.props.year} style={{height:'100%', width:'100%', backgroundColor:'#73e6c4'}}>{this.props.year}</button>
      </div>
    )
  }
}

export default Button;
