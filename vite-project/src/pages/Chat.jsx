import React, { useLayoutEffect } from 'react';
import { useRef, useState } from 'react';
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { MaterialSymbolsPerson } from '../components/MaterialSymbolsPerson';
import { MdiSendCircle } from '../components/MdiSendCircle.jsx';
import Text from '../components/Text.jsx';
import '../css/chat.css';
import { sendChatRequest } from '../helpers/api.js';
import { useAuth } from '../context/AuthContext.jsx';
import {toast} from 'react-hot-toast'
import { getUserChats } from '../helpers/api.js';

function Chat() {
  const inputRef = useRef(null);
  const [chatHistory, setChatMessages] = useState([]);
  const auth = useAuth()

  const handleSubmit = async () => {
    console.log(inputRef.current?.value);
    const content = inputRef.current?.value;
    if (inputRef && inputRef.current) {
      inputRef.current.value = '';
    }
    const newMessage = { role: 'user', content };
    setChatMessages((prev) => [...prev, newMessage]);
    const chatData = await sendChatRequest(content);
    setChatMessages((prev) => [ ...chatData.chats]);
  };
useLayoutEffect(()=>{
  if(auth?.isLoggedIn && auth.user){
    toast.loading("loading chats",{id:"loadchats"})
    getUserChats().then((data)=>{
      setChatMessages([...data.chats])
      toast.success("successfully loaded chats",{id:"loadchats"})
    }).catch(err=>{
      console.log(err)
      toast.error("loading failed",{id:"loadchats"})
    })
  }
},[auth])
  return (
    <div className='chatcompo'>
      <div className='left'>
        <div className="logo">
          <MaterialSymbolsPerson />
        </div>
        <div className="content">
          You are talking to a chatbot
        </div>
        <div className="down">
          You can ask some questions related to knowledge, Business, Advices, Education, etc. But avoid sharing personal information
        </div>
      </div>
      <div className='right'>
        <div className='chat-messages'>
          {chatHistory.map((chat, index) => (
            <Text content={chat.content} role={chat.role} key={index} />
          ))}
        </div>
        <div className='input-container'>
          <InputGroup>
            <Input id='textbox' ref={inputRef} />
            <InputGroup.Addon>
              <SearchIcon id='search' onClick={handleSubmit} />
            </InputGroup.Addon>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default Chat;
