import React ,{useState}from 'react'
import './accordionChat.scss';

function AccordionChat() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    }
    
    const ChatBody = () => {
        return (
            <div className={`chat-body ${isOpen ? 'activated' : ''}`}>
                Body
            </div>
        )
    }
    
  return (
    <div className='chat-container'>
        <div className='chat-head' onClick={() => toggleChat()}>
            <p>Chat</p>
        </div>
        <ChatBody />
    </div>
  )
}

export default AccordionChat