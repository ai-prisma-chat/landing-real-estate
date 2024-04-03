// in MessageParser.js
import React from 'react';

// eslint-disable-next-line react/prop-types
const MessageParser = ({ children, actions }) => {
  const clientId = sessionStorage.getItem('clientId')

  const parse = async (message) => {
    const response = await fetch('https://api.ai-chatbot-demo.com/chat/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message, id: clientId })
    });
    const data = await response.json();

    // eslint-disable-next-line react/prop-types
    actions.setMessage(data.message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;