import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './component/ChatFeed'

 const App =() =>{
     return(
         <ChatEngine
           height="100vh"
           projectID="71dba857-eb84-4411-a2a9-bb00d1fe1082"
           userName="Harsha"
           userSecret="12345678"
          renderChatFeed = {(chatAppProps) =><ChatFeed{...chatAppProps}/>}

         />
     )
 }
 export default App;