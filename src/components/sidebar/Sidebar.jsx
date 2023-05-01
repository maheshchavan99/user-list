import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { list } from './data'
function Sidebar() {
  const [activeSelect, setActiveSelect] = useState(1)
  return (
    <div className='sidebar'>
      <div className="sidebar-container">
        <div className="sidebar-content">
          <nav className='lists'>
            <ul className='list-item'>
              {list.map((data) =>
                <li key={data.id} onClick={(() => setActiveSelect(data.id))}><Link to={data.path} className={`${data.linkId} ${data.id===activeSelect ? "activeHover" : ""}`} >{data.title}</Link></li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
