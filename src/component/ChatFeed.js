import MessageForum from './MessageForum';
import MyMessage from './MyMessage';
 import TheirMessage from './TheirMessage.js';
const ChatFeed = (props) => {
    //console.log(props)
    const {chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);
        console.log(keys);
         return keys.map((key,index)=>{
             const message = messages[key];
             const lastMessage = index ===0 ? null : keys[index-1];
             const isMyMessage = userName === message.sender.userName;
              return(
                  <div key ={`msg_${index}`} style={{width: "100%"}}>
                  <div className="message-block">
                  {
                      isMyMessage ? <MyMessage/> : <TheirMessage/>
                  }

                  </div>
                  <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px',marginLeft:isMyMessage ? '0px' : '68px'}}>
                  read-receipts
                  </div>

                  </div>
              )

         })
    }
    renderMessages();

  return(
      <div>
          ChatFeed
      </div>
  )
}
export default ChatFeed