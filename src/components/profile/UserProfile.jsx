import React, { useState } from 'react'
import './userprofile.css'
import { getUserDetailsfromLocalStorage } from '../../data'
function UserProfile({setShowMessageborad,data,active}) {
  const clickchatProfile=()=>{
    setShowMessageborad(true)
  }
  return (
    <div className='userprofile'>
        <div className='profile-img' onClick={clickchatProfile}>
            <img src={data?.profilepicture} alt="" />
            <span>{data.name}</span>
        </div>
       {active&&<span className='active'></span>} 
    </div>
  )
}

export default UserProfile
