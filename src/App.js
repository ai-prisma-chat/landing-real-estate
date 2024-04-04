import {useEffect} from "react";
import React from 'react';

import Chatbot, {createChatBotMessage} from "react-chatbot-kit";
import MessageParser from "./components/MessageParser";
import ActionProvider from "./components/ActionProvider";

import uuid from "react-uuid";

import 'react-chatbot-kit/build/main.css';
import './App.css';

function App() {
    useEffect(() => {
        if (!sessionStorage.getItem('clientId')) {
            sessionStorage.setItem('clientId', uuid())
        }
    }, []);

    class ChatWrapper extends React.Component {
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
