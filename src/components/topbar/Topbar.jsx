import './topbar.css'
function Topbar({
    logoutUser,
    setprofile, 
    showProfile,
     profileClick, 
     userList,
     userDetails, 
     changeProfile
     }) {
    const userData = userDetails?.users?.filter((item) => item?.id !== userList?.id)
    return (
        <>
            <div className='topbar'>
                <div className='content'>
                    <div className='heading'>Profile</div>
                    <div className='profile-details' onClick={profileClick}>
                        <img src={userList?.profilepicture} alt="" className='user-image' />
                        <span className='username'>{userList?.name}</span>
                    </div>
                </div>
            </div>
            {showProfile && (
                <div className='profile-popup' onClick={(()=>setprofile(false))}>
                    <div className="profile-detail">
                        <img src={userList?.profilepicture} alt="" />
                        <div className='username'>{userList?.name}</div>
                        <div className='email'>{userList?.email}</div>
                    </div>

                    <>
                    {userData?.slice(0,2)?.map((user) => (
                        <>
                    <hr style={{ width: "100%" }} />
                    <div className='profile-show' onClick={(() => changeProfile(user))} style={{ cursor: "pointer" }}>
                        <img src={user?.profilepicture} alt="" className='user-image' />
                        <span className='username'>{user?.name}</span>
                    </div>
                    </>
                    ))}
                    </>
                    <button className='singout-btn' onClick={logoutUser}>Sign out</button>
                </div>
            )}

        </>
    )
}

export default Topbar
