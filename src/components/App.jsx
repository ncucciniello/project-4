// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import PostModal from './PostModal/PostModal.jsx';

// create a React Component called _App_
class App extends Component {

  render(){
    return (
      <div id="app-container">
        <header>
          <h1>THIS IS MY DOPE APP</h1>
        </header>
        <nav>
          <div
            className="post-button"
            onClick={()=>{document.querySelector('.modal').style.display = "block"}}
          >Add your findings</div>
          <input className= "city-input" type="text" placeholder="Check another city" />
          <button className="search-button">Submit</button>
        </nav>
        <PostModal />

        <div className="dummy-map">
        </div>

      </div>
    );
  }
}

export default App;
