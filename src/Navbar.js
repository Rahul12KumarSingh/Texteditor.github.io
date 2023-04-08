import { Link } from 'react-router-dom'

import React, { useState } from 'react'

import PropTypes from 'prop-types'

var colorchange = {
  backgroundColor: "#5A5656",
  color: "white"
}



export default function Navbar(props) {

  // var id_switch = document.getElementById('flexSwitchCheckDefault');

  // id_switch.addEventListener('change', function(){
  //   // if (this.checked == true) {
  //   //   ;
  //   // } else {
  //   //   console.log('NOT CHECKED');
  //   // }


  // });


  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{props.title}</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             
          <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>


            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">About us</Link>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>

          </ul>


          <div class={`form-check form-switch text-${props.mode == 'light' ? 'dark' : 'light'}`}>
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label class="form-check-label" for="flexSwitchCheckDefault" >Dark Mode</label>
          </div>

        </div>



      </div>
    </nav>
  )
}


