import React from 'react'
import './logoutuser.css'
import banner from '../../assets/Banner.png'
function LogoutUsers({userDetails,handleProfile}) {
    return (
        <div className='lagoutuser'>
            <img src={banner} alt="" />
            <div className="container">
                <div className="header">
                    <div className="title">Select an Account</div>
                </div>
                <div className="contents">
                <div className="users">
                    {userDetails?.users?.map((users)=>{
                        console.log(users)
                        return(

                     <>
                     <div className="userDetails" onClick={(()=>handleProfile(users))}>
                      <img src={users.profilepicture}/>           
                       <span>{users.username}</span>
                      </div>
                       <hr />
                     </> 
                        )

                    })}
                </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutUsers
