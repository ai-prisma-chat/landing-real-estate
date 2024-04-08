import React from 'react';
import avatarImage from '../images/avatar.jpg'

class BotAvatar extends React.Component {
    render() {
        return <div className="react-chatbot-kit-chat-bot-avatar-container"><img src={avatarImage} alt="Avatar"/></div>;
    }
}

export default BotAvatar;
