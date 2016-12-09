// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import PostModal from './PostModal/PostModal.jsx';
// import MyMap from './MapContainer/MapContainer.jsx';

// create a React Component called _App_
class App extends Component {

  render(){
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

        {/* <Map /> */}

        <div className="dummy-map">
        </div>

      </div>
    );
  }
}

export default App;
