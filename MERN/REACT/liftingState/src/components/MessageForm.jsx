import React, { useState } from 'react';
    
const MessageForm= (props) => {
    const [message, setMessage]= useState("")

    const Addmessage = (e) => {
        e.preventDefault();
        props.onNewMessage (message);

    }

    return (
        <form onSubmit={Addmessage }>
            <h1>Set Message</h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMessage(e.target.value) }
                value={ message }
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};
    
export default MessageForm;


