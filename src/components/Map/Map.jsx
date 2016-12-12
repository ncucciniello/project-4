import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import style from './Map.css';

class MyMap extends Component {
  render(){
    const mapContainer = <div className="mapContainer"></div>

    const markers = this.props.markers.map((art, i) => {
      const marker = {
        position: {
          lat: art.location.lat,
          lng: art.location.lng
        }
      }

      return <Marker
                key={i} {...marker}
             />
    })

    return (
      // <div>map component works</div>
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
