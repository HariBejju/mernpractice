import React from 'react'
import '../css/text.css'
import { MaterialSymbolsPerson } from '../components/MaterialSymbolsPerson'

function Text({content,role}) {
  console.log(role)
  if (role =='assistant'){
    return (
      <div className='textcompo'>
          <div className="logos">
          <img src = "/openai-icon.png" alt='openaibro' width={'30px'} height={'30px'} className='openaiimage' color='white' />
          </div>
          <div className="textcontent">
              {content}
          </div>
      </div>
    )
  }else{
    return(
      <div className='textcompo2' >
          <div className="logos">
          <MaterialSymbolsPerson/></div>
          <div className="textcontent">
             {content}
               </div>
      </div>
    )
    
  }
  
}

export default Text