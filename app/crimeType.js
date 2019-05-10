import React, { Component } from 'react';
import { render } from 'react-dom';

class CrimeType extends Component{
  constructor(props,state){
    super(props,state);
  }

  render(){
    return(
      <div style={{height: '10%', width: '100%'}}>
        <button onClick={()=>{this.props.heatMapDataChange(this.props.coordinates)}}style={{backgroundColor:'#badaff', height:'100%', width: '100%'}}><center>{this.props.typeText}</center></button>
      </div>
    )
  }
}

export default CrimeType;
