import React, { useState } from 'react'
import "./profile.css"
import GoogleMap from '../../components/googlemap/GoogleMap'
import ProfileDetails from '../../components/profileDetails/ProfileDetails'
function Profile({userList}) {
  return (
    <div className='profile'>
      <div className="profile-container">
        <ProfileDetails userList={userList}/>
        <div className='profile-right'>
          <div className="title">Adress :</div>
          <div className="adress-details">
            <div className='adress street'>
              <span className='ad-left'>Street :</span> <span className='ad-right'>{userList?.address?.street}</span>
            </div>
            <div className='adress suite'>
              <span className='ad-left '>Suite :</span> <span className='ad-right'>{userList?.address?.suite}</span>
            </div>
            <div className='adress city'>
              <span className='ad-left city'>City :</span> <span className='ad-right'>{userList?.address?.city}</span>
            </div>
            <div className='adress zipcode'>
              <span className='ad-left'>Zipcode :</span> <span className='ad-right'>{userList?.address?.zipcode}</span>
            </div>
          </div>
          <div className="map">
            <GoogleMap userList={userList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
