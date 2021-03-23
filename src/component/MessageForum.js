import {useState} from 'react';
import {sendMessage, isTyping} from 'react-chat-engine';

const MessageForum =(props) => {
    const [value, setValue] = useState('')
    const {chatId, creds} = props

    const handleSubmit = (event) => {
            event.preventDefault();
            const text = value.trim();
            if(text.length>0){
               sendMessage(creds, chatId,{text});
               setValue('');
            }
    }
    const handleChange = (event) => {
    setValue(event.target.value)
        isTyping(props, chatId)
    }
    return(
        <div className="message-forum" onSubmit={handleSubmit}>
        <input
            className="message-input"
            placeholder="Send a message"
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
           
        </div>
    )

}
export default MessageForum;