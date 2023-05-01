import { Route, Routes } from 'react-router-dom';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Profile from './pages/profile/Profile';
import Gallery from './pages/gallery/Gallery';
import Posts from './pages/posts/Posts';
import Todo from './pages/todo/Todo';
import Sidebar from './components/sidebar/Sidebar';
import Chats from './components/charts/Chats';
import LogoutUsers from './pages/logoutdetails/LogoutUsers';
import { useEffect, useState } from 'react';
import {clearLocalStorage, ladingPage} from './data'
import {setUserDetailsfromLocalStorage} from './data'
function App() {
  
  const [isUser, setUser] = useState(ladingPage.user)
  const [showProfile, setprofile] = useState(false)
  const[userDetails,setUserDetails]=useState([])
  const [userList,setUserList]=useState()

 
  useEffect(()=>{
    const fetchUserListdata=async()=>{
      const response=await fetch('https://panorbit.in/api/users.json')
      const data=await response.json()
      setUserDetails(data)
    }
    fetchUserListdata()
  },[])

  const handleProfile=(users)=>{
    if(users){
      setUserDetailsfromLocalStorage(users)
      setUser(ladingPage.profile)
      setUserList(users)
    }

  }
    const profileClick = () => {
        setprofile(!showProfile)
    }
    const changeProfile=(data)=>{
      setUserDetailsfromLocalStorage(data)
      setUserList(data)
    }
    const logoutUser=()=>{
      clearLocalStorage()
      setUser(ladingPage.user)
    }

  return (
    <>
      {isUser === ladingPage.profile && (
        <>
          <Topbar 
          setUser={setUser}
          logoutUser={logoutUser}
           profileClick={profileClick} 
           showProfile={showProfile} 
           userList={userList} 
           changeProfile={changeProfile} 
           userDetails={userDetails}
           setprofile={setprofile}
           
           />
          <div className='homePage'>
            <Sidebar />
            <Routes>
              <Route path='/' element={<Profile userList={userList}/>} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/todo' element={<Todo />} />
            </Routes>
          </div>
          <div className='mainchats' >
            <Chats userDetails={userDetails} />
          </div>
        </>
      )}
      {isUser === ladingPage.user && (<LogoutUsers 
      handleProfile={handleProfile}
       userDetails={userDetails}
       />)}
    </>

  );
}

export default App;
