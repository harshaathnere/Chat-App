import {useState} from 'react';
const MessageForum =() => {
    const [value, setvalue] = useState('')
    const handleSubmit = () => {

    }
    const handleChange = (event) => {
        setvalue(event.target.value)
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