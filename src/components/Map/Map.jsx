import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import style from './Map.css';

class MyMap extends Component {
  render(){
    const mapContainer = <div className="mapContainer"></div>

    const markers = this.props.markers.map((art, i) => {
      const marker = {
        position: {
          lat: parseFloat(art.lat),
          lng: parseFloat(art.lng)
        }
      }

      return <Marker
                key={i} {...marker}
                onClick={
                  ()=>{this.props.updateSelectedMarker(art), document.querySelector('.info-modal').style.display = "block"}
                  // () =>{console.log(art)}
                  // ()=>{document.querySelector('.info-modal').style.display = "block"}
                }
             />
    })

    return (
       <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap
            defaultZoom={15}
            defaultCenter={this.props.center}
            options={{streetViewControl: false, myTypeControl: false}}>
            { markers }
          </GoogleMap>
        } />
    );
  }
}

export default MyMap
