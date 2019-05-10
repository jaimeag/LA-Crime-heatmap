import React, { Component } from 'react';
import { render } from 'react-dom';
import CrimeType from './crimeType.js';

class CrimeTypeDisplay extends Component{
  constructor(props,state){
    super(props,state);
  }
  render(){
    //make the crime types array
    const renderArray = [];
    Object.keys(this.props.dataToRender).forEach((key)=>{
      renderArray.push(<CrimeType heatMapDataChange={this.props.heatMapDataChange} typeText={key} coordinates={this.props.dataToRender[key]}/>);
    });

    return(
      <div style={{width: '26%', height: '100%', backgroundColor: '#caffba', marginLeft:'54%', borderRadius:'10px', overflowY:'scroll'}}>
        {renderArray}
      </div>
    )
  }
}

export default CrimeTypeDisplay;
