import React, { Component } from 'react';
import style from './InfoModal.css';

class InfoModal extends Component {

  render(){
    return (
      <div className="info-modal">
        <div className="info-modal-content">
          <span
            className="info-close"
            onClick={()=>{document.querySelector('.info-modal').style.display = "none"}}>
            ×
          </span>

          <div className="art-img"></div>

        </div>
      </div>
    );
  }
}

export default InfoModal;
