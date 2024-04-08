import React from 'react';

import Chatbot, {createChatBotMessage} from "react-chatbot-kit";
import MessageParser from "./components/MessageParser";
import ActionProvider from "./components/ActionProvider";
import {ClientContext} from "./components/ClientContext";
import BotAvatar from "./components/BotAvatar";

import 'react-chatbot-kit/build/main.css';
import './App.css';

function App() {
    class ChatWrapper extends React.Component {
        static contextType = ClientContext;

        constructor(props) {
            super(props);
            this.state = {showChat: true};
            this.handleTriggerClick = this.handleTriggerClick.bind(this);
        }

        handleTriggerClick() {
            this.setState(state => ({
                showChat: !state.showChat
            }));
        }

        render() {
            return (
                <div className="App">
                    <div className={'app-chatbot-container' + (this.state.showChat ? '' : ' hide')}>
                        <Chatbot
                            config={{
                                botName: 'manager',
                                initialMessages: [createChatBotMessage('Напишите своё пожелание, а мы подберем для Вас лучший вариант 😉')],
                                customComponents: {
                                    botAvatar: (props) => <BotAvatar/>
                                }
                            }}
                            headerText='Чат с менеджером'
                            placeholderText='Напишите свое сообщение'
                            messageParser={MessageParser}
                            actionProvider={ActionProvider}
                        />
                    </div>
                    <button type="button" title={'Чат с менеджером'} className="app-chatbot-trigger"
                            onClick={this.handleTriggerClick}></button>
                </div>
            );
        }
    }

    return <ChatWrapper/>;
}

export default App;
