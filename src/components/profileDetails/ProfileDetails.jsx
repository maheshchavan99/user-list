
function ProfileDetails({userList}) {
  // console.log(userdetails)
  return (
    <div className='profile-left'>
    <div className="pf-img">
      <img src={userList?.profilepicture} alt="" />
      <span>{userList?.name}</span>
    </div>
    <div className="pf-details">
      <div className='username pd'>
        <span className='leftside'>UserName :</span> <span className='titls rightside'>{userList?.username}</span>
      </div>
      <div className='email pd'>
        <span className='leftside'>E-mail :</span> <span className='rightside'>{userList?.email}</span>
      </div>
      <div className='email pd'>
        <span className='leftside'>Phone :</span> <span className='rightside'>{userList?.phone}</span>
      </div>
      <div className='pd'>
        <span className='leftside'>Website :</span> <span className='rightside'>{userList?.website}</span>
      </div>
    </div>
    <hr style={{ width: "50%" }} />
    <div className="company">
      <div className="title">Company</div>
      <div className="company-detaile">
        <div className="cp-name">
          <span className='leftside'>Name :</span> <span className='right-side'>{userList?.company?.name}</span>
        </div>
        <div className="cp-name catch">
          <span className='CatchPhrase leftside'>CatchPhrase :</span> <span className='right-side'>{userList?.company?.catchPhrase}</span>
        </div>
        <div className="cp-name">
          <span className='bs leftside'>Bs :</span> <span className='right-side'>{userList?.company?.bs}</span>
        </div>
      </div>
    </div>

  </div>
  )
}

export default ProfileDetails
