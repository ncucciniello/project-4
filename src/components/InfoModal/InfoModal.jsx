import React, { Component } from 'react';
import style from './InfoModal.css';

class InfoModal extends Component {

  render(){
    return (
      <div className="info-modal">
        <div className="info-modal-content">

          <div className="art-img">
            <img src={this.props.selectedImg} />
          </div>

          <div className="info-box">

            <div className="info-content">
              <span
              className="info-close"
              onClick={()=>{document.querySelector('.info-modal').style.display = "none"}}>
              ×
              </span>
              <h2>{this.props.selectedArtist}</h2>
              <h3>{this.props.selectedAddress}</h3>
              <p className='info-tag'>{this.props.selectedInfo}</p>
              <div className="like-button"></div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default InfoModal;
