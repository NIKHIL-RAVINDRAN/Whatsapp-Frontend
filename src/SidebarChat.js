import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
  return (
    <div className='sidebarchat'>
        <Avatar/>
        <div className='sidebarchat-info'>
            <h2>roomname</h2>
            <p>This is message</p>
        </div>
    </div>
  )
}

export default SidebarChat