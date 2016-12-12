import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import style from './Map.css';

class MyMap extends Component {
  render(){

    // const mapContainer = <div className="mapContainer"></div>
    // const markers = this.props.markers.map((marker, i) => {
    //   const marker = {
    //     position: {
    //       lat: marker.location.lat
    //       lng: marker.location.lnf
    //     }
    //   }

    //   return <Marker key={marker.id} {..marker} />
    // })

    return (
      // <div>map component works</div>
       <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap
            defaultZoom={15}
            defaultCenter={this.props.center}
            options={{streetViewControl: false, myTypeControl: false}}>
          </GoogleMap>
        } />
    );
  }
}

export default MyMap
