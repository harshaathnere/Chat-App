import { PictureOutlined } from '@ant-design/icons';
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
    const handleUpload = (event) => {
        sendMessage();

    }
    const handleChange = (event) => {
    setValue(event.target.value)
        isTyping(props, chatId)
    }
    return(
        <form className="message-forum" onSubmit={handleSubmit}>
        <input
            className="message-input"
            placeholder="Send a message"
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
<label htmlFor="upload-button">
<span className="image-button">
<PictureOutlined className="picture-icon"/>
</span>

</label>
<input
    type="file"
    multiple={false}
    id="upload-button"
    style={{display: 'none'}}
    onChange={handleUpload}
/>
       
           
        </form>
    )

}
export default MessageForum;