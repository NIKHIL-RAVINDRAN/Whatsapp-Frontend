import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js"
import {useEffect,useState} from 'react'
import axios from './axios'

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setMessages(response.data)
    })
    
  }, []);


  
  useEffect(() => {
    const pusher = new Pusher('3775fa1d00b60b0d1d38', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });
  }, [messages]);

  console.log(messages);



  return (
    <div className="app">
      <div className='app-body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>


    </div>
  );
}

export default App;
