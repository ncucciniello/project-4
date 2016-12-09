import React, { Component } from 'react';
import style from './PostModal.css';

class PostModal extends Component {

  render(){
    return (
      <div className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={()=>{document.querySelector('.modal').style.display = "none"}}
          >×
          </span>
          <input className="input-form" id="artist-input" type="text" placeholder="Artist" />
          <input className="input-form" id="img-input" type="text" placeholder="Image URL" />
          <input className="input-form" id="location-input" type="text" placeholder="Location" />
          <textarea id="info-input" type="text" placeholder="Info on the art" />
          <button className="submit-button">Submit your find</button>

        </div>
      </div>
    );
  }
}

export default PostModal;
