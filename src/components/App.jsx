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
      newLocation: [],
      myLat: '',
      myLng: '',
      formArtist: '',
      formImgURL: '',
      formAddress: '',
      formLat: '',
      formLng: '',
      formInfo: ''
    };
  }

  componentWillMount() {
    this.getGeoLocation();
    this.getLocations();
  }

  componentDidMount() {
    this.getLocations();
  }

  getGeoLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        myLat: position.coords.latitude,
        myLng: position.coords.longitude
      })
      // console.log(this.state.myLat, this.state.myLng)
    });
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

  updateArtist(e) {
    this.setState({
      formArtist: e.target.value,
    });
  }

  updateImgURL(e) {
    this.setState({
      formImgURL: e.target.value,
    });
  }

  updateAddress(e) {
    this.setState({
      formAddress: e.target.value,
    });
  }

  updateLat(e) {
    this.setState({
      formLat: e.target.value,
    });
  }

  updateLng(e) {
    this.setState({
      formLng: e.target.value,
    });
  }

  updateInfo(e) {
    this.setState({
      formInfo: e.target.value,
    });
  }

  handleFormSubmit() {
    console.log(this.state.formArtist)
    console.log(this.state.formImgURL)
    console.log(this.state.formAddress)
    console.log(this.state.formLat)
    console.log(this.state.formLng)
    console.log(this.state.formInfo)

    fetch('/locations', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        artist: this.state.formArtist,
        img_url: this.state.formImgURL,
        address: this.state.formAddress,
        lat: this.state.formLat,
        lng: this.state.formLng,
        info: this.state.formInfo
      })
    })
    .then(this.setState({
      formArtist: '',
      formImgURL: '',
      formAddress: '',
      formLat: '',
      formLng: '',
      formInfo: ''
    }))
    .then(this.getLocations())
    .catch(err => console.log(err));
  }

  render(){
    const location =
      {
        lat: 40.740066299999995,
        lng: -73.98968219999999
        // lat: parseFloat(this.state.myLat),
        // lng: parseFloat(this.state.myLng)
      }

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
        <PostModal
          formArtist={this.state.formArtist}
          updateArtist={event => this.updateArtist(event)}
          formImgURL={this.state.formImgURL}
          updateImgURL={event => this.updateImgURL(event)}
          formAddress={this.state.formAddress}
          updateAddress={event => this.updateAddress(event)}
          formLat={this.state.formLat}
          updateLat={event => this.updateLat(event)}
          formLng={this.state.formLng}
          updateLng={event => this.updateLng(event)}
          formInfo={this.state.formInfo}
          updateInfo={event => this.updateInfo(event)}
          handleFormSubmit={() => this.handleFormSubmit()}
        />

        <div className="map-div">
          <MyMap
            center = {location}
            markers = {this.state.artPins}
          />
        </div>

      </div>
    );
  }
}

export default App;
