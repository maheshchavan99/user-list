
function GoogleMap({userList}) {
  
  return (
    <div className="google-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28243.574438476397!2d77.5787062450049!3d12.930879286208675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682661230017!5m2!1sen!2sin" className="iframe"  style={{width:"100%", height:"250px",border:0,borderRadius:"10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
    <div className="lat-long">
       <p className="lat">Lat: <span>{userList?.address?.geo?.lat}</span></p>
       <p>Long: <span>{userList?.address?.geo?.lng}</span></p>
    </div>
    </div>
  )
}

export default GoogleMap
