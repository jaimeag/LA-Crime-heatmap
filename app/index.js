import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import App from './app.js';
import {HeatMap} from 'google-maps-react';
import ButtonContainer from './buttonContainer.js';
import CrimeTypeDisplay from './crimeTypeDisplay.js';

class Container extends Component{
  constructor(props, state){
    super(props,state);
    const that = this;
    this.state = {
      dataToRender: {},
      heatMapData: [],
      map: [<App  heatMapData={[{lat: 33.988255,lng: -118.471007}]}/>],
      changeYear: (year) =>{
        axios.get(`http://localhost:3000/year/${year}`)
        .then((response)=>{
          this.setState({
            dataToRender: response.data
          });
        });;
      },
      heatMapDataChange:(data) =>{
        this.setState({heatMapData: data})
        if(Array.isArray(that.state.map)){
          this.setState({map: <App heatMapData={data}/>});
        }else{
          this.setState({map: [<App heatMapData={data}/>]})
        }

      },

    }
  }
  render(){
    return(
      <div id='Container' style={{display:'flex', backgroundColor:'#cdfff0', width:'98%',height:'98%', borderRadius:'10px', position:'absolute'}}>
        <ButtonContainer changeYear={this.state.changeYear} />
        {this.state.map}
        <CrimeTypeDisplay heatMapDataChange={this.state.heatMapDataChange} dataToRender={this.state.dataToRender}/>
      </div>
    )
  }
}

render(<Container />,document.getElementById('app'));
