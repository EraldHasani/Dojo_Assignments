import React, { useState } from 'react';
    
const MessageDisplay = (props) => {
  const  {message } = props

    return (
        <>
           <p>Text to display</p>
            <pre>{message}</pre>
        </>
    );
};
    
export default MessageDisplay;

