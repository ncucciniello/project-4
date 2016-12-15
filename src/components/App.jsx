// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import LogIn from './LogIn/LogIn.jsx'
import PostModal from './PostModal/PostModal.jsx';
import MyMap from './Map/Map.jsx';
import InfoModal from './InfoModal/InfoModal.jsx';

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
      formInfo: '',
      selectedArtist: '',
      selectedImg: '',
      selectedAddress: '',
      selectedInfo: ''
    };
  }

  componentWillMount() {
    this.getGeoLocation();
    this.getLocations();
  }

  // componentDidMount() {
  //   this.getLocations();
  // }

  getGeoLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        myLat: position.coords.latitude,
        myLng: position.coords.longitude
      })
      console.log(this.state.myLat, this.state.myLng)
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
    // console.log(this.state.formArtist,
    //             this.state.formImgURL,
    //             this.state.formImgURL,
    //             this.state.formAddress,
    //             this.state.formLat,
    //             this.state.formLng,
    //             this.state.formInfo)

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

  updateSelectedMarker(e) {
    this.setState({
      selectedArtist: e.artist,
      selectedImg: e.img_url,
      selectedAddress: e.address,
      selectedInfo: e.info
    });
    console.log('new selection info', this.state.selectedArtist, this.state.selectedAddress)
  }



  render(){
    const location =
      {
        // lat: 40.731410,
        // lng: -74.047910
        // GA as center
        lat: 40.740066,
        lng: -73.989682
        // // geoLocation as center
        // lat: parseFloat(this.state.myLat),
        // lng: parseFloat(this.state.myLng)
      }

    return (
      <div id="app-container">
        <header>
          <h1>Street Art Locations</h1>
          <div
            className="log-out"
            onClick={()=>{document.querySelector('.login-page').style.display = "block"}}>
            Log Out
          </div>
        </header>
        <nav>
          {/*<input className= "city-input" type="text" placeholder="Check another city" />
          <button
            className="search-button"
            onClick={()=>{document.querySelector('.login-page').style.display = "block"}}>
            Search
          </button>*/}
          <div
            className="post-button"
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
            updateSelectedMarker = {event => this.updateSelectedMarker(event)}
          />
        </div>

        <InfoModal
          selectedArtist={this.state.selectedArtist}
          selectedImg={this.state.selectedImg}
          selectedAddress={this.state.selectedAddress}
          selectedInfo={this.state.selectedInfo}
        />

        <LogIn />

      </div>
    );
  }
}
export default App
