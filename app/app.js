import React, { Component } from 'react';
import { render } from 'react-dom';
import {Map, HeatMap, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';

class App extends Component {
  constructor(props,state){
    super(props,state);

  }
  render() {
    return (
      <div className ='MapContainer' heatData={this.props.heatMapData}>
        <Map google={this.props.google}
        zoom={10}
        initialCenter={{
          lat: 33.988255,
          lng: -118.471007
        }}
        >
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
          <HeatMap
          opacity={0.6}
          positions={this.props.heatMapData}
          radius={15}
          />
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
        </Map>
        </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyBvwSyfN_hy0cCRR7NB4qboT4oBP-qP2Zo'),
  libraries: ['visualization']
})(App)
