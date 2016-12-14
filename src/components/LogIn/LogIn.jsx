import React, { Component } from 'react';
import style from './LogIn.css';

class LogIn extends Component {

  // imgScroll() {
  //   let imgBox = document.querySelector('.img-box');
  //   let distance = 5;
  //   setInterval(() =>{
  //     imgBox.style.left= `${distance}px`;
  //     if (distance < -200) {
  //       distance = 1280;
  //     } else {
  //       distance -= .2;
  //     }
  //   }, 5);
  // };

  // imgScroll2() {
  //   let imgBox = document.querySelector('.img-box2');
  //   let distance = 210;
  //   setInterval(() =>{
  //     imgBox.style.left= `${distance}px`;
  //     if (distance < -200) {
  //       distance = 1280;
  //     } else {
  //       distance -= .2;
  //     }
  //   }, 5);
  // };

  // $(document).ready(function(){
  //   imageScroll();
  // })

  render(){
    return (
      <div className="login-page">

        <div className="img-box"></div>
        <div className="img-box2"></div>
        <div className="img-box3"></div>
        <div className="img-box4"></div>
        <div className="img-box5"></div>
        <div className="img-box6"></div>

        <div className="img-box7"></div>
        <div className="img-box8"></div>
        <div className="img-box9"></div>
        <div className="img-box10"></div>
        <div className="img-box11"></div>
        <div className="img-box12"></div>

        <div className="img-box13"></div>
        <div className="img-box14"></div>
        <div className="img-box15"></div>
        <div className="img-box16"></div>
        <div className="img-box17"></div>
        <div className="img-box18"></div>

        <div className="img-box19"></div>
        <div className="img-box20"></div>
        <div className="img-box21"></div>
        <div className="img-box22"></div>
        <div className="img-box23"></div>
        <div className="img-box24"></div>

        <div className="login-form">
          <h1>Street Art</h1>
          <input
            type="text"
            placeholder="Username"
          />
          <input
            type="text"
            placeholder="Password"
          />
          <button
            className="register-button"
            onClick={()=>{
              this.imgScroll(),
              this.imgScroll2()
              // document.querySelector('.login-page').style.display = "none"
            }}
          >Register</button>
          <button
            className="login-button"
            onClick={()=>{document.querySelector('.login-page').style.display = "none"}}
          >Log In</button>

        </div>
      </div>
    )
  }
}

export default LogIn;
