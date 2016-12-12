// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import PostModal from './PostModal/PostModal.jsx';
import MyMap from './Map/Map.jsx';

// create a React Component called _App_
class App extends Component {

  render(){
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

    // const markers = [
    //   {
    //     location: {
    //       lat: 40.7575285,
    //       lng: -73.9884469
    //     }
    //   }
    // ]

    return (
      <div id="app-container">
        <header>
          <h1>THIS IS MY DOPE APP</h1>
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
            markers = {markers}
          />
        </div>

        {/*<div className="dummy-map">
        </div>*/}

      </div>
    );
  }
}

export default App;
