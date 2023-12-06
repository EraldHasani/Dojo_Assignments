import React, { useState } from 'react';
import MessageDisplay from './components/MessageDisplay';
import MessageForm from './components/MessageForm';
import './App.css'
function App() {
  
    const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
    const merrMesazhin =(newMessage) => {
      setCurrentMsg(newMessage)
    }
  
    return (
        <>
          <MessageForm  onNewMessage= {merrMesazhin} />
          <MessageDisplay message={currentMsg}/>
        </>
    );
}
    
export default App;


