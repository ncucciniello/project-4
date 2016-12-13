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

          <input
            className="input-form"
            id="artist-input"
            type="text"
            placeholder="Artist"
            name="formArtist"
            value={this.props.formArtist}
            onChange={this.props.updateArtist}
          />
          <input
            className="input-form"
            id="img-input"
            type="text"
            placeholder="Image URL"
            name="formImgURL"
            value={this.props.formImgURL}
            onChange={this.props.updateImgURL}
          />
          <input
            className="input-form"
            id="address-input"
            type="text"
            placeholder="Address"
            name="formAddress"
            value={this.props.formAddress}
            onChange={this.props.updateAddress}
          />
          <input
            className="input-form"
            id="lat-input"
            type="text"
            placeholder="Latitude"
            name="formLat"
            value={this.props.formLat}
            onChange={this.props.updateLat}
          />
          <input
            className="input-form"
            id="lng-input"
            type="text"
            placeholder="Longitude"
            name="formLng"
            value={this.props.formLng}
            onChange={this.props.updateLng}
          />
          <textarea
            id="info-input"
            type="text"
            placeholder="Info on the art"
            name="formInfo"
            value={this.props.formInfo}
            onChange={this.props.updateInfo}
          />
          <button
            className="submit-button"
            onClick={this.props.handleFormSubmit}
          >Submit your find</button>

        </div>
      </div>
    );
  }
}

export default PostModal;
