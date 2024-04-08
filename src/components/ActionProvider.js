import React from 'react';

// eslint-disable-next-line react/prop-types
const ActionProvider = ({createChatBotMessage, setState, children}) => {
    const sendButton = document.getElementsByClassName('react-chatbot-kit-chat-btn-send')[0];

    const setMessage = (message) => {
        const botMessage = createChatBotMessage(message);
        sendButton.removeAttribute('disabled')

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        setMessage,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;