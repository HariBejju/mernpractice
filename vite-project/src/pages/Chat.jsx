import React from 'react'
import { useRef ,useState} from 'react';
import { Input,InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
// import MaterialSymbolsPerson from 'virtual:vite-icons/material-symbols/person';
import { MaterialSymbolsPerson } from '../components/MaterialSymbolsPerson'
import { MdiSendCircle } from '../components/MdiSendCircle.jsx'
import Text from '../components/Text.jsx'
import '../css/chat.css'
import { sendChatRequest } from '../helpers/api.jsx';
function Chat() {
  const inputRef = useRef(null)
  const [chatHistory,setChatMessages] = useState([])
  const handleSubmit = async()=>{
    console.log(inputRef.current?.value)
    const content = inputRef.current?.value 
    // if(inputRef && inputRef.current){
    //   inputRef.current?.value=""
    // }
    const newMessage={role:"user", content}
    setChatMessages((prev)=> [...prev, newMessage])
    const chatData = await sendChatRequest(content)
    setChatMessages([...chatData.chats])
  }
  // const chatHistory = [
  //   {
  //     role: 'user',
  //     content: 'Hi, I need some help with my order.',
  //   },
  //   {
  //     role: 'assistant',
  //     content: 'Sure, I’d be happy to help you. Can you please provide your order number?',
  //   },
  //   {
  //     role: 'user',
  //     content: 'My order number is 123456.',
  //   },
  //   {
  //     role: 'assistant',
  //     content: 'Thank you. I see that your order was placed two days ago and is currently being processed. It should be shipped by tomorrow.',
  //   },
  //   {
  //     role: 'user',
  //     content: 'Great! Can you also help me find a product?',
  //   },
  //   {
  //     role: 'assistant',
  //     content: 'Of course! What product are you looking for?',
  //   },
  //   {
  //     role: 'user',
  //     content: 'I’m looking for a wireless mouse.',
  //   },
  //   {
  //     role: 'assistant',
  //     content: 'We have several wireless mice available. Here are a few popular options: Logitech MX Master 3, Razer Viper Ultimate, and Microsoft Arc Mouse. Would you like more details on any of these?',
  //   },
  //   {
  //     role: 'user',
  //     content: 'Can you tell me more about the Logitech MX Master 3?',
  //   },
  //   {
  //     role: 'assistant',
  //     content: 'The Logitech MX Master 3 is a high-end wireless mouse with advanced features such as a 4000 DPI sensor, ergonomic design, and customizable buttons. It’s great for both productivity and gaming. Would you like to add it to your cart?',
  //   },
  //   {
  //     role: 'user',
  //     content: 'Yes, please add it to my cart.',
  //   },
  //   {
  //     role: 'assistant',
  //     content: 'The Logitech MX Master 3 has been added to your cart. Is there anything else I can help you with?',
  //   },
  //   {
  //     role: 'user',
  //     content: 'No, that’s all for now. Thank you!',
  //   },
  //   {
  //     role: 'assistant',
  //     content: 'You’re welcome! Have a great day!',
  //   }
  // ];
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
          {chatHistory.map((chat,index)=>(
            <Text content={chat.content} role={chat.role} key={index}/>
          ))}
          
          
        <div >
        <InputGroup  >
        <Input id='textbox' ref={inputRef} />
         <InputGroup.Addon>
          <SearchIcon id='search' onClick={handleSubmit}/>
        </InputGroup.Addon>
    </InputGroup>
          </div>  
        
        </div>
       
    </div>
  )
}

export default Chat