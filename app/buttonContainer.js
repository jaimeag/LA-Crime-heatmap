import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from './button.js';

class ButtonContainer extends Component{
  constructor(props,state){
    super(props,state);
  }
  render(){
    return(
      <div id='buttonContainer' style={{height: '100%', width:'20%', backgroundColor:'#9ff2db'}}>
        <Button year='2010' changeYear={this.props.changeYear}/>
        <Button year='2011' changeYear={this.props.changeYear}/>
        <Button year='2012' changeYear={this.props.changeYear} />
        <Button year='2013' changeYear={this.props.changeYear}/>
        <Button year='2014' changeYear={this.props.changeYear}/>
        <Button year='2015' changeYear={this.props.changeYear} />
        <Button year='2016' changeYear={this.props.changeYear}/>
        <Button year='2017' changeYear={this.props.changeYear}/>
      </div>
    )
  }
}

export default ButtonContainer
