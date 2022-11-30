import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chat.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios'
import {useEffect,useState} from 'react'

function Chat({ messages }) {

    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            message: input,
            name: "Nikhil",
            timestamp: "Just now",
            recieved: true,
        });

        setInput('');
    }


    return (
        <div className='chat'>
            <div className='chatheader'>
                <Avatar />
                <div className='chatheader-info'>
                    <h3>Room Name</h3>
                    <p>Last seen at ....</p>
                </div>

                <div className='chatheader-right'>
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='chatbody'>
                {messages.map((message) => (
                    <p className={`chat-message ${message.recieved && 'chat-reciever'}`}>
                        <span className='chat-name'>{message.name}</span>
                        {message.message}
                        <span className='chat-timestamp'>{message.timestamp}</span>
                    </p>

                ))}
            </div>

            <div className='chat-footer'>
                <InsertEmoticonIcon />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder='Type a message'
                        type='text' />
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <MicIcon />

            </div>
        </div>
    )
}

export default Chat