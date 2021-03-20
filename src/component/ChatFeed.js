import MessageForum from './MessageForum';
import MyMessage from './MyMessage';
 import TheirMessage from './TheirMessage.js';
const ChatFeed = (props) => {
    const {chats, activechat, userName, messages } = props;
    const chat = chats && chats[activechat];

    const renderMessage = () => {
        const keys = Object.keys(messages);
        console.log(messages)
    }
    renderMessage();
 console.log(chat,  userName, messages);
  return(
      <div>
          ChatFeed
      </div>
  )
}
export default ChatFeed