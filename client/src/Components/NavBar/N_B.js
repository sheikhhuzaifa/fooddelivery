import React from 'react'

import './N_B.css'
const N_B = () => {
  return (
    <div className="header max-width">
      <img
        src="/logo.ico"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Faislabad</div>
            </div>
            
          </div>
         
         
        </div>
       
        <div className="profile-wrapper">
          <img
            src="/user.ico"
            className="header-profile-image"
            alt="Profile"
          />
          <span className="header-username">User</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default N_B
