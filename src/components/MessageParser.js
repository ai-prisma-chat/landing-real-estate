// in MessageParser.js
import React from 'react';
import {useContext} from 'react';
import {ClientContext} from "./ClientContext";

// eslint-disable-next-line react/prop-types
const MessageParser = ({children, actions}) => {
    const clientId = useContext(ClientContext).id;
    const sendButton = document.getElementsByClassName('react-chatbot-kit-chat-btn-send')[0];

    const parse = async (message) => {
        sendButton.setAttribute('disabled', '')

        const response = await fetch('https://api-19.ai-chatbot-demo.com/chat/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message, id: clientId})
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
