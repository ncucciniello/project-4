import React, { Component } from 'react';
import style from './InfoModal.css';

class InfoModal extends Component {

  render(){
    return (
      <div className="info-modal">
        <div className="info-modal-content">

          <div className="art-img"></div>

          <div className="info-box">

            <div className="info-content">
              <span
              className="info-close"
              onClick={()=>{document.querySelector('.info-modal').style.display = "none"}}>
              ×
              </span>
              <h2>ArtistName</h2>
              <h3>Location Address</h3>
              <h6>
                Sample Info Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation
              </h6>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default InfoModal;
