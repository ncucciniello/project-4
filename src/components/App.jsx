// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import PostModal from './PostModal/PostModal.jsx';
import MyMap from './Map/Map.jsx';

// create a React Component called _App_
class App extends Component {
  constructor() {
    super();
    this.state = {
      artPins: [],
      newLocation: []
    };
  }

  componentDidMount() {
    this.getLocations();
  }


  getLocations() {
    fetch('/locations')
    .then(r => r.json())
    .then((locations) => {
      // console.log(locations)
      this.setState({
        artPins: locations
      });
      console.log(this.state.artPins);
    })
    .catch(err => console.log(err));
  }


  // saveLocation(formInfo) {
  //   console.log('add to db', formInfo);
  //   fetch('/location', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'post',
  //     body: JSON.stringify(formInfo),
  //   })
  //   .then(this.getLocations())
  //   .catch(err => console.log('addToPlaylist error', err));
  // }

  // formHandler() {
  //   console.log('form');
  //   const formData = {
  //     artist: ,
  //     img_url: ,
  //     address: ,
  //     lat: ,
  //     lng: ,
  //     info:
  //   };
  //   this.saveLocation(formData);
  // }

  render(){
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

    const markers = [
      {
        lat: 40.7575285,
        lng: -73.9884469
      }
    ]

    return (
      <div id="app-container">
        <header>
          <h1>Street Art Locations</h1>
        </header>
        <nav>
          <input className= "city-input" type="text" placeholder="Check another city" />
          <button className="search-button">Search</button>
          <div className="post-button"
               onClick={()=>{document.querySelector('.modal').style.display = "block"}}>
            Add your findings
          </div>
        </nav>
        <PostModal />

        <div className="map-div">
          <MyMap
            center = {location}
            markers = { markers }
            markers = {this.state.artPins}
          />
        </div>

      </div>
    );
  }
}

export default App;
