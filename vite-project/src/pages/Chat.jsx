import React from 'react'
import { Input,InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
// import MaterialSymbolsPerson from 'virtual:vite-icons/material-symbols/person';
import { MaterialSymbolsPerson } from '../components/MaterialSymbolsPerson'
import { MdiSendCircle } from '../components/MdiSendCircle.jsx'
import Text from '../components/Text.jsx'
import '../css/chat.css'
function Chat() {
  return (
    <div className='chatcompo'>
        <div className='left'>
            <div className="logo">
            <MaterialSymbolsPerson/>
            

            </div>
            <div className="content">
              You are talking to a chatbot
            </div>
            <div className="down">
              You can ask some questions related to knowledge, Bussiness, Advices, Education, etc. But avoid sharing personal information
            </div>
            <div className="button">
              <button className="convo">CLEAR CONVERSATION</button>
            </div>
        </div>
        <div className='right'>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
        <div >
        <InputGroup  >
        <Input id='textbox' />
         <InputGroup.Addon>
          <SearchIcon id='search'/>
        </InputGroup.Addon>
    </InputGroup>
          </div>  
        
        </div>
       
    </div>
  )
}

export default Chat